import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';
import NewsletterSignup from './NewsLetterSignUp';

function MainNavigation() {

  const isActive = ({isActive}) => isActive ? classes.active : undefined

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={isActive} to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to={'/events'}>Events</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to={'/newsletter'}>Newsletter</NavLink>
          </li>
          {/* <li>
            <NavLink className={isActive} to={'/events/new'}>New Event</NavLink>
          </li> */}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
