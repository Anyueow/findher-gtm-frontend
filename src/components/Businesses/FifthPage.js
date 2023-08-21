import React, {useState} from 'react';
import {Button, Col, Container, Form, Row,} from 'react-bootstrap';
import "./bizzstyles.css";
import {useNavigate} from "react-router-dom";
import NavbarContext from "../NavbarContext";

const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
}



const FifthPage = () => {
    const [goodThings, setGoodThings] = useState('');
    const [badThings, setBadThings] = useState('');
    const [amenities, setAmenities] = useState('');
    const [benefits, setBenefits] = useState('');

    // within your component
    const navigate = useNavigate();
    const navbarHeight = React.useContext(NavbarContext);

    const companyName = "placeholder"; // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? {minHeight: "100vh", paddingTop: navbarHeight}
                           : {minHeight: "130vh", paddingTop: navbarHeight};


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the reviewId and token from local storage
        const reviewId = localStorage.getItem('reviewId');
        const token = localStorage.getItem('token');

        if (!reviewId || !token) {
            console.error('No reviewId or token found. Please log in.');
            return;
        }

        const payload = {
            reviewId,
            goodThings,
            badThings,
            amenities,
            benefits,
        };

        try {
            const response = await fetch('https://findher-deploy-c232276eae44.herokuapp.com/updateReviewDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);

                // Navigate to the next page if needed
                navigate('/success');
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };



    return (

        <Container className="sub"
                   style={containerStyle}
        >
            <Row className="reviews-box">
            <h1 className="head-name" style={{marginBottom:"3%"}}>Tell us your experience at <b>{companyName}</b></h1>
            <Form>
                <Form.Group className="question-grp"  >
                <Form.Label className="question-grp-q">
                    1. What are some good things about this workplace?
                </Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Type answer here..."
                        value={goodThings}
                        onChange={(e) => setGoodThings(e.target.value)}
                    />

                </Form.Group>


                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                       2. What are some not-so-good things about this workplace?                     </Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Type answer here..."
                        value={badThings}
                        onChange={(e) => setBadThings(e.target.value)}
                    />                </Form.Group>

                <Row>
                <Col md={6} xs="auto">
                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                        3. What are some amenities this place offer?
                    </Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Type answer here..."
                        value={amenities}
                        onChange={(e) => setAmenities(e.target.value)}
                    />
                </Form.Group>
                </Col>


                <Col md={6} xs="auto">
                <Form.Group className="question-grp">
                    <Form.Label className="question-grp-q">
                        4. What other benefits are provided?
                    </Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="text"
                        placeholder="Type answer here..."
                        value={benefits}
                        onChange={(e) => setBenefits(e.target.value)}
                    />
                </Form.Group>
                </Col>

                </Row>
            </Form>

                <Button type="submit" className="button-sub" onClick={handleSubmit}>
                    Submit Review!
                </Button>


            </Row>
        </Container>
    );
};

export default FifthPage;
