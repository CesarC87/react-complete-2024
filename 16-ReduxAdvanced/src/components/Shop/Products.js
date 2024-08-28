import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  {
    id: 1,
    price: 5,
    title: 'First product',
    description: 'A product with id: 1'
  },
  {
    id: 2,
    price: 10,
    title: 'Second product',
    description: 'A product with id: 2'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          PRODUCTS.map( product => {
            return ( 
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )
          })
        }
      </ul>
    </section>
  );
};

export default Products;
