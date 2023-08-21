import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import "./bizzstyles.css";
import { useNavigate } from "react-router-dom";
import NavbarContext from "../NavbarContext";

const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
}

const UpdateExtrasPage = () => {
    const [amenities, setAmenities] = useState('');
    const [certifications, setCertifications] = useState('');
    const [programs, setPrograms] = useState('');
    const [notes, setNotes] = useState('');

    const navigate = useNavigate();
    const navbarHeight = React.useContext(NavbarContext);

    const companyName = "placeholder"; // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? { minHeight: "100vh", paddingTop: navbarHeight }
                           : { minHeight: "130vh", paddingTop: navbarHeight };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const businessId = "your_business_id"; // Replace with your business ID
        const locationIndex = "your_location_index"; // Replace with your location index

        const payload = {
            amenities,
            certifications,
            programs,
            notes
        };

        try {
            const response = await fetch(`/business/update-extras/${businessId}/${locationIndex}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);

                // Navigate to the next page if needed
                navigate('/successBizz');
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <Container className="sub" style={containerStyle}>
            <Row className="reviews-box"
            style={{marginTop:"-10%"}}>
                <h1 className="head-name">
                    Tell us more about your office at <b style={{color:"#ee2c5b"}}>{companyName}</b></h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="inputfield">
                        <Form.Label>What amenities are available?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter amenities"
                            value={amenities}
                            onChange={(e) => setAmenities(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Do have any of these certifications?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter certifications"
                            value={certifications}
                            onChange={(e) => setCertifications(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Which of the following do you offer?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter programs"
                            value={programs}
                            onChange={(e) => setPrograms(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Use this space to provide information on any other
                            initiatives or efforts your company makes to support the
                            success of female employees: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" className="button-sub">
                        Submit your details!
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default UpdateExtrasPage;
