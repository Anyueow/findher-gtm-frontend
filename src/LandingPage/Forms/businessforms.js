import React, { useState } from 'react';
import {Modal, Button, Form, Col, Row} from 'react-bootstrap';
import './popup.css'; // Importing the separate CSS file

const PopupForm = ({ isVisible, onClose }) => {
    const [formData, setFormData] = useState({ name: '', companyName: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        alert('A submission was made. Check the console for details.');
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
