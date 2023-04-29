import React from "react";
import "./home.css";
import { HomeCover } from "../../components/homeCover";
import { Grid } from "../../components/grid";
import { ProductSlider } from "../../components/productSlider";
import { Conclusion } from "../../components/conclusion";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <HomeCover />
          <Grid />
          <ProductSlider />
          <Conclusion />
        </div>
      </div>
    </>
  );
};
