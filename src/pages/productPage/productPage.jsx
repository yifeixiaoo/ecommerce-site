import React from "react";
import "./productPage.css"
import img1 from "../../images/products/1.png"


export const ProductPage = () => {
    return <div className="productPage">
        <div className="productImg">
            <img src={img1}/>
        </div>
        <div className="productInfo">
            <h2> Product1 </h2>
            <p> $999.99 </p>
        </div>
    </div>
};