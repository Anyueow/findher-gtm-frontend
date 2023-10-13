import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../Assets/logo.png";
import goback from "../../Assets/goback.png";
import "./CSS/ProfileNavBar.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHomeAlt } from 'react-icons/bi';
import { HiLogin } from 'react-icons/hi';
function ProfileNavbarGuest(props) {
//   const { notifCount, setOpen, open } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-white bg-white">
        <div className="container-fluid">
          <button className="navbar-toggle btn btn-white" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="22"
              viewBox="0 0 41 34"
              fill="none"
            >
              <rect
                x="0.166016"
                width="40"
                height="7.55556"
                rx="3.77778"
                fill="#3E2CC0"
              />
              <rect
                x="0.166016"
                y="13"
                width="40"
                height="7.55556"
                rx="3.77778"
                fill="#3E2CC0"
              />
              <rect
                x="0.166016"
                y="25.999"
                width="40"
                height="7.55556"
                rx="3.77778"
                fill="#3E2CC0"
              />
            </svg>
          </button>
          <img src={logo} alt="brand" className="logo" />
          <div className="uprNavbtn">
            <Link to="/login">Login</Link>
          </div>
        </div>
        {/* <img
          style={{ width: "2.5%" }}
          className="profile-picture-nav float-right mx-3"
          src={props.newImage}
          alt="Profile"
        /> */}
      </nav>
      <Offcanvas show={show} className="Profile-Offcanvas" onHide={handleClose}>
        <Offcanvas.Header>
          <Button
            src={goback}
            alt="brand"
            className="goback-icon  bg-white p-0 border-0"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="50"
              viewBox="0 0 55 50"
              fill="none"
            >
              <path
                d="M27.4883 5.5C39.8172 5.5 48.3937 13.5001 48.3937 25.0001C48.3937 36.5001 39.8172 44.5 27.4883 44.5C15.1595 44.5 6.04688 36.5001 6.04688 25.0001C6.04688 13.5001 15.1595 5.5 27.4883 5.5ZM27.4883 41.6667C37.3603 41.6667 45.3562 34.2084 45.3562 25.0001C45.3562 15.7917 37.3603 8.33341 27.4883 8.33341C17.6163 8.33341 9.62047 15.7917 9.62047 25.0001C9.62047 34.2084 17.6163 41.6667 27.4883 41.6667ZM27.4883 23.5H36.4223V26.5H27.4883L27.4883 32.5L19.9838 25L27.4883 17.5L27.4883 23.5Z"
                fill="#25282B"
              />
            </svg>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="profile-offcanvas-body my-4" >
            <span className="">
              <BiHomeAlt style={{fontSize:"1.6rem"}}/>
            </span>{" "}
            Home
          </div>
          <div className="profile-offcanvas-body my-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M21.6195 10.9997C21.6195 5.93967 17.2169 1.83301 11.7922 1.83301C6.36749 1.83301 1.96484 5.93967 1.96484 10.9997C1.96484 16.0597 6.36749 20.1663 11.7922 20.1663"
                  stroke="#25282B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.86269 2.75H8.84543C6.92913 8.10477 6.92913 13.8952 8.84543 19.25H7.86269M14.7418 2.75C15.6951 5.42667 16.1766 8.21333 16.1766 11"
                  stroke="#25282B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.94727 14.6664V13.7498C5.81684 14.6389 8.80435 15.0881 11.7919 15.0881M2.94727 8.24978C8.68796 6.46231 14.8958 6.46231 20.6365 8.24978M21.6192 20.1665L20.6365 19.2498M17.8848 19.6164C18.7188 19.6164 19.5187 19.3074 20.1085 18.7573C20.6982 18.2072 21.0295 17.4611 21.0295 16.6831C21.0295 15.9051 20.6982 15.159 20.1085 14.6089C19.5187 14.0588 18.7188 13.7498 17.8848 13.7498C17.0508 13.7498 16.2509 14.0588 15.6611 14.6089C15.0714 15.159 14.7401 15.9051 14.7401 16.6831C14.7401 17.4611 15.0714 18.2072 15.6611 18.7573C16.2509 19.3074 17.0508 19.6164 17.8848 19.6164Z"
                  stroke="#25282B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Explore Businesses
          </div>
          <div className="profile-offcanvas-body my-4 sideLogin">
            <span>
              <HiLogin style={{fontSize:"1.6rem", }}/>
            </span>
            <Link to="/login" style={{color:"#EA394A",margin:"0",display:"inline-block",textDecoration:"none"}}>Login</Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ProfileNavbarGuest;
