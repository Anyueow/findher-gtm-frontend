import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./bizzstyles.css";
import NavbarContext from "../NavbarContext";

export const PhoneSign = () => {
    const navbarHeight = React.useContext(NavbarContext);

    const [business, setBusiness] = useState({
                                                 personName: "",
                                                 phone: "",
                                                 password: "",
                                             });

    const [formErrors, setFormErrors] = useState({
                                                     personName: false,
                                                     phone: false,
                                                     password: false,
                                                 });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setBusiness({ ...business, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { personName, phone, password } = business;

        if (personName && phone && password) {
            const businessId = localStorage.getItem('businessId');

            const response = await fetch(`/business/update/phone/${businessId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                                         personName: personName,
                                         phone: phone,
                                         password: password,
                                     }),
            });

            console.log("it's been sent");

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                navigate("/update_details");
            } else {
                console.log("dammit these errors");

                const data = await response.json();
                console.error(`Error: ${response.status} ${response.statusText}`);
                console.error(data.message);
            }
        } else {
            setFormErrors({
                              personName: !personName,
                              phone: !phone,
                              password: !password,
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
                                    <Form.Label>Person Name</Form.Label>
                                    <Form.Control
                                        name="personName"
                                        type="text"
                                        value={business.personName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="form-grp">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="number"
                                        value={business.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {formErrors.phone && <p className="error-message">Email is required</p>}
                                </Form.Group>
                                <Form.Group className="form-grp">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        value={business.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Form.Group>
                                <Button type="submit" className="button-sub">
                                    Register
                                </Button>
                            </Form>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PhoneSign;
