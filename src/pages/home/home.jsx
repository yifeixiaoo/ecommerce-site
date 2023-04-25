import React from "react";
import "./home.css";
import { HomeCover } from "../../components/homeCover";
import { Footer } from "../../components/footer";
import { ProductSlider } from "../../components/productSlider";
import { Grid } from "../../components/grid";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <HomeCover />
          <Grid />
          <ProductSlider />
          <div className="conclusion">
            <h2> Simple and clean Lifestyle at Home </h2>
            <p>
              {" "}
              MODA offers minimalistic and functional furniture, home decor, and
              accessories at affordable prices. From sleek and stylish bedroom
              furniture to modern lighting solutions and minimalist decor, we
              offer everything you need to transform your home into a
              comfortable and inviting space. Our carefully curated collection
              of products is designed to help you live more sustainably while
              expressing your unique style. Explore our online store or visit
              our physical locations to discover a wide selection of
              high-quality products that will elevate your living space. At
              MODA, we believe that a beautiful home should be accessible to
              everyone, and we're committed to helping you achieve your design
              goals without breaking the bank.{" "}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
