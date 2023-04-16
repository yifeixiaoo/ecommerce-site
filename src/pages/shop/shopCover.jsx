import React from "react";
import "./shop.css"
import shopCover from "../../images/banner/shop-banner.avif"
import { useParams } from "react-router-dom";

export const ShopCover = ({title}) => {
    return <div className="shopCover">
        <img src={shopCover} />
        <div className="shopTitle">
            <h1> Minimal {title} </h1>
        </div>
    </div>

};