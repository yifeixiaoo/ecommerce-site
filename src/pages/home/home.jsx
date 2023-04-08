import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../images/products/1.png"
import "./home.css"

export const Home = () => {
    return (
        <>
          <div className="home-container">
            <div className="container">
              <div className="grid-container">
                <div className="featured grid-one">
                  <Link to="/">
                    <div id="img1" className="lil-overlay"></div>
                    <img src={product1} alt="img1" />
                    <p className="main-description">Lighting</p>
                  </Link>
                </div>
                <div className="featured grid-two">
                  <Link to="/">
                    <div id="img2" className="lil-overlay"></div>
                    <img src={product1} alt="img2" />
                    <p className="main-description">Kitchen</p>
                  </Link>
                </div>
                <div className="featured grid-four">
                  <Link to="/">
                    <div id="img3" className="lil-overlay"></div>
                    <img src={product1} alt="img3" />
                    <p className="main-description">Living</p>
                  </Link>
                </div>
                <div className="featured grid-four-low">
                  <Link to="/">
                    <div id="img4" className="lil-overlay"></div>
                    <img src={product1} alt="img4" />
                    <p className="main-description">Bath</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};