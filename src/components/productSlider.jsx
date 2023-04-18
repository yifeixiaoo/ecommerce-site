import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./productSlider.css";
import { PRODUCTS } from "../products";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 750 },
        items: 3
    },
    miniTablet: {
        breakpoint: { max: 750, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const ProductSlider = () => {
    return (
        <div className="productSlider">
            <h1> Featured Items </h1>
            <Carousel responsive={responsive}>
                {PRODUCTS.map((product) => (
                    <Link onClick={() => window.top(0, 0)}
                        to={`/shop/product/${product.id}`}>
                        <div className="card">
                            <img className="product--image" src={product.productImage} />
                            <h3> {product.productName} </h3>
                            <p className="price"> ${product.price} </p>
                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
};