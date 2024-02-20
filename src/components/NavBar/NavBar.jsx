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
        &nbsp; | &nbsp; &nbsp;
        <Link to="/orders" >
          Prev Orders
        </Link>
        &nbsp; | &nbsp; &nbsp;
        <Link to="/cart" >
          <img src="https://www.childcaps.com/Upload/Categories/e435bc88-9d50-4e03-baa8-924fa7d0356f.png" alt="cart" />
        </Link>
        &nbsp; | &nbsp;
        {user ? 
        <>       
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;<Link to="" onClick={handleLogOut} >
            Log Out
          </Link> 
        </> 
        :
        <Link to='/login'>
          <img src="https://static.vecteezy.com/system/resources/previews/022/286/343/original/user-icon-pink-3d-render-png.png" alt="Login/Sign in" />
        </Link>
      }
      </span>
    </nav>
  );
}