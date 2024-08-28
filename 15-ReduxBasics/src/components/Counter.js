import { counterActions } from '../store/slices/counterSlice';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  // const toggleCounterHandler = () => {};

  const counterState = useSelector(state=>state.counter.counter)
  const showCounter = useSelector(state=>state.counter.show)
  
  const dispatch = useDispatch()

  const handleIncrement = () => {
    // dispatch({ type: 'increment'})
    dispatch(counterActions.increment())
  }
  const handleIncrease = () => {
    // dispatch({ type: 'increase', amount: 5})
    dispatch(counterActions.increase(5))
  }
  const handleDecrement = () => {
    // dispatch({ type: 'decrement'})
    dispatch(counterActions.decrement())
  }
  const handleToggle = () => {
    // dispatch({ type: 'decrement'})
    dispatch(counterActions.toggle())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterState}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increase by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggle}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
