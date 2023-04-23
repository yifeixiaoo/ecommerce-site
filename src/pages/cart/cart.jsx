import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css";
import { ProductSlider } from "../../components/productSlider";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalPrice = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <div className="cart-container">
        <div className="container">
          <div>
            <h1> Your Cart Items</h1>
          </div>
          <div className="cart-div">
            <div className="cartItems">
              {PRODUCTS.map((product) => {
                if (cartItems[product.id] > 0) {
                  return <CartItem data={product} />;
                }
              })}
            </div>
            <div className="checkout">
              <h1> Order Summary </h1>
              <div className="subtotal">
                <h2> Subtotal: </h2>
                <h2> ${totalPrice}.00 </h2>
              </div>
              <div className="tax">
                <h2> Estimated Tax: </h2>
                <h2> $0.00 </h2>
              </div>
              <div className="order-total">
                <h2> Order Total: </h2>
                <h2> ${totalPrice}.00 </h2>
              </div>
              <div className="co">
                <button className="co-btn"> Checkout </button>
              </div>
              <div className="cs">
                <button className="cs-btn" onClick={() => navigate("/shop")}>
                  {" "}
                  Continue Shopping{" "}
                </button>
              </div>
            </div>
          </div>

          <ProductSlider />
        </div>
      </div>
      <Footer />
    </>
  );
};
