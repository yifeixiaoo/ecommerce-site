import React from "react";
import { Link } from "react-router-dom";
import lighting from "../../images/home/lighting.jpg"
import kitchen from "../../images/home/kitchen.jpg"
import living from "../../images/home/living.jpg"
import bath from "../../images/home/bath.jpg"
import "./home.css"
import homeCover from "../../images/home/homeCover.webp"
import { Footer } from "../../components/footer";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="container">
          <Link to="/shop/product/2">
          <div className="homeCover">
            <img src={homeCover} />
            <div className="homeCoverText">
              <div className="title"> New Arrival - Oak Bed Frame </div>
              <div className="description"> A classic walnut oak frame that goes well in any bedroom. </div>
            </div>
          </div>
          </Link>
          <div className="grid-container">
            <div className="featured grid-one">
              <Link to="/shop/lighting">
                <div id="img1" className="lil-overlay"></div>
                <img src={lighting} alt="img1" />
                <p className="main-description">Lighting</p>
              </Link>
            </div>
            <div className="featured grid-two">
              <Link to="/shop/dining">
                <div id="img2" className="lil-overlay"></div>
                <img src={kitchen} alt="img2" />
                <p className="main-description">Dining</p>
              </Link>
            </div>
            <div className="featured grid-four">
              <Link to="/shop/living">
                <div id="img3" className="lil-overlay"></div>
                <img src={living} alt="img3" />
                <p className="main-description">Living</p>
              </Link>
            </div>
            <div className="featured grid-four-low">
              <Link to="/shop/bath">
                <div id="img4" className="lil-overlay"></div>
                <img src={bath} alt="img4" />
                <p className="main-description">Bath</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};