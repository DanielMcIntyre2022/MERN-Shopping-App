import './stylePages/CartPage.css';
import CartItem from '../components/CartItem';

const CartPage = () => {
  return (
    <div className='cartpage-container'>
      <div className='cartpage-left'>
        <h2>Shopping Cart</h2>

        <CartItem />
      </div>
      <div className='cartpage-right'>
        <div className='cart-info'>
          <p>Subtotal: (0) items</p>
          <p>$499.99 </p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage;