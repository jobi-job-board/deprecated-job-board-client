import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <nav>
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Company logo" />
          </Link>
        </div>
        <ul className="navbar-menu flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Job</Link>
          </li>
          <li>
            <Link to="/">Explore</Link>
          </li>
          <li>
            <Link to="/">Category</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
        </ul>
        <ul className="navbar-buttons flex">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#" className="btn-round">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
