import './styleComponents/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
      <nav className="navbar">
          <div className="nav-logo">
              <h1>Shopping App</h1>
            </div>
          <ul className="nav-links">
              <li>
          <Link to="/cart">
            <i><FaShoppingCart /></i>
            Cart
            <span className='cart-logo'>0</span>
                  </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className='hamburger-menu'>
      <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;