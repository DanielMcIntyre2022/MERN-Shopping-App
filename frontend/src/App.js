import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages  //
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

// Components //
import Navbar from './components/Navbar';


function App() {
  return (
  <Router>
      < Navbar />
      {/* SideDrawer */}
      {/* Backdrop */}
      <main>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product/:id" component={ProductPage} />
          <Route exact path="/cart" component={CartPage} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
