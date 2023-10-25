import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logos/findherlogo.png";
import "./Navbarnew.css"; // Renamed for clarity

const StyledNavbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className="styled-navbar">
            <div className="nav-container">
                <Link className="nav-brand" to="/">
                    <img src={logo} alt="brand" className="nav-logo" />
                </Link>

                <button className="menu-toggler" onClick={() => setMenuActive(!menuActive)}>
                    ☰
                </button>

                <div className={`menu-collapse ${menuActive ? "active" : ""}`}>
                    <ul className="nav-list">
                        <li>
                            <Link to="/forbusiness" className="nav-item">
                                For Businesses
                            </Link>
                        </li>
                        <li>
                            <Link to="/forwomen" className="nav-item">
                                For Women
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default StyledNavbar;
