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
    //
    // const handleSubmit = async (e, action) => {
    //     e.preventDefault();
    //
    //     const { email, companyName, name } = formData;
    //
    //     if (!email || !companyName || !name) {
    //         toast.error("Please fill out all the fields", {
    //             position: toast.POSITION.TOP_CENTER,
    //         });
    //         return;
    //     }
    //
    //     try {
    //         const response = await fetch(process.env.REACT_APP_URL + "business/joinnow", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-Token": csrfToken,
    //             },
    //             credentials: "include",
    //             body: JSON.stringify({
    //                                      email: formData.email,
    //                                      companyName: formData.companyName,
    //                                      name: formData.name,
    //                                  }),
    //         });
    //
    //         if (response.ok) {
    //             const message = action === 'info'
    //                             ? "We just sent you an email, check your inbox for details :)"
    //                             : "Redirecting you to schedule a call...";
    //             toast.success(message, {
    //                 position: toast.POSITION.TOP_RIGHT,
    //             });
    //
    //             if (action === 'schedule') {
    //                 window.open('https://calendly.com/asurana/chat-with-anjali?month=2023-10',
    //                             '_blank');
    //             }
    //         } else {
    //             // Assuming the server responds with a JSON payload in case of an error
    //             const serverResponse = await response.json();
    //
    //             // Constructing an error message based on server response or a default message
    //             const errorMessage = serverResponse.message || 'Server responded with an error';
    //             throw new Error(errorMessage);
    //         }
    //     }   catch (error) {
    //     toast.error("Oops that didn't work!", {
    //         position: toast.POSITION.TOP_RIGHT,
    //     });
    //     console.error('Submission error:', error);
    // }
    //
    //
    // onClose(); // Close the modal
    // };
    const handleSubmit = async (action) => {
        console.log(action);  // Check what is being received

        // Validate form data
        const { name, companyName, email } = formData;
        if (!name || !companyName || !email) {
            toast.error("Please fill out all the fields", {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        // Prepare form data for submission
        const submissionData = {
            name,
            companyName,
            email
        };

        try {
            // Send the form data to the server-side route that handles email sending
            const response = await fetch('/send-alert-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-CSRF-Token": csrfToken,
                                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {

                if(action === 'info') {
                    // Handle success scenario here
                    const message = "We just sent you an email, check your inbox for details :)";
                    toast.success(message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }

               else {
                    window.open('https://calendly.com/asurana/chat-with-anjali?month=2023-10',
                                '_blank');
                    const message = "Redirecting you to schedule a call...";
                    toast.success(message, {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            } else {
                // If the server responded with a status code outside the range of 2xx, throw an error
                const errorData = await response.json(); // Assuming server responds with JSON
                throw new Error(errorData.message || 'Error occurred while sending email.');
            }
        } catch (error) {
            // Handle errors in sending the form data or email
            toast.error("Oops, we couldn't send your form. Please try again.", {
                position: toast.POSITION.TOP_RIGHT,
            });
            console.error('Error:', error.message);
        }

        // Close the modal (if applicable)
        onClose();
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
                                onClick={() => handleSubmit('info')}
                            >
                                Get More Info
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="secondary"
                                className="buttclass"
                                onClick={() => handleSubmit('schedule')}
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
