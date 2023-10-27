import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import './popup.css'; // Make sure this path is correct
import { useCsrfToken } from '../../CsrfTokenProvider'; // Make sure this path is correct
import { toast } from "react-toastify";

const PopupForm = ({ isVisible, onClose }) => {
    const csrfToken = useCsrfToken();
    const [formData, setFormData] = useState({ name: '', companyName: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e, action) => {
        e.preventDefault();

        const { email, companyName, name } = formData;

        if (!email || !companyName || !name) {
            toast.error("Please fill out all the fields", {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        try {
            const response = await fetch(process.env.REACT_APP_URL + "business/joinnow", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                credentials: "include",
                body: JSON.stringify({
                                         email: formData.email,
                                         companyName: formData.companyName,
                                         name: formData.name,
                                     }),
            });

            if (response.ok) {
                const message = action === 'info'
                                ? "We just sent you an email, check your inbox for details :)"
                                : "Redirecting you to schedule a call...";
                toast.success(message, {
                    position: toast.POSITION.TOP_RIGHT,
                });

                if (action === 'schedule') {
                    window.open('https://calendly.com/asurana/chat-with-anjali?month=2023-10',
                                '_blank');
                }
            } else {
                throw new Error('Server responded with an error');
            }
        } catch (error) {
            toast.error("Oops that didnt work!", {
                position: toast.POSITION.TOP_RIGHT,
            });
            console.error('Submission error:', error);
        }

        onClose(); // Close the modal
    };

    return (
        <Modal show={isVisible} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Want to hire <strong style={{fontWeight:"800"}}>better & faster?</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
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
                            <Button
                                variant="primary"
                                className="buttclass"
                                onClick={(e) => handleSubmit(e, 'info')}
                            >
                                Get More Info
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="secondary"
                                className="buttclass"
                                onClick={(e) => handleSubmit(e, 'schedule')}
                            >
                                Schedule a Call
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default PopupForm;
