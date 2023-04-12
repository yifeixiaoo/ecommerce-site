import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        // <div className="product">
        //     <img src={productImage} />
        //     <div className="description">
        //         <p>
        //             <b>{productName}</b>
        //         </p>
        //         <p>${price}</p>
        //     </div>
        //     <button className="addToCartBttn" onClick={() => addToCart(id)}>
        //         Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        //     </button>
        // </div>
        <div key={id} className="product normal">
            <Link
                onClick={() => window.top(0, 0)}
                to={`/shop/product/${id}`}
            >
                <div className="product-header">
                    <img src={productImage} alt="product1" />
                </div>
                <div className="product-details">
                    <p>{productName}</p>
                    <p className="item-price">{price}$</p>
                </div>
            </Link>
        </div>
    );
}