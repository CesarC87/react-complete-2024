import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import MealsLoadingPage from "./loading-out";

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  // Con server components podemos hace un async del componente

  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Meals created by <span className={classes.highlight}>you</span>
        </h1>
        <p>Choose your favourite recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage/>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
