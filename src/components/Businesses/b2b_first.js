import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./bizzstyles.css";
import NavbarContext from "../NavbarContext";

export const B2b_first = () => {
    const navbarHeight = React.useContext(NavbarContext);

    const [business, setBusiness] = useState({
                                                 name: "",
                                                 location: {
                                                     zipCode: "",
                                                 }
                                             });

    const [formErrors, setFormErrors] = useState({
                                                     name: false,
                                                     zipCode: false,
                                                 });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "zipCode") {
            setBusiness({ ...business, location: { ...business.location, [name]: value } });
        } else {
            setBusiness({ ...business, [name]: value });
        }
    };

    const handleSignInClick = (method) => {
        switch (method) {
            case "email":
                navigate("/email_signin");
                break;
            case "phone":
                navigate("/signin-phone");
                break;
            case "sso":
                navigate("/signin-sso");
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, location } = business;
        const { zipCode } = location;

        if (name && zipCode) {
            const response = await fetch("/business/register", { // Updated URL
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Removed credentials line
                body: JSON.stringify({
                                         name: name,
                                         location: location,
                                     }),
            });

            console.log("it's been sent");

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                localStorage.setItem('businessId', data.businessId);
                navigate("/choose-signin");

            } else {
                console.log("dammit these errors");

                const data = await response.json();
                console.error(`Error: ${response.status} ${response.statusText}`);
                console.error(data.message);
            }
        } else {
            setFormErrors({
                              name: !name,
                              zipCode: !zipCode,
                          });
        }
    };



    return (
        <section>
            <Container id="reviews" className="sub" style={{ paddingTop: navbarHeight }}>
                <Row className="ROw center-contents">
                    <Col md={6} className="align-content-center first-div">
                        <div className="design">
                            <Row>
                                <p className="head-name">
                                    Attract top female talent and build a <strong> stronger </strong>
                                    workforce with FindHer
                                </p>
                            </Row>
                            <Row>
                                <Col md={6} xs={41}>
                                    <Button className="button-sub" onClick={() => navigate("/")}>
                                        More info
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={6} className="formDes">
                        <Row>
                            <h2 className="head-name Waitlist" style={{ textDecoration: "underline", marginTop:"2%"}}>
                                Register your Organization on Our Waitlist
                            </h2>
                        </Row>
                        <Row>
                            <Form onSubmit={handleSubmit} className="form-wrapper">
                                <Form.Group className="form-grp">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control
                                        name="name"
                                        type="text"
                                        value={business.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="form-grp">
                                    <Form.Label>Office Zip Code</Form.Label>
                                    <Form.Control
                                        name="zipCode"
                                        type="text"
                                        value={business.location.zipCode}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {formErrors.zipCode && <p className="error-message">Zip Code is required</p>}
                                </Form.Group>

                            </Form>
                        </Row>
                        <Row

                        style={{marginBottom:"3%"}}>
                            <h5 className="naved"
                                style={{marginTop:"2%", marginBottom:"2%"}}>Sign In with:</h5>
                            <Col md={2} xs="auto">
                            <Button
                                className="button-sub"
                                onClick={() => handleSignInClick("email")}

                            >
                                Email
                            </Button>
                            </Col>
                            <Col md={2} xs="auto">
                            <Button
                                className="button-sub"
                                onClick={() => handleSignInClick("phone")}

                            >
                                Phone
                            </Button>
                            </Col>
                            <Col md={2} xs="auto">
                            <Button className="button-sub" onClick={() => handleSignInClick("sso")}>
                                SSO
                            </Button>
                            </Col>
                        </Row>
                        <Link to="/login" style={{ fontSize: "1.1rem", color: "#ee2c5b" }}>
                            <p>Log in instead</p>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default B2b_first;
