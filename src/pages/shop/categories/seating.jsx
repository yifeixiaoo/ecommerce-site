import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import { CategoriesHeader } from "./categories-header";
import "../shop.css";
import { PRODUCT_CATEGORY } from "../../../products";
import { ShopCover } from "../shopCover";

export const Seating = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.productCategory === PRODUCT_CATEGORY.seating
  );
  return (
    <div className="shop">
      <div className="shop-container">
        <div className="container">
          <ShopCover title={"seating"} />
          <CategoriesHeader />
          <hr className="solid"></hr>
          <div className="products">
            {filteredProducts.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
