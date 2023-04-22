import React from "react";
import "./shop.css"
import shopCover from "../../images/banner/shop-banner.avif"

export const ShopCover = ({title}) => {
    return <div className="shopCover">
        <img src={shopCover} alt="shop cover"/>
        <div className="shopTitle">
            <h2> Minimal {title} </h2>
        </div>
    </div>

};