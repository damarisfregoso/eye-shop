import { NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import DarkMode from '../DarkMode/DarkMode';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <DarkMode />
      <span>
        <NavLink exact to="/" activeClassName="activeLink">
          Eye Shop
        </NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/purchases" activeClassName="activeLink">
          Purchases
        </NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/cart" activeClassName="activeLink">
          Cart
        </NavLink>
        &nbsp;&nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp;&nbsp;<NavLink to="" onClick={handleLogOut} activeClassName="activeLink">
          Log Out
        </NavLink>
      </span>
    </nav>
  );
}