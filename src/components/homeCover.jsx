import React from "react";
import { Link } from "react-router-dom";
import homeCover from "../images/home/homeCover.webp";

export const HomeCover = () => {
  return (
    <div className="homeCover-container">
      <Link to="/shop/product/2">
        <div className="homeCover">
          <img src={homeCover} alt="home cover" />
          <div className="homeCoverText">
            <div className="title"> New Arrival - Oak Bed Frame </div>
            <div className="description">
              {" "}
              A classic walnut oak frame that goes well in any bedroom.{" "}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
