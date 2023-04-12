import React from "react";
import { Link } from "react-router-dom";
import "./categories-header.css"

export const CategoriesHeader = () => {
    return <div className="filter-btns">
        <Link to="/shop">
            <button className="all">All</button>
        </Link>
        <Link to="/shop/living">
            <button> Living </button>
        </Link>
        <Link to="/shop/bed">
            <button> Bed </button>
        </Link>
        <Link to="/shop/bath">
            <button> Bath </button>
        </Link>
        <Link to="/shop/kitchen">
            <button> Kitchen </button>
        </Link>
        <Link to="/shop/lighting">
            <button> Lighting </button>
        </Link>
        <Link to="/shop/seating">
            <button>
                Seating
            </button>
        </Link>
    </div>
};
