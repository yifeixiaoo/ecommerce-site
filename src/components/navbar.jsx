import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"
import minishopLogo from "../images/logos/minishop-yx-default-small.png"

export const Navbar = () => {
    // return <div className="navbar">
    //     <div className="links">
    //         <Link to="/" className="home"> Home </Link>
    //         <Link to="/shop"> Shop </Link>
    //         <Link to="/cart">
    //             <ShoppingCart size={32} />
    //         </Link>
    //     </div>
    // </div>
    return <header>
        <Link to="/"> <img src={minishopLogo} alt="logo" className="logo-img"/> </Link>
        <nav>
            <ul className="nav__links">
                <li><Link to="/shop"> Shop </Link></li>
                <li><Link to="/cart"><ShoppingCart size={20} /></Link></li>
            </ul>
        </nav>
    </header>
};