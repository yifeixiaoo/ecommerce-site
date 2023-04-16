import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import { CategoriesHeader } from "./categories-header";
import "../shop.css"
import shopCover from "../../../images/banner/shop-banner.avif"
import { PRODUCT_CATEGORY } from "../../../products";
import { ShopCover } from "../shopCover";

export const Living = () => {
    const filteredProducts = PRODUCTS.filter((product) => product.productCategory === PRODUCT_CATEGORY.living);
    return <div className="shop">
        <div className="container">
            <ShopCover title={"living"}/>
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