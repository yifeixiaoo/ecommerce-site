import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";
import "./navbar.css"
import modaLogo from "../images/logos/moda-high-resolution-logo-color-on-transparent-background.png"

export const Navbar = () => {
    return <header>
        <Link to="/"> <img src={modaLogo} alt="logo" className="logo-img"/> </Link>
        <nav>
            <ul className="nav__links">
                <li><Link className="nav_link" to="/shop"> Shop </Link></li>
                <li><Link className="nav_link cart" to="/cart"><ShoppingCartSimple size={25} /></Link></li>
            </ul>
        </nav>
    </header>
};