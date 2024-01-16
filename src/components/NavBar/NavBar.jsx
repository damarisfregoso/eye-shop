import { Link } from 'react-router-dom';
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
        <Link to="/" >
          Eye Shop
        </Link>
        &nbsp; | &nbsp;
        <Link to="/purchases" >
          Purchases
        </Link>
        &nbsp; | &nbsp;
        <Link to="/cart" >
          Cart
        </Link>
        &nbsp;&nbsp;
        {user ? 
        <>       
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link to="" onClick={handleLogOut} >
            Log Out
          </Link> 
        </> 
        :
        <Link to='/login'>Human</Link>
      }

      </span>
    </nav>
  );
}