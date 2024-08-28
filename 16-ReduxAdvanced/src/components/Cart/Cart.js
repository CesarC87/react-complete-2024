import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ cartProducts }) => {
  console.log('asd from cart', cartProducts)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartProducts.length > 0 && cartProducts.map( item => {
            return (
              <CartItem
                item={item}
              />
            )
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
