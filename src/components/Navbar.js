import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

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

    return (
        <div className={`custom-navbar ${navColor ? 'navbar-colored' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="brand" className="logo"/>
                </Link>

                <button className="navbar-toggler" onClick={() => setShowMenu(!showMenu)} style={{ fontSize: '30px',color:'gainsboro'}}>
                    ☰
                </button>
                <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reviews_login">
                            <strong style={{color:"#E20B3CD4"}}>
                                For Women </strong></Link>
                    </li>
                    <li>
                        <Link to="/update_details">For Businesses</Link>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
