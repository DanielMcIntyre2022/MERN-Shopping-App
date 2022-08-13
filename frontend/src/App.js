import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Pages  //
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

// Components //
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  // create state to turn the sidetoogle on and off 
  const [sideToogle, setSideToogle] = useState(false);


  return (
  <Router>
      < Navbar click={() => setSideToogle(true) } />
      < SideDrawer show={sideToogle} />
      <Backdrop show={sideToogle} click={() => setSideToogle(false) } />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/product/:id" element={<ProductPage/>} />
          <Route exact path="/cart" element={<CartPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
