import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/checkout" element = {<Checkout/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
