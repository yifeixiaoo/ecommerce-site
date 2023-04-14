import React from "react";
import "./shop.css"
import shopCover from "../../images/banner/shop-banner.avif"
import { useParams } from "react-router-dom";

export const ShopCover = () => {
    return <div className="shopCover">
        <img src={shopCover} />
        <div className="shopTitle">
            <h1> Minimal Living </h1>
        </div>
    </div>

};