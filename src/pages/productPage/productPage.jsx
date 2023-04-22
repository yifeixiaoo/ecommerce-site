import React, { useContext, useState } from "react";
import "./productPage.css"
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { Footer } from "../../components/footer";
import { ProductSlider } from "../../components/productSlider";


export const ProductPage = () => {
    const { id } = useParams();
    const product = PRODUCTS.find((product) => product.id === parseInt(id));
    
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        if (quantity >= 1) {
            setQuantity(quantity + 1);
        }
    }

    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const { cartItems, addToCart } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    return (
        <>
            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <div className="product-left">
                            <div className="big-img">
                                <img src={product.productImage} alt="product" />
                            </div>
                        </div>
                        <div className="product-right">
                            <h3 className="product-big-name"> {product.productName} </h3>
                            <div className="product-description"> {product.description} </div>
                            <div className="product-quant">
                                <p>Quantity</p>
                                <div className="product-btns">
                                    <button onClick={decreaseQuantity}>-</button>
                                    <p className="quantity"> {quantity} </p>
                                    <button onClick={increaseQuantity}>+</button>
                                </div>
                                <p className="product-price"> ${product.price * quantity}.00 </p>
                            </div>
                            <div className="atc-buy">
                                <button className="atc-btn" onClick={() => addToCart(id, quantity)}>
                                    add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                                </button>
                                <button className="buy-btn">buy now</button>
                            </div>
                        </div>
                    </div>

                    <div className="specifications">
                        <div className="spec">
                            <p className="spec-title">Texture:</p>
                            <p className="title-desc"> {product.texture} </p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Weight:</p>
                            <p className="title-desc"> {product.weight} </p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Dimensions:</p>
                            <p className="title-desc"> {product.dimensions} </p>
                        </div>
                    </div>
                    <ProductSlider />
                </div>
            </div>
            <Footer/>
        </>
    );
};
