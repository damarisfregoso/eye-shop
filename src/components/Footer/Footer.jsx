import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {

  return (
    <footer className='Footer'>

      <div className="footer-one">
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
      </div>  

      <div className="footer-two">
        <p>Developed By: Damaris Fregoso</p>
        <p>Role: Software Engineer</p>
        <p>Portfolio: <a href="https://damarisfregoso.godaddysites.com/">&nbsp;Click To View My Profolio</a></p>
        <p>GitHub: <a href="https://github.com/damarisfregoso">&nbsp;Click To View My GitHub</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/damaris-fregoso/">&nbsp;Click To View LinkedIn</a></p>
      </div>

    </footer>
  );
}