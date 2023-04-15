import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import { CategoriesHeader } from "./categories-header";
import "../shop.css"
import shopCover from "../../../images/banner/shop-banner.avif"
import { PRODUCT_CATEGORY } from "../../../products";

export const Dining = () => {
    const filteredProducts = PRODUCTS.filter((product) => product.productCategory === PRODUCT_CATEGORY.dining);
    return <div className="shop">
        <div className="container">
            <div className="shopCover">
                <img src={shopCover} />
                <div className="shopTitle">
                    <h1> Minimal Living </h1>
                </div>
            </div>
            <CategoriesHeader />
            <hr className="solid"></hr>
            <div className="products">
                {filteredProducts.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    </div>
};