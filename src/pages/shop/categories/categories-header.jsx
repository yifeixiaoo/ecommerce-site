import React from "react";
import { Link } from "react-router-dom";
import "./categories-header.css"

export const CategoriesHeader = () => {
    return <div className="filter-btns">
        <Link to="">
            <button>All</button>
        </Link>
        <Link to="living">
            <button> Living </button>
        </Link>
        <Link to="bed">
            <button> Bed </button>
        </Link>
        <Link to="bath">
            <button> Bath </button>
        </Link>
        <Link to="kitchen">
            <button> Kitchen </button>
        </Link>
        <Link to="lighting">
            <button> Lighting </button>
        </Link>
        <Link to="seating">
            <button>
                Seating
            </button>
        </Link>
    </div>
};
