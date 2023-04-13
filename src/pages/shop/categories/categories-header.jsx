import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./categories-header.css"

export const CategoriesHeader = () => {
    const [categoryState, setCategoryToggled] = useState({
        activeCategory: null,
        categories: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]
    });

    function toggleCategory(category){
        setCategoryToggled({ ...categoryState, activeCategory: categoryState.categories[category]});
    }

    function toggleActiveCategory(category){
        if(categoryState.categories[category] === categoryState.activeCategory) {
            return "toggled";
        } else {
            return "untoggled";
        }
    }

    

    return <div className="filter-btns">
        <Link to="/shop">
            <button className={toggleActiveCategory(1)}  onClick={() => toggleCategory(1)}>All</button>
        </Link>
        <Link to="/shop/living">
            <button className={toggleActiveCategory(2)}  onClick={() => toggleCategory(2)}> Living </button>
        </Link>
        <Link to="/shop/bed">
            <button className={toggleActiveCategory(3)}  onClick={() => toggleCategory(3)}> Bed </button>
        </Link>
        <Link to="/shop/bath">
            <button className={toggleActiveCategory(4)}  onClick={() => toggleCategory(4)}> Bath </button>
        </Link>
        <Link to="/shop/kitchen">
            <button className={toggleActiveCategory(5)}  onClick={() => toggleCategory(5)}> Kitchen </button>
        </Link>
        <Link to="/shop/lighting">
            <button className={toggleActiveCategory(6)}  onClick={() => toggleCategory(6)}> Lighting </button>
        </Link>
        <Link to="/shop/seating">
            <button className={toggleActiveCategory(7)} onClick={() => toggleCategory(7)}>
                Seating
            </button>
        </Link>
    </div>
};
