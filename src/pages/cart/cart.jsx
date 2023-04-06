import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import "./cart.css"

import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalPrice = getTotalCartAmount();

    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1> Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return <CartItem data = {product}/>
                    }
                })}
            </div>
            <div className="checkout">
                <p> Subtotal: ${totalPrice}</p>
                <button onClick={() => navigate("/shop")}> Continue Shopping </button>
                <button> Checkout </button>
            </div>
        </div>
      );
};