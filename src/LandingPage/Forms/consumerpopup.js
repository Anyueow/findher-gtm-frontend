import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';
// Assuming you have a CSRF provider, import the hook to use the CSRF token.
// Make sure the path is correct based on your project's structure.
import { useCsrfToken } from '../../CsrfTokenProvider';

const ConsumerPopup = ({ isVisible, onClose }) => { // Accepting props for controlling visibility
    const csrfToken = useCsrfToken(); // Retrieving the CSRF token from the provider
    const [guestProfile, setGuestProfile] = useState({
                                                         firstName: "",
                                                         lastName: "",
                                                         email: "",
                                                         phoneNumber: "",
                                                         linkedinProfile: "",
                                                     });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setGuestProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, phoneNumber, firstName, lastName, linkedinProfile } =
            guestProfile;

        if (!email && !phoneNumber && !firstName && !lastName) {
            return;
        }
        console.log(guestProfile);
        try {
            const response = await fetch(process.env.REACT_APP_URL + "guestProfile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                credentials: "include", // Include this line
                body: JSON.stringify({
                                         email: email,
                                         phoneNumber: phoneNumber,
                                         firstName: firstName,
                                         lastName: lastName,
                                         linkedinProfile: linkedinProfile,
                                     }),
            });

            console.log("its been sent");

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Print the response data to the console for debugging purp
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
            console.error("Error Name:", error.name);
            console.error("Error Message:", error.message);
            console.error("Stack Trace:", error.stack);
        }
    };

    return (
        <Modal show={isVisible} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Enter Your Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row className="form-grp-name" style={{width:"100%"}}>
                        <Col xs="6" className="pe-0">
                            <Form.Group>
                                <Form.Control
                                    name="firstName"
                                    type="text"
                                    placeholder="First Name"
                                    value={guestProfile.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="6" className="pe-0">
                            <Form.Group>
                                <Form.Control
                                    name="lastName"
                                    placeholder="Last Name"
                                    type="text"
                                    value={guestProfile.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-grp-name" style={{width:"100%"}}>
                        <Col xs="6" className="pe-0">
                            <Form.Group>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    value={guestProfile.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs="6" className="pe-0">
                            <Form.Group>
                                <Form.Control
                                    name="phoneNumber"
                                    placeholder="Phone"
                                    type="text"
                                    value={guestProfile.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-grp-name" style={{width:"100%"}}>
                        <Col xs="12" className="pe-0">
                    <Form.Group>
                        <Form.Control
                            name="linkedinProfile"
                            placeholder="LinkedIn Profile (optional)"
                            type="text"
                            value={guestProfile.linkedinProfile}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                        </Col>
                    </Row>
                    <Row className="form-grp-name" style={{width:"100%"}}>
                        <Col xs="12" className="pe-0">
                    <Form.Group className="submitGuest" style={{width:"100%"}}>
                        <Button
                            className=""
                            style={{ marginBottom: "3%" }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>

    );
};

export default ConsumerPopup;
