import './styleComponents/Navbar.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = (props) => {
  return (
      <nav className="navbar">
      <div className="nav-logo">
        <Link to='/'>
          <h2>Shopping App</h2>
        </Link>
            </div>
          <ul className="nav-links">
              <li>
          <Link to="/cart" className='cart-link'>
            <i><FaShoppingCart /></i>
            <span>
              Cart
            <span className='cart-logo'>0</span>
            </span>
                  </Link>
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      <div className='hamburger-menu' onClick={props.click}>
      <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar;