import './styleComponents/Product.css'
import { Link } from 'react-router-dom';

const Product = () => {
  return (
      <div className="product">
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="productname" />
          
          <div className='product-info'>
              <p className='info-name'></p>
              <p className='info-description'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam vero non magni architecto ad, eius distinctio delectus quis.
              </p>
              <p className='info-price'>
                  $499.99
              </p>
              <Link to={`/product/${1111}`} className='info-button'>View</Link>
          </div>
      </div>
  )
}

export default Product;
