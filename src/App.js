import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Home } from "./pages/home/home";
import { ShopContextProvider } from "./context/shop-context";
import { ProductPage } from "./pages/productPage/productPage";
import { Lighting } from "./pages/shop/categories/lighting";
import { Living } from "./pages/shop/categories/living";
import { Bed } from "./pages/shop/categories/bed";
import { Bath } from "./pages/shop/categories/bath";
import { Dining } from "./pages/shop/categories/dining";
import { Seating } from "./pages/shop/categories/seating";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/living" element={<Living />} />
            <Route path="/shop/bed" element={<Bed />} />
            <Route path="/shop/bath" element={<Bath />} />
            <Route path="/shop/dining" element={<Dining />} />
            <Route path="/shop/lighting" element={<Lighting />} />
            <Route path="/shop/seating" element={<Seating />} />
            <Route path="/shop/product/:id" element={<ProductPage />}></Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
