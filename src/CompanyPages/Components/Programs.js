import React from "react";
import "./CSS/Programs.css";
import people from "../imageAssets/people.png";
import { Row, Col,Toast, Form, Button} from "react-bootstrap";

function Programs(props) {
  return (
    <>
      <div className="check-blur">
                    {!props.isLogedIn && !props.isGuest  && <div className="blur-company-details" id="guest-profile-login-toast-id">
                        <div className="mt-5"><Toast className="guest-profile-login-toast guest-profile-login-toast-program" >
        <Toast.Body className="">
          <br />
          <Row>
                  <Form
                    onSubmit={props.handleSubmit}
                    className="form-wrapper-guest-profile"
                  >
                    <p>To view more, enter your <span>details</span> below</p>
                    <br/>
                    <Row className="form-grp-name">
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="firstName" 
                            type="text"
                            placeholder="First Name"
                            value={props.guestProfile.firstName}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={props.guestProfile.lastName}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <br/>
                    <Row className="form-grp-name">
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="email" 
                            type="email"
                            placeholder="Email"
                            value={props.guestProfile.email}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="phoneNumber"
                            placeholder="Phone"
                            type="text"
                            value={props.guestProfile.phoneNumber}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <br/>
                    <Form.Group className="form-grp ps-2">
                      <Form.Control
                        name="linkedinProfile" 
                        placeholder="LinkedIn Profile (optional)"
                        type="text"
                        value={props.guestProfile.linkedinProfile}
                        onChange={props.handleInputChange}
                      />
                    </Form.Group>
                     <br/>
                        <Form.Group className="submitGuest">
                          <Button
                            className=""
                            style={{ marginBottom: "3%" }}
                            type="submit"
                          >
                           Submit
                          </Button>
                        </Form.Group>
                  </Form>
                </Row>
        </Toast.Body>
      </Toast>
      </div>
                    </div>}
                    </div>
    <Col className="infoBoxProgram" style={{ width: "60%", height: "85vh" }}>
      <Row>
        <Col xs={8}>
          <h2 className="company-details-title">Women’s-Only Programs</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
      <Row className="infoCard-for-women mt-4 mb-2 pt-3">
        <Col xs="2" md="3" lg="2" className="header-section pe-0">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col xs="9"  className="header-section ps-0">
        <h3 className="company-details-sub-title">WellWom Wellness</h3>
        </Col>
        <Col className="text-section mt-2 ps-3">
        <p className="company-details-para">
            the WellWom Program offers resources and support for physical,
            emotional, and mental well-being. From on-site yoga and meditation
            sessions to workshops on women's health issues,...
          </p>
        </Col>
      </Row>
      </Col>
      <Col xs={12} md={6}>
      <Row className="infoCard-for-women mt-4 mb-2 pt-3">
        <Col xs="2"  md="3" lg="2" className="header-section pe-0">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col xs="9"  className="header-section ps-0">
        <h3 className="company-details-sub-title">Passion for Technology</h3>
        </Col>
        <Col className="text-section">
        <p className="company-details-para">
            We seek individuals who are genuinely enthusiastic about technology
            and its transformative potential. A deep interest in staying updated
            with industry trends and a hunger for continuous learning are highly
            regarded.
          </p>
        </Col>
      </Row>
      </Col>
      <Col xs={12} md={6}>
      <Row className="infoCard-for-women mt-4 mb-2 pt-3">
        <Col xs="2"  md="3" lg="2" className="header-section pe-0">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col xs="9"  className="header-section ps-0">
        <h3 className="company-details-sub-title">Continuous Learning</h3>
        </Col>
        <Col xs="12" className="text-section px-3">
          <p className="company-details-para">
            We foster an environment that encourages continuous learning and
            development. Our team members are motivated to explore new
            technologies, methodologies, and approaches to enhance their skills
            and our collective knowledge.
          </p>
        </Col>
      </Row>
      </Col>
      </Row>
    </Col>
    </>
  );
}

export default Programs;
