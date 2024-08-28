import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/slices/cartSlice';

const CartItem = ({item}) => {
  const { title, quantity, total, price } = item;
  const dispatch = useDispatch()

  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart(item))
  }

  const handleAddItem = () => {
    dispatch(cartActions.addToCart(item))
  }

  console.log('asd props.item',item)

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2)}{' '} */}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveItem}>-</button>
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
