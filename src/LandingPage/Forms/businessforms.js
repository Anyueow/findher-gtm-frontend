import React, { useState } from 'react';
import {Modal, Button, Form, Col, Row} from 'react-bootstrap';
import './popup.css'; // Importing the separate CSS file
import { useCsrfToken } from '../../CsrfTokenProvider';
import { toast } from "react-toastify";

const PopupForm = ({ isVisible, onClose }) => {

    const csrfToken = useCsrfToken();

    const [formData, setFormData] = useState({ name: '', companyName: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        alert('A submission was made. Check the console for details.');
        e.preventDefault();

        const { email, companyName, name } = formData;
    
        if (email && companyName && name) {
          const response = await fetch(process.env.REACT_APP_URL+"business/joinnow", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRF-Token" : csrfToken,
            },
            credentials: "include", // Include this line
            body: JSON.stringify({
              email: formData.email,
              companyName: formData.companyName,
              name: formData.name,
            }),
          });
          console.log(
            "how can you hate from outside the club you cant even get inp"
          );
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            toast.success("Form submitted successfully", {
                position: toast.POSITION.TOP_RIGHT,
              });
          } else {
            console.log("dammit these errors");
            // Handle the error response
            const data = await response.json();
            toast.error("Internal server error", {
              position: toast.POSITION.TOP_RIGHT,
            });
            console.error(`Error: ${response.status} ${response.statusText}`);
            console.error(data.message); // Print the error message from the backend
    
          }
        } else {
          // Update formErrors to show which fields are missing
          toast.error("Please fill out all the fields", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        onClose();
    };

    const handleSchedule = () => {
        alert('Schedule a call with us.');
    };

    return (
        <Modal show={isVisible} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Want to hire <strong style={{fontWeight:"800"}}> better & faster?</strong>
                    </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formCompanyName">
                        <Form.Control
                            type="text"
                            name="companyName"
                            placeholder="Company Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                    <Button variant="primary" className="buttclass" type="submit">
                        Get More Info
                    </Button></Col>
                        <Col>
                    <Button variant="secondary" className="buttclass" onClick={handleSchedule}>
                        Schedule a Call
                    </Button> </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PopupForm;
