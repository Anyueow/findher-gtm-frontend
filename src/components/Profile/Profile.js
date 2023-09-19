import React, { useState, useEffect } from "react";
import "./CSS/Profile.css";
import ProfileNavBar from "./ProfileNavBar";
import { Col, Form, Row, Button } from "react-bootstrap";
import ChangeNumEmail from "./ChangeNumEmail";

function Profile() {

  const [profileDetails, setProfileDetails] = useState();
  const [showNumEmail, setshowNumEmail] = useState(false);

  function handleOnChange(e) {
    const name = e.target.name;
    setProfileDetails({
      ...profileDetails,
      [name]: e.target.value,
    });
    console.log("Updated profileDetails:", profileDetails);
  };

  const handleProfile = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    const Data = await new Promise((res, rej) => {
      reader.onload = () => res(reader.result);
      reader.onerror = (e) => rej.e;
    });
    UploadProfilePicture(Data)
  };

  async function UploadProfilePicture(profilePic){
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch("https://findher-backend.onrender.com/profile/upload",
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Include this line
        body:  JSON.stringify({profilePic}),
      });

      if (response.ok) {
        const data = await response.json();
        setProfileDetails((prevState) => ({ ...prevState, profilePic }));
      } else {
        console.log("dammit these errors");
        // Handle the error response
        console.log(response)
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
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }
      try {
        const response = await fetch("https://findher-backend.onrender.com/profile/view",
         {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });

        if (response.ok) {
          const data = await response.json();
          setProfileDetails(data)
          console.log(data); // Print the response data to the console for debugging purp
        } else {
          console.log("dammit these errors");
          // Handle the error response
          console.log(response)
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
  }, []);



  return (
    <section>
      <ProfileNavBar newImage={profileDetails?.profilePic} />
      <div className="profile-container d-flex justify-content-center pt-3 mt-4">
        <Row
          style={{ width: "90%" }}
          className="mt-5 d-flex justify-content-center"
        >
          <Col lg="4" md="6" className="mb-4">
            <div className="card profile-card">
              <div className="card-body  ms-3">
                <h4 className="card-title" style={{ textAlign: "left" }}>
                  Contact Details
                </h4>
                <Form>
                  <Row className="mb-4 mt-2">
                    <Col>
                      <Form.Group
                        style={{ textAlign: "left" }}
                        data-tip="profile-name-tooltip"
                        data-for="profile-name-tooltip"
                        data-html={true}
                      >
                        <Form.Label className="mb-0">First Name</Form.Label>
                        <Form.Control
                          required
                          disabled
                          name="firstName"
                          value={profileDetails?.firstName}
                          style={{ color: "#BEBCBC" }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group style={{ textAlign: "left" }}>
                        <Form.Label className="mb-0">Last Name</Form.Label>
                        <Form.Control
                          required
                          disabled
                          name="lastName"
                          value={profileDetails?.lastName}
                          style={{ color: "#BEBCBC" }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-4" style={{ textAlign: "left" }}>
                    <Col xs="12">
                      {" "}
                      <Form.Label className="mb-0">Phone Number</Form.Label>
                    </Col>
                    <Col xs="2" className="pe-0">
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
                           value={profileDetails?.phoneNumber}
                           onChange={handleOnChange}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-4" style={{ textAlign: "left" }}>
                    <Col xs="9" className="pe-0">
                      <Form.Group>
                        <Form.Label className="mb-0">Email</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          name="email"
                          onChange={handleOnChange}
                          value={profileDetails?.email}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-3" style={{ textAlign: "left" }}>
                    <Button onClick={()=>setshowNumEmail(true)} className="profile-save-btn mt-4">
                      Save changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" className="mb-4">
            <div className="card profile-card">
              <div className="card-body mx-0 px-0">
                <h4 className="card-title" style={{ textAlign: "left" }}>
                  Work Details
                </h4>
                <Form>
                  <div>
                    <Form.Group style={{ textAlign: "left" }}>
                      <Form.Label className="mb-0">Current Company </Form.Label>
                      <Form.Control required 
                      value={profileDetails?.companyName}
                      ></Form.Control>
                    </Form.Group>
                  </div>

                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12">
                      <Form.Label className="mb-0">Job Title </Form.Label>
                    </Col>
                    <Col xs="12">
                      <Form.Group>
                        <Form.Control
                          required
                          value={profileDetails?.positionTitle}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12" className="">
                      <Form.Group>
                        <Form.Label className="mb-0">Department</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          value={profileDetails?.department}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-2" style={{ textAlign: "left" }}>
                    <Col xs="12" className="">
                      <Form.Group>
                        <Form.Label className="mb-0">Location</Form.Label>
                        <Form.Control
                          className="px-2"
                          disabled
                          required
                          value={profileDetails?.companyOffice}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div style={{ textAlign: "left" }}>
                    <Button href="#" className="profile-save-btn mt-3">
                      Save changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4" md="6" className="mb-4">
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
                      <img
                        className="profile-picture"
                        src={profileDetails?.profilePic}
                        alt="Profile"
                      />
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
      {showNumEmail && (  <ChangeNumEmail showNumEmail={showNumEmail} setshowNumEmail={setshowNumEmail} email={profileDetails?.email} phoneNumber={profileDetails?.phoneNumber}/>)}
    </section>
  );
}

export default Profile;
