import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../Assets/logo.png";
import bell from "../../Assets/bell.png";
import goback from "../../Assets/goback.png";
import "./CSS/ProfileNavBar.css";
import profile from "../../Assets/profile.webp";

function ProfileNavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-white bg-white">
        <div className="container-fluid">
          <button className="navbar-toggle btn btn-white" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <img src={logo} alt="brand" className="logo" />
          <img src={bell} alt="brand" className="bell-icon float-right" />
        </div>
          <img style={{width:"2.5%"}}  className="profile-picture float-right mx-3" src={props.newImage ? props.newImage : profile} alt="Profile"/>
      </nav>
      <Offcanvas show={show} className="Profile-Offcanvas" onHide={handleClose}>
        <Offcanvas.Header >
        <img src={goback} alt="brand" className="goback-icon" onClick={handleClose}/>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="profile-offcanvas-body my-4">Home</div>
            <div className="profile-offcanvas-body my-4">Your Reviews</div>
            <div className="profile-offcanvas-body my-4">Explore Businesses</div>
            <div className="profile-offcanvas-body my-4">Settings</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ProfileNavBar;
