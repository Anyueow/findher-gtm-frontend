import React, { useState } from "react";
import "./CSS/Profile.css";
import ProfileNavBar from "./ProfileNavBar";
import { Col, Form, Row, Button } from "react-bootstrap";
import profile from "../../Assets/profile.webp";

function Profile() {

  const [newImage, setNeWImage] = useState();

  const handleProfile = async (e) => {


    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    const Data = await new Promise((res, rej) => {
      reader.onload = () => res(reader.result);
      reader.onerror = (e) => rej.e;
    });
    setNeWImage(Data);

  };

  return (
    <section>
      <ProfileNavBar />
      <div className="profile-container d-flex justify-content-center pt-5 mt-5">
        <Row style={{ width: "90%" }} className="mt-5">
          <Col lg="4">
            <div className="card profile-card">
              <div class="card-body mt-3 ms-3">
                <h4 class="card-title" style={{ textAlign: "left" }}>
                  Contact Details
                </h4>
                <Form>
                  <Row className="mb-4 mt-2">
                    <Col>
                      <Form.Group style={{ textAlign: "left" }}>
                        <Form.Label className="mb-0">First Name</Form.Label>
                        <Form.Control
                          required
                          disabled
                          value="Ananya"
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
                          value="Shah"
                          style={{ color: "#BEBCBC" }}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-5" style={{ textAlign: "left" }}>
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
                    <Col xs="8">
                      <Form.Group>
                        <Form.Control
                          required
                          disabled
                          value="7997414400"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-5" style={{ textAlign: "left" }}>
                    <Col xs="10" className="pe-0">
                      <Form.Group>
                        <Form.Label className="mb-0">Email</Form.Label>
                        <Form.Control
                          className="px-2"
                          disabled
                          required
                          value="anyushah@gmail.com"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mt-1" style={{ textAlign: "left" }}>
                    <Button href="#" className="profile-save-btn mt-4">
                      Save changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="card profile-card">
              <div class="card-body mt-3 ms-3">
                <h4 class="card-title" style={{ textAlign: "left" }}>
                  Work Details
                </h4>
                <Form>
                  <div>
                    <Form.Group style={{ textAlign: "left" }}>
                      <Form.Label className="mb-0">Current Company </Form.Label>
                      <Form.Control required value="FindHer"></Form.Control>
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
                          value="Product Head"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mt-3" style={{ textAlign: "left" }}>
                    <Col xs="10" className="pe-0">
                      <Form.Group>
                        <Form.Label className="mb-0">Department</Form.Label>
                        <Form.Control
                          className="px-2"
                          required
                          value="Marketing"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3" style={{ textAlign: "left" }}>
                    <Col xs="10" className="pe-0">
                      <Form.Group>
                        <Form.Label className="mb-0">Location</Form.Label>
                        <Form.Control
                          className="px-2"
                          disabled
                          required
                          value="Bangalore"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <div style={{ textAlign: "left" }}>
                    <Button href="#" className="profile-save-btn mt-4">
                      Save changes
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
          <Col lg="4">
            <div className="card profile-card">
              <div class="card-body mt-3 ms-3">
                <Form>
                  <Row className="mt-2">
                    <Col xs="12">
                      <h4 class="card-title" style={{ textAlign: "left" }}>
                        Profile Details
                      </h4>
                    </Col>
                    <Col xs="12" className="my-5 d-flex justify-content-center">
                    <img style={{width:"50%"}}  className="rounded-circle" src={newImage ? newImage : profile} alt="Profile"/>
                    </Col>
                    <Col xs="12" className="d-flex justify-content-center">
                      <Form.Group>
                      <label className="profile-change">
                        <input
                          type="file"
                          accept=".jpg, .jpeg, .png, .gif"
                          style={{ display: "none" }}
                          onChange={handleProfile}
                          id="profileUpload"
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
        </Row>
      </div>
    </section>
  );
}

export default Profile;
