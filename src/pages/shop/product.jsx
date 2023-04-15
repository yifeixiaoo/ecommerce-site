import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <div key={id} className="product">
            <Link
                onClick={() => window.top(0, 0)}
                to={`/shop/product/${id}`}
            >
                <div className="product-header">
                    <img src={productImage} alt="product1" />
                </div>
                <div className="product-details">
                    <p>{productName}</p>
                    <p className="item-price">${price}</p>
                </div>
            </Link>
        </div>
    );
}