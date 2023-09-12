import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [navColor, setNavColor] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const joinExternalSurvey = () => {
    window.open(
      "https://www.surveymonkey.com/r/NMD3GRV",
      "_blank",
      "noopener noreferrer"
    );
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className={`custom-navbar ${navColor ? "navbar-colored" : ""}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="brand" className="logo" />
        </Link>

        <button
          className="navbar-toggler"
          onClick={() => setShowMenu(!showMenu)}
          style={{ fontSize: "30px", color: "gainsboro" }}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${showMenu ? "show" : ""}`}>
          <li className="navItems">
          <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>
              Features
            </a>
          </li>
          <li className="navItems">
          <a href="#testimonial" onClick={(e) => scrollToSection(e, 'testimonial')}>
              Testimonials
            </a>
          </li>
          <li className="navItems">
          <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>
              FAQ
            </a>
          </li>
          <li className="navItems" style={{margin:"10px",display:"flex",
                alignItems: "center"}}>
            <strong
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "20px",
                backgroundColor: "#e20b3c",
                padding: "10px",
                borderRadius: ".5rem",
                display:"flex",
                alignItems: "center"
                
              }}
              onClick={joinExternalSurvey}
            >
              Join the Waitlist
            </strong>
          </li>
          {/* <li>
                        <a style={{ marginLeft:"10px",paddingLeft:"0px",left:"6px",position:"relative" }}href="#contact">Contact</a>
                    </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
