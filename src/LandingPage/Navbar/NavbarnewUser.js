import React, { useState } from "react";
import logo from "../logos/findherlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./Navbarnew.css"

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate(); 


  // const scrollToSection = (event, sectionId) => {
  //   event.preventDefault();
  //   navigate("/");
  //   setTimeout(() => {
  //     const contactSection = document.getElementById(sectionId);
  //     if (contactSection) {
  //       contactSection.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }, 100);
  // };
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
}

export default NavBar;
