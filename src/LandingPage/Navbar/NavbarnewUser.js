import React, { useState } from "react";
import logo from "../logos/findherlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbarnew.css"

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); 


  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById(sectionId);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <div className={`custom-navbar styled-navbar `}>
      <div className="container">
        <Link className="nav-brand" to="/">
          <img src={logo} alt="brand" className="nav-logo" />
        </Link>

        <button
          className="navbar-toggler"
          onClick={() => setShowMenu(!showMenu)}
          style={{ fontSize: "30px", color: "gainsboro" }}
        >
          ☰
        </button>
        <ul className={`navbar-menu navbar-menu-background ${showMenu ? "show" : ""}`}>
          <li className="navItems nav-list">
          <Link to="/forbusiness" >
          For Businesses
            </Link>
          </li>
          <li className="navItems nav-list">
          <Link to="/forwomen" >
          For Women
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
