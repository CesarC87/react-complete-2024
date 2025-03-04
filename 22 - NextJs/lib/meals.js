import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula la espera de la BBDD

  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true }); // Slugify convierte texto a string para que sea válido como URL, sin whitespace, lowercase, etc.
  meal.instructions = xss(meal.instructions); // Evita el cross site scripting, para evitar codigo malicioso

  const extension = meal.image.name.split(".").pop(); // Saca el ultimo elemento para saber cual es la extension (jpg, etc...)
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error saving image");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `).run(meal)
};
