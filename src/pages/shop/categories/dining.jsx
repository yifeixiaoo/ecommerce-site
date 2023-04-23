import React from "react";
import { PRODUCTS } from "../../../products";
import { Product } from "../product";
import { CategoriesHeader } from "./categories-header";
import "../shop.css";
import { Footer } from "../../../components/footer";
import { PRODUCT_CATEGORY } from "../../../products";
import { ShopCover } from "../shopCover";

export const Dining = () => {
  const filteredProducts = PRODUCTS.filter(
    (product) => product.productCategory === PRODUCT_CATEGORY.dining
  );
  return (
    <div className="shop">
      <div className="shop-container">
        <div className="container">
          <ShopCover title={"dining"} />
          <CategoriesHeader />
          <hr className="solid"></hr>
          <div className="products">
            {filteredProducts.map((product) => (
              <Product data={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
