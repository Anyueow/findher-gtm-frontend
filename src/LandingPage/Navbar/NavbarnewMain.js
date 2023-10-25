import React from "react";
import { Link } from "react-router-dom";
import logo from "../logos/findherlogo.png";
import "./Navbarnew.css"; // Renamed for clarity

const NavbarNew = () => {

    return (
        <nav className="navbar-new">
            <div className="nav-container">
                <Link className="nav-brand" to="/">
                    <img src={logo} alt="brand" className="nav-logo" />
                </Link>

            </div>
        </nav>
    );
};

export default NavbarNew;
