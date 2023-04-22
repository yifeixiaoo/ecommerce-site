import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    return (
        <div key={id} className="product">
            <Link onClick={() => window.scrollTo(0, 0)}
                        to={`/shop/product/${id}`}>
                        <div className="card">
                            <img className="product--image" src={productImage} alt="product"/>
                            <h3> {productName} </h3>
                            <p className="price"> ${price} </p>
                        </div>
                    </Link>
        </div>
    );
}