import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authActions } from '../store/slices/authSlice';

const Header = () => {

  const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(authActions.login())
  }
  const handleLogOut = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
        {isAuthenticated && 

      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul> 
      </nav> 
        }
    </header>
  );
};

export default Header;
