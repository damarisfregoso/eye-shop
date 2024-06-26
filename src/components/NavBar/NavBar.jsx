import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import DarkMode from '../DarkMode/DarkMode';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='NavBar'>
      <DarkMode />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </button>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Eye Shop
        </Link>
        &nbsp;| &nbsp;&nbsp;&nbsp;
        <Link to="/orders" onClick={() => setMenuOpen(false)}>
          Prev Orders
        </Link>
        &nbsp; | &nbsp;&nbsp;&nbsp;
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          <img src="https://www.childcaps.com/Upload/Categories/e435bc88-9d50-4e03-baa8-924fa7d0356f.png" alt="cart" />
        </Link>
        | &nbsp;
        {user ? (
          <>
            <span className="welcome-name">Welcome, {user.name} </span>
            &nbsp;
            <Link to="" className="logout" onClick={() => { handleLogOut(); setMenuOpen(false); }}>
              Log Out?
            </Link>
          </>
        ) : (
          <Link to='/login' onClick={() => setMenuOpen(false)}>
            <img src="https://static.vecteezy.com/system/resources/previews/022/286/343/original/user-icon-pink-3d-render-png.png" alt="Login/Sign in" />
          </Link>
        )}
      </div>
    </nav>
  );
}