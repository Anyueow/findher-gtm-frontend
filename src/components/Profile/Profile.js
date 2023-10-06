import React, { useState, useEffect, useRef } from "react";
import "./CSS/Profile.css";
import ProfileNavBar from "./ProfileNavBar";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import ChangeNumEmail from "./ChangeNumEmail";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import profile from "../../Assets/profile.png";
import NotifDropdown from "./NotifDropdown";
import { useCsrfToken } from '../../CsrfTokenProvider';

function Profile() {
  const [profileDetails, setProfileDetails] = useState();
  const [editProfileDetails, setEditeditProfileDetails] = useState();
  const [showNumEmail, setshowNumEmail] = useState(false);
  const [showModalName, setShowModalName] = useState(false);
  const [showModalWork, setShowModalWork] = useState(false);

  const csrfToken = useCsrfToken();

  const [onChangeContact, setOnChangeContact] = useState({
    email: false,
    phoneNumber: false,
    cancel: false,
  });

  const handleCloseModalName = () => {
    setShowModalName(false);
  };

  const [onChangeWork, setOnChangeWork] = useState(false);

  function handleOnChange(e) {
    const name = e.target.name;
    setEditeditProfileDetails({
      ...editProfileDetails,
      [name]: e.target.value,
    });

    if (name === "phoneNumber") {
      setOnChangeContact((prevState) => ({
        ...prevState,
        email: true,
        cancel: true,
      }));
    } else if (name === "email") {
      setOnChangeContact((prevState) => ({
        ...prevState,
        phoneNumber: true,
        cancel: true,
      }));
    } else {
      setOnChangeWork(true);
    }
  }

  function CancelOnChangeContact() {
    setOnChangeContact({
      email: false,
      phoneNumber: false,
      cancel: false,
    });
    setEditeditProfileDetails((prevState) => ({
      ...prevState,
      email: profileDetails.email,
      phoneNumber: profileDetails.phoneNumber,
    }));
  }

  function CancelOnChangeWork() {
    setOnChangeWork(!onChangeWork);
    setEditeditProfileDetails((prevState) => ({
      ...prevState,
      companyName: profileDetails.companyName,
      positionTitle: profileDetails.positionTitle,
      companyOffice: profileDetails.companyOffice,
      department: profileDetails.department,
    }));
  }

  const handleProfile = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    const Data = await new Promise((res, rej) => {
      reader.onload = () => res(reader.result);
      reader.onerror = (e) => rej.e;
    });
    console.log(Data);
    UploadProfilePicture(Data);
  };

  async function UploadProfilePicture(profilePic) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch(
        "https://findher-backend.onrender.com/profile/upload",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-CSRF-Token" : csrfToken,
          },
          credentials: "include", // Include this line
          body: JSON.stringify({ profilePic }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log(data);
        setProfileDetails((prevState) => ({ ...prevState, profilePic }));
        setEditeditProfileDetails((prevState) => ({
          ...prevState,
          profilePic,
        }));
      } else {
        console.log("dammit these errors");
        // Handle the error response
        const data = await response.json();
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error("Error Name:", error.name);
      console.error("Error Message:", error.message);
      console.error("Stack Trace:", error.stack);
    }
  }

  async function UpdateWorkDetails() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    if(profileDetails.positionTitle === editProfileDetails.positionTitle.trim() || profileDetails.department  === editProfileDetails.department.trim() )
    {
      setShowModalWork(true);
      const buttonClickPromise = new Promise((resolve) => {
        const handleButtonClickInternal = (buttonName) => {
          setShowModalWork(false);
          if (buttonName === "Cancel") {
            resolve(false); // Resolve with false for "Cancel" button
          } else {
            resolve(true); // Resolve with true for other buttons
          } 
        };
        // Add event listeners for the buttons
        setTimeout(() => {
        document.getElementById("confirmButtonProfileWork").addEventListener("click", () => handleButtonClickInternal("Confirm"));
        document.getElementById("cancelButtonProfileWork").addEventListener("click", () => handleButtonClickInternal("Cancel"));
      }, 1000);
      });

      const buttonResult = await buttonClickPromise; // Wait for the promise to resolve

      if (!buttonResult) {
        // Handle the case where "Cancel" was clicked (buttonResult is false)
        console.log("Cancelled operation.");
        return;
      }
    }
    try {
      const response = await fetch(
        "https://findher-backend.onrender.com/profile/work",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-CSRF-Token" : csrfToken,
          },
          credentials: "include", // Include this line
          body: JSON.stringify({
            companyName: editProfileDetails.companyName.trim(),
            positionTitle: editProfileDetails.positionTitle.trim(),
            companyOffice: editProfileDetails.companyOffice.trim(),
            department: editProfileDetails.department.trim(),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setOnChangeWork(!onChangeWork);
        setProfileDetails((prevState) => ({
          ...prevState,
          companyName: editProfileDetails.companyName,
          positionTitle: editProfileDetails.positionTitle,
          companyOffice: editProfileDetails.companyOffice,
          department: editProfileDetails.department,
        }));
      } else {
        console.log("dammit these errors");
        const data = await response.json();
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend
      }
    } catch (error) {
      console.log(error);
      console.error("Error Name:", error.name);
      console.error("Error Message:", error.message);
      console.error("Stack Trace:", error.stack);
    }
  }
  // let not=[];
  const [notifCount,setnotifCount] =useState(0);
  const [notifications,setnotifications]=useState([]);
  
  async function getNotifications(params) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch(
        "https://findher-backend.onrender.com/profile/notifications",
        // "http://localhost:5000/profile/notifications",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-CSRF-Token" : csrfToken,
          },
          credentials: "include", // Include this line
        }
      );
      
      if (response.ok) {
        const data = await response.json();
        console.log("data",data.notifications);
        // await setNotificationState(data.notifications)
        setnotifications(data.notifications)
        // console.log(notifications);
        setnotifCount(data.notifCount);
        // setsaveCount(data.saved);
        // setnotifications((prevNotifications) => [...prevNotifications, ...data.notifications]);
        // await delay(2000);
        // console.log("Notif count = ", notifCount);
        // console.log("notifications=",notifications);
      } else {
        console.log("dammit these errors");
        const data = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }
      try {
        const response = await fetch(
          "https://findher-backend.onrender.com/profile/view",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "X-CSRF-Token" : csrfToken,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setProfileDetails(data);
          setEditeditProfileDetails(data);
        } else {
          console.log("dammit these errors");
          // Handle the error response
          console.log(response);
          const data = await response.json();
          console.error(`Error: ${response.status} ${response.statusText}`);
          console.error(data.message); // Print the error message from the backend
        }
      } catch (error) {
        console.log(error);
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        console.error("Stack Trace:", error.stack);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("notification")
  console.log(notifications)
  console.log("notif count")
  console.log(notifCount)

  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
        // setIsChecked(false)
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <section>
      <ProfileNavBar
        newImage={
          editProfileDetails?.profilePic
            ? editProfileDetails?.profilePic
            : profile
        }
        notifCount={notifCount}
        setOpen={setOpen}
        open={open}

        
      />
      <div className="profile-container d-flex justify-content-center">
        <Row
          style={{ width: "90%" }}
          className="mt-5 d-flex justify-content-center profile-first-row"
        >
          <Col lg="4" md="4" className="mb-4">
            <div className="card profile-card">
              <div className="card-body  ms-3">
                <h4 className="card-title" style={{ textAlign: "left" }}>
                  Contact Details
                </h4>
                <Form>
                  <Row className="mb-4 mt-2" style={{ width: "98%" }}>
                    <Col xs="6">
                      <Form.Group
                        style={{ textAlign: "left" }}
                        data-tip="profile-name-tooltip"
                        data-for="profile-name-tooltip"
                        data-html={true}
                        onClick={() => setShowModalName(true)}
                      >
                        <Form.Label className="mb-0">First Name</Form.Label>
                        <Form.Control
                          required
                          name="firstName"
                          value={editProfileDetails?.firstName}
                          style={{ color: "#BEBCBC" }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs="6">
                      <Form.Group style={{ textAlign: "left" }}
                       onClick={() => setShowModalName(true)}
                      >
                        <Form.Label className="mb-0">Last Name</Form.Label>
                        <Form.Control
                          required
                          name="lastName"
                          value={editProfileDetails?.lastName}
                          style={{ color: "#BEBCBC" }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Modal show={showModalName} onHide={handleCloseModalName} className="profile-name-modal">
                      <Modal.Body>
                        You cannot edit your name once you enter it. Please
                        contact support to do so.
                      </Modal.Body>
                    </Modal>
                  </Row>

                  <Row className="mt-4" style={{ textAlign: "left" }}>
                    <Col xs="12">
                      {" "}
                      <Form.Label className="mb-0">Phone Number</Form.Label>
                    </Col>
                    <Col xs="3" md="3" lg="2" className="pe-0">
                      <Form.Group>
                        <Form.Control
                          className="px-2"
                          disabled
                          required
                          value="+91"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col xs="9">
                      <Form.Group>
                        <Form.Control
                          required
                          name="phoneNumber"
                          disabled={onChangeContact.phoneNumber}
                          value={editProfileDetails?.phoneNumber}
                          onChange={handleOnChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-4" style={{ textAlign: "left" }}>
                    <Col xs="9" md="11" lg="9" className="pe-0">
                      <Form.Group>
                        <Form.Label className="mb-0">Email</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          name="email"
                          disabled={onChangeContact.email}
                          onChange={handleOnChange}
                          value={editProfileDetails?.email}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div
                    className="mt-3 me-5 d-flex justify-content-between profile-first-card-btn"
                    style={{ textAlign: "left" }}
                  >
                    <Button
                      onClick={() => setshowNumEmail(true)}
                      disabled={!onChangeContact.cancel}
                      className={`profile-save-btn mt-4 ${
                        onChangeContact.cancel ? "profile-save-btn-active" : ""
                      }`}
                    >
                      Save changes
                    </Button>
                    {onChangeContact.cancel && (
                      <Button
                        onClick={CancelOnChangeContact}
                        className={`profile-save-btn px-4 mt-4 ${
                          onChangeContact.cancel
                            ? "profile-save-btn-active"
                            : ""
                        }`}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4" md="4" className="mb-4">
            <div className="card profile-card ">
              <div className="card-body ms-0 ps-0">
                <h4 className="card-title" style={{ textAlign: "left" }}>
                  Work Details
                </h4>
                <Form>
                  <Row style={{ width: "98%" }}>
                    <Col xs="12" md="11" lg="12">
                      <Form.Group style={{ textAlign: "left" }}>
                        <Form.Label className="mb-0">
                          Current Company{" "}
                        </Form.Label>
                        <Form.Control
                          required
                          name="companyName"
                          onChange={handleOnChange}
                          value={editProfileDetails?.companyName}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12" md="10">
                      <Form.Label className="mb-0">Job Title </Form.Label>
                    </Col>
                    <Col xs="12" md="11" lg="12">
                      <Form.Group>
                        <Form.Control
                          required
                          name="positionTitle"
                          value={editProfileDetails?.positionTitle}
                          onChange={handleOnChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12" md="11" lg="12" className="">
                      <Form.Group>
                        <Form.Label className="mb-0">Department</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          name="department"
                          onChange={handleOnChange}
                          value={editProfileDetails?.department}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12" md="11" lg="12" className="">
                      <Form.Group>
                        <Form.Label className="mb-0">Location</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          name="companyOffice"
                          onChange={handleOnChange}
                          value={editProfileDetails?.companyOffice}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-between profile-first-card-btn-2">
                    <Button
                      className={`profile-save-btn mt-3 mb-2 ${
                        onChangeWork ? "profile-save-btn-active" : ""
                      }`}
                      disabled={!onChangeWork}
                      onClick={UpdateWorkDetails}
                    >
                      Save changes
                    </Button>
                    {onChangeWork && (
                      <Button
                        onClick={CancelOnChangeWork}
                        className={`profile-save-btn px-4 mt-3 mb-2 ${
                          onChangeWork ? "profile-save-btn-active" : ""
                        }`}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                  <Modal show={showModalWork} className="profile-work-modal">
                      <Modal.Body>
                       <p className="mb-1" style={{fontWeight:"600", fontSize:"18px",color:"#EA394A"}}>Before you save!!</p>
                       <p>Recheck your job title & location. If it doesn’t match, your reviews will be voided and you might lose account privileges.</p>
                       <Row className="d-flex justify-content-center align-items-center">
                        <Col>
                        <button id="confirmButtonProfileWork">They are the same</button>
                        </Col>
                        <Col>
                        <button id="cancelButtonProfileWork">Ok, changing</button>
                        </Col>
                       </Row>
                      </Modal.Body>
                    </Modal>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4" md="4" className="mb-4">
            <div className="card profile-card">
              <div className="card-body ms-3">
                <Form>
                  <Row className="mt-2">
                    <Col xs="12">
                      <h4 className="card-title" style={{ textAlign: "left" }}>
                        Profile Details
                      </h4>
                    </Col>
                    <Col
                      xs="12"
                      className=" d-flex justify-content-center align-items-center profile-picture-div"
                    >
                      <div class="profile-picture-container">
                        <img
                          className="profile-picture"
                          src={
                            editProfileDetails?.profilePic
                              ? editProfileDetails?.profilePic
                              : profile
                          }
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center">
                      <Form.Group>
                        <label className="profile-change px-3 py-2">
                          <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleProfile}
                          />
                          Change photo
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
          <div className="profile-last-div" style={{ textAlign: "left" }}>
            <h5>See who’s reacting & engaging with your reviews! </h5>
            <h6>Product head at Rakuten saved your review. </h6>
            <h6>Product designer at FindHer agreed with your review. </h6>
            <h6>Product designer at FindHer agreed with your review. </h6>
            <h6>Product designer at FindHer agreed with your review. </h6>
          </div>
        </Row>
      </div>
      <ToastContainer />
      {showNumEmail && (
        <ChangeNumEmail
          onChangeContact={onChangeContact}
          showNumEmail={showNumEmail}
          setshowNumEmail={setshowNumEmail}
          email={editProfileDetails?.email}
          phoneNumber={editProfileDetails?.phoneNumber}
        />
      )}
     {open &&  <NotifDropdown setOpen={setOpen} notifications={notifications} open={open} setnotifCount={setnotifCount} />}
    </section>
  );
}

export default Profile;
