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
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Testimonials</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <strong
              style={{
                color: "white",
                cursor: "pointer",
                marginRight: "20px",
                backgroundColor: "#e20b3c",
                padding: "10px",
                borderRadius: ".5rem",
              }}
              onClick={joinExternalSurvey}
            >
              Join the Waitlist!
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
