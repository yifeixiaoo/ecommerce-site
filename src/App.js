import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart'
import { Home } from './pages/home/home';
import { ShopContextProvider } from './context/shop-context';
import { ProductPage } from './pages/productPage/productPage';
import { Lighting } from './pages/shop/categories/lighting';
import { Living } from './pages/shop/categories/living';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/shop" element={<Shop />}/>
            <Route path = "/shop/living" element={<Living />}/>
            <Route path = "/shop/bed" element={<Lighting />}/>
            <Route path = "/shop/bath" element={<Lighting />}/>
            <Route path = "/shop/kitchen" element={<Lighting />}/>
            <Route path = "/shop/lighting" element={<Lighting />}/>
            <Route path = "/shop/seating" element={<Lighting />}/>
            <Route path = "/shop/product/:id" element={<ProductPage />}></Route>
            <Route path = "/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
