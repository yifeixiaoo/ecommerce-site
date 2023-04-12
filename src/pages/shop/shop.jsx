import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Link } from "react-router-dom";
import { CategoriesHeader } from "./categories/categories-header";
import "./shop.css"

export const Shop = () => {
    return <div className="shop">
        <div className="shopTitle">
            <h1> Minimal Living </h1>
        </div>
        <CategoriesHeader />
        <div className="container">
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    </div>
};