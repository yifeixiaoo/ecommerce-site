import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Link } from "react-router-dom";
import { CategoriesHeader } from "./categories/categories-header";
import "./shop.css"
import { ShopCover } from "./shopCover";

export const Shop = () => {
    return <div className="shop">
        <div className="container">
            <ShopCover />
            <CategoriesHeader />
            <hr className="solid"></hr>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    </div>
};