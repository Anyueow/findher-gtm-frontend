import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../Assets/logo.png";
import goback from "../../Assets/goback.png";
import "./CSS/ProfileNavBar.css";
import { Button } from "react-bootstrap";
import { BiHomeAlt } from 'react-icons/bi';
import Badge from "@mui/material/Badge";
function ProfileNavBar(props) {
  const {notifCount,setOpen,open}=props;
 
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

          <Badge badgeContent={notifCount} color="secondary" onClick={()=>{
            open ?setOpen(false) :setOpen(true)
          }} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              cursor="pointer"
            >
              <g clip-path="url(#clip0_1335_1621)">
                <path
                  d="M16.1667 30C17.6333 30 18.8333 28.8 18.8333 27.3333H13.5C13.5 28.8 14.7 30 16.1667 30ZM24.1667 22V15.3333C24.1667 11.24 21.9933 7.81333 18.1667 6.90667V6C18.1667 4.89333 17.2733 4 16.1667 4C15.06 4 14.1667 4.89333 14.1667 6V6.90667C10.3533 7.81333 8.16667 11.2267 8.16667 15.3333V22L5.5 24.6667V26H26.8333V24.6667L24.1667 22ZM21.5 23.3333H10.8333V15.3333C10.8333 12.0267 12.8467 9.33333 16.1667 9.33333C19.4867 9.33333 21.5 12.0267 21.5 15.3333V23.3333Z"
                  fill="#3E2CC0"
                />
              </g>
              <defs>
                <clipPath id="clip0_1335_1621">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.166016 0.666992)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Badge>
        </div>
        <img
          style={{ width: "2.5%" }}
          className="profile-picture-nav float-right mx-3"
          src={props.newImage}
          alt="Profile"
        />
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
          <div className="profile-offcanvas-body my-4">
            <span className="">
            <BiHomeAlt style={{fontSize:"1.6rem"}}/>
            </span>{" "}
            Home
          </div>
          <div className="profile-offcanvas-body my-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.17008 16.1012L9.11463 16.0642L9.05919 16.1012L1.74586 20.9738C1.59034 21.0774 1.40662 21.1393 1.21483 21.1523C1.02304 21.1652 0.831404 21.1286 0.661087 21.0468C0.490805 20.965 0.348926 20.8415 0.250305 20.6907C0.151735 20.5399 0.0999819 20.3674 0.1 20.192V2.12547C0.1 1.59062 0.327719 1.07613 0.735614 0.695662C1.14374 0.31497 1.69868 0.1 2.27866 0.1H15.9506C16.5306 0.1 17.0855 0.31497 17.4937 0.695662C17.9016 1.07613 18.1293 1.59062 18.1293 2.12547V20.192C18.1293 20.3674 18.0775 20.5399 17.979 20.6907C17.8803 20.8415 17.7385 20.965 17.5682 21.0468C17.3979 21.1286 17.2062 21.1652 17.0144 21.1523C16.8227 21.1393 16.6389 21.0774 16.4834 20.9738L9.17008 16.1012ZM16.0506 2.12547V2.02547H15.9506H2.27866H2.17866V2.12547V18.1271V18.3139L2.3341 18.2103L8.50811 14.0975C8.50811 14.0975 8.50812 14.0975 8.50812 14.0975C8.68449 13.9801 8.89654 13.9165 9.11463 13.9165C9.33273 13.9165 9.54479 13.9801 9.72116 14.0975C9.72116 14.0975 9.72116 14.0975 9.72116 14.0975L15.8952 18.2092L16.0506 18.3128V18.126V2.12547Z"
                  fill="#0D0D0D"
                  stroke="black"
                  stroke-width="0.2"
                />
              </svg>
            </span>
            Your Reviews
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
          <div className="profile-offcanvas-body my-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
              >
                <path
                  d="M12.8647 15C13.7176 15 14.5357 14.6839 15.1389 14.1213C15.742 13.5587 16.0809 12.7956 16.0809 12C16.0809 11.2044 15.742 10.4413 15.1389 9.87868C14.5357 9.31607 13.7176 9 12.8647 9C12.0117 9 11.1936 9.31607 10.5904 9.87868C9.98729 10.4413 9.64844 11.2044 9.64844 12C9.64844 12.7956 9.98729 13.5587 10.5904 14.1213C11.1936 14.6839 12.0117 15 12.8647 15Z"
                  stroke="#25282B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.14453 12.8804V11.1204C2.14453 10.0804 3.05579 9.22043 4.18147 9.22043C6.12192 9.22043 6.91525 7.94042 5.93967 6.37042C5.38219 5.47042 5.71453 4.30042 6.69012 3.78042L8.5448 2.79042C9.39174 2.32042 10.4853 2.60042 10.9891 3.39042L11.1071 3.58042C12.0719 5.15042 13.6586 5.15042 14.6342 3.58042L14.7521 3.39042C15.256 2.60042 16.3495 2.32042 17.1964 2.79042L19.0511 3.78042C20.0267 4.30042 20.359 5.47042 19.8016 6.37042C18.826 7.94042 19.6193 9.22043 21.5598 9.22043C22.6747 9.22043 23.5967 10.0704 23.5967 11.1204V12.8804C23.5967 13.9204 22.6854 14.7804 21.5598 14.7804C19.6193 14.7804 18.826 16.0604 19.8016 17.6304C20.359 18.5404 20.0267 19.7004 19.0511 20.2204L17.1964 21.2104C16.3495 21.6804 15.256 21.4004 14.7521 20.6104L14.6342 20.4204C13.6693 18.8504 12.0826 18.8504 11.1071 20.4204L10.9891 20.6104C10.4853 21.4004 9.39174 21.6804 8.5448 21.2104L6.69012 20.2204C6.2228 19.9694 5.88133 19.5558 5.74063 19.0702C5.59994 18.5846 5.67152 18.0668 5.93967 17.6304C6.91525 16.0604 6.12192 14.7804 4.18147 14.7804C3.05579 14.7804 2.14453 13.9204 2.14453 12.8804Z"
                  stroke="#25282B"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Settings
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ProfileNavBar;
