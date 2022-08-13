import './stylePages/HomePage.css';
import Product from '../components/Product';

const HomePage = () => {
  return (
    <div className='home-page-container'>
      <h2 className='home-page-title'>Latest Products</h2>
      <div className='home-page-products'>
        <Product />
      </div>
    </div>
  )
}

export default HomePage;
