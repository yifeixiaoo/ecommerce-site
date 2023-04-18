import React from "react";
import { Link } from "react-router-dom";
import lighting from "../../images/home/lighting.jpg"
import kitchen from "../../images/home/kitchen.jpg"
import living from "../../images/home/living.jpg"
import bath from "../../images/home/bath.jpg"
import "./home.css"
import homeCover from "../../images/home/homeCover.webp"
import { Footer } from "../../components/footer";
import { ProductSlider } from "../../components/productSlider";

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
          <ProductSlider/>
          <div className="conclusion">
            <h2> Simple and clean Lifestyle at Home </h2>
            <p> Minishop offers minimalistic and functional furniture, home decor, and accessories at affordable prices. From sleek and stylish bedroom furniture to modern lighting solutions and minimalist decor, we offer everything you need to transform your home into a comfortable and inviting space. Our carefully curated collection of products is designed to help you live more sustainably while expressing your unique style. Explore our online store or visit our physical locations to discover a wide selection of high-quality products that will elevate your living space. At Minishop, we believe that a beautiful home should be accessible to everyone, and we're committed to helping you achieve your design goals without breaking the bank. </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};