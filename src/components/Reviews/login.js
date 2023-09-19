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

    if ((email || phoneNumber) && password) {
      // const response = await fetch("https://findher-backend.onrender.com/login",
      const response = await fetch("https://findher-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include this line
        body: JSON.stringify({
          email: email || null,
          phoneNumber: phoneNumber || null,
          password: password,
        }),
      });
      console.log(
        "how can you hate from outside the club you cant even get inp"
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log("she's in but she got problems ");

        // Save the JWT token in the localStorage
        localStorage.setItem("token", data.token); // Print the response data to the console for debugging purposes
        navigate("/profile"); // Assuming you have a success page to navigate to
      } else {
        console.log("dammit these errors");
        // Handle the error response
        const data = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend

        // Display error messages related to invalid credentials or other issues
        setFormErrors({
          email: data.message === "Invalid email, phone number, or password.",
          phoneNumber:
            data.message === "Invalid email, phone number, or password.",
          password:
            data.message === "Invalid email, phone number, or password.",
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

  const isFormValid = (user.email|| user.phoneNumber) && user.password;

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
              <h2 className="head-name Waitlist">
                Log in to submit another review!{" "}
              </h2>

              <Form onSubmit={handleSubmit} className="form-wrapper">
                <Form.Group className="form-grp">
                  <Form.Label>Email or Phone</Form.Label>
                  <Form.Control
                    name="emailOrPhone" // Changed name attribute
                    type="text" // Changed type to text
                    value={user.email || user.phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value.includes("@")) {
                        setUser({ ...user, email: value, phoneNumber: "" });
                      } else {
                        setUser({ ...user, phoneNumber: value, email: "" });
                      }
                    }}
                    required
                  />
                  {(formErrors.email || formErrors.phoneNumber) && (
                    <p className="error-message">Email or phone is required</p>
                  )}
                </Form.Group>
                <Form.Group className="form-grp">
                  <Form.Label>Password</Form.Label>
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
                  Log In
                </Button>
              </Form>
            </Row>
            <Link
              to="/reviews_login"
              className="nav-link2"
              style={{ fontSize: "1rem", color: "#ee2c5b" }}
            >
              <p> Sign up in instead</p>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FirstPage;
