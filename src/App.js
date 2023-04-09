import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart'
import { Home } from './pages/home/home';
import { ShopContextProvider } from './context/shop-context';
import { ProductPage } from './pages/productPage/productPage';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/shop" element={<Shop />}/>
            <Route path = "/shop/product/:id" element={<ProductPage />}></Route>
            <Route path = "/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
