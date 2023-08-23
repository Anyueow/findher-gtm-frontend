import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
import NavbarContext from "../NavbarContext";

export const FirstPage = () => {
  const navbarHeight = React.useContext(NavbarContext);

  const [user, setUser] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    phoneNumber: false,
    password: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, phoneNumber, password } = user;

    if (email && phoneNumber && password) {
      const response = await fetch(
        "https://findher-deploy-c232276eae44.herokuapp.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include this line
          body: JSON.stringify({
            email: email,
            phoneNumber: phoneNumber,
            password: password,
          }),
        }
      );

      console.log("its been sent");

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        console.log(data); // Print the response data to the console for debugging purposes
        navigate("/reviews_one"); // Assuming you have a success page to navigate to
      } else {
        console.log("dammit these errors");

        // Handle the error response
        const data = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend

        // Display error messages for duplicate email or phone number
        setFormErrors({
          email: data.message === "Email already in use.",
          phoneNumber: data.message === "Phone number already in use.",
          password: false,
        });
      }
    } else {
      // Update formErrors to show which fields are missing
      setFormErrors({
        email: !email,
        phoneNumber: !phoneNumber,
        password: !password,
      });
    }
  };

  const isFormValid = user.email && user.phoneNumber && user.password;

  return (
    <section>
      <Container
        id="reviews"
        className="sub"
        style={{ paddingTop: navbarHeight }}
      >
        <Row className="ROw center-contents">
          <Col md={6} className="align-content-center first-div">
            <div className="design">
              <Row>
                <p className="head-name">
                  Exclusive information about workplaces in India
                </p>
              </Row>
              <Row>
                <p className="sub-name">
                  ... brought to you by women who have been there before
                </p>
              </Row>
              <Row>
                <Col md={6} xs={41}>
                  <Button className="button-sub" onClick={handleClick}>
                    {" "}
                    More info{" "}
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col md={6} className="formDes">
            <Row>
              <h2 className="head-name Waitlist">Join the Waitlist!</h2>
            </Row>
            <Row>
              <Form onSubmit={handleSubmit} className="form-wrapper">
                <Form.Group className="form-grp">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email" // Added name attribute
                    type="email"
                    value={user.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="form-grp">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    name="phoneNumber" // Added name attribute
                    type="text"
                    value={user.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.phoneNumber && (
                    <p className="error-message">Phone Number is required</p>
                  )}
                </Form.Group>
                <Form.Group className="form-grp">
                  <Form.Label>Create Password</Form.Label>
                  <Form.Control
                    name="password" // Added name attribute
                    type="password"
                    value={user.password}
                    onChange={handleInputChange}
                    required
                  />
                  {formErrors.password && (
                    <p className="error-message">Password is required</p>
                  )}
                </Form.Group>
                <Button
                  className="button-sub reviewbtn"
                  type="submit"
                  disabled={!isFormValid}
                  style={{ marginBottom: "3%" }}
                >
                  Register
                </Button>
              </Form>
            </Row>
            <Link
              to="/login"
              className="nav-link2"
              style={{ fontSize: "1rem", color: "#ee2c5b" }}
            >
              <p> Log in instead</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstPage;
