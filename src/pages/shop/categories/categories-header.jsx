import React from "react";
import { Link } from "react-router-dom";
import "./categories-header.css"

export const CategoriesHeader = () => {
    return <div className="filter-btns">
        <Link to="/shop">
            <button className="all">All</button>
        </Link>
        <Link to="/shop/living">
            <button className="living"> Living </button>
        </Link>
        <Link to="/shop/bed">
            <button className="bed"> Bed </button>
        </Link>
        <Link to="/shop/bath">
            <button className="bath"> Bath </button>
        </Link>
        <Link to="/shop/kitchen">
            <button className="kitchen"> Kitchen </button>
        </Link>
        <Link to="/shop/lighting">
            <button className="lighting"> Lighting </button>
        </Link>
        <Link to="/shop/seating">
            <button className="seating">
                Seating
            </button>
        </Link>
    </div>
};
