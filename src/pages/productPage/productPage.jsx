import React from "react";
import "./productPage.css"
import img1 from "../../images/products/1.png"


export const ProductPage = () => {
    return (
        <>
            <div className="product-page-div">
                <div className="container">
                    <div className="product-div">
                        <div className="product-left">
                            <div className="big-img">
                                <img src={img1} alt="product" />
                            </div>
                        </div>
                        <div className="product-right">
                            <h3 className="product-big-name">product spec</h3>
                            <div className="product-quant">
                                <p>Quantity</p>
                                <div className="product-btns">
                                    <button>-</button>
                                    <p className="quantity"> 1 </p>
                                    <button>+</button>
                                </div>
                                <p className="product-price"> price </p>
                            </div>
                            <div className="atc-buy">
                                <button
                                    className="atc-btn"
                                >
                                    add to cart
                                </button>
                                <button className="buy-btn">buy now</button>
                            </div>
                        </div>
                    </div>

                    <div className="specifications">
                        <div className="spec">
                            <p className="spec-title">Texture:</p>
                            <p className="title-desc">texture</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Weight:</p>
                            <p className="title-desc">weight</p>
                        </div>
                        <div className="spec">
                            <p className="spec-title">Size:</p>
                            <p className="title-desc">size</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
