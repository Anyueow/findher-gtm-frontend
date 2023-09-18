import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../Assets/logo.png";
import bell from "../../Assets/bell.png";
import goback from "../../Assets/goback.png";
import "./CSS/ProfileNavBar.css"

function ProfileNavBar() {
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
          <div className="mx-3">
          <img src={bell} alt="brand" className="bell-icon" />
            <Button>bell</Button>
          </div>
        </div>
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
