import React from "react";
import { Link } from "react-router-dom";
import lighting from "../../images/home/lighting.jpg"
import kitchen from "../../images/home/kitchen.jpg"
import living from "../../images/home/living.jpg"
import bath from "../../images/home/bath.jpg"
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
                    <img src={lighting} alt="img1" />
                    <p className="main-description">Lighting</p>
                  </Link>
                </div>
                <div className="featured grid-two">
                  <Link to="/">
                    <div id="img2" className="lil-overlay"></div>
                    <img src={kitchen} alt="img2" />
                    <p className="main-description">Dining</p>
                  </Link>
                </div>
                <div className="featured grid-four">
                  <Link to="/">
                    <div id="img3" className="lil-overlay"></div>
                    <img src={living} alt="img3" />
                    <p className="main-description">Living</p>
                  </Link>
                </div>
                <div className="featured grid-four-low">
                  <Link to="/">
                    <div id="img4" className="lil-overlay"></div>
                    <img src={bath} alt="img4" />
                    <p className="main-description">Bath</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};