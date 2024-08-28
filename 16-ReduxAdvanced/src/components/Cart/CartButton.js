import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/slices/uiSlice';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const toggleCart = () => {  
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
