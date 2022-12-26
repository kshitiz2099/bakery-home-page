import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { CartUpdate } from './Contexts/CartContext';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>

        <CartUpdate>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/checkout" element = {<Checkout/>}/>
          </Routes>

        </CartUpdate>
      </Router>
    </div>
  );
}

export default App;
