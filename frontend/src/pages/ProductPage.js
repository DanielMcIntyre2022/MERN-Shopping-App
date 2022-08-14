import './stylePages/ProductPage.css';

const ProductPage = () => {
  return (
    <div className='product-page-container'>
      <div className='product-page-left'>
        <div className='left-image'>
          <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />
        </div>
        <div className="left-info">
          <p className="left-name">Product 1</p>
          <p>Price: $499</p>
          <p>Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, aut? Qui totam dolorem corrupti dolores?</p>
        </div>
      </div>
      <div className='product-page-right'>
        <div className="right-info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
