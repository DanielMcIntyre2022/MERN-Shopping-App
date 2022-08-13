import './styleComponents/SideDrawer.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const SideDrawer = ({ show, click }) => {
  const SideDrawerClass = ["side-drawer"];
  if (show) {
    SideDrawerClass.push("show");
  }

  return (
    <div className={SideDrawerClass.join(" ")}>
        <ul className='side-drawer-links' onClick={click}>
        <li>
          <Link to="/cart" className='side-drawer-cart-link'>
            <i><FaShoppingCart /></i>
            <span>
              Cart
            <span className='side-drawer-cart'>0</span>
            </span>
          </Link>
        </li>
         <li>
          <Link to="/">
            Shop
          </Link>
        </li>
         </ul>
    </div>
  )
}

export default SideDrawer;
