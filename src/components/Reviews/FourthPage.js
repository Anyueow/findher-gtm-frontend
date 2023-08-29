import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import "./reviewStyles.css";
import { useNavigate } from "react-router-dom";
// import ReviewProgressBar from "./ReviewProgressBar"

import NavbarContext from "../NavbarContext";

const FourthPage = () => {
    // within your component
    const navbarHeight = React.useContext(NavbarContext);


    const companyName = "placeholder"; // Placeholder for company name
    const [flexibilityRating, setFlexibilityRating] = useState(0);
    const [managementRating, setManagementRating] = useState(0);
    const [coWorkersRating, setCoWorkersRating] = useState(0);
    const [diversityRating, setDiversityRating] = useState(0);
    const [safetyRating, setSafetyRating] = useState(0);
    const [compensationRating, setCompensationRating] = useState(0);

    const createRatingInputGroup = (name, setter) => {
        return (
            <InputGroup className='input-group-four'>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i}>
                            <input
                                type="radio"
                                name={name}
                                value={ratingValue}
                                onClick={() => setter(ratingValue)}
                                className="star-radio"
                            />
                            <FaStar
                                className="star-icon review-four-star-icon"
                                color={ratingValue <= (name === 'flexibility' ? flexibilityRating :
                                                       name === 'management' ? managementRating :
                                                       name === 'coWorkers' ? coWorkersRating :
                                                       name === 'diversity' ? diversityRating :
                                                       name === 'safety' ? safetyRating :
                                                       compensationRating) ? "#ffc107" : "#e4e5e9"}
                                size={82}
                            />
                        </label>
                    );
                })}
            </InputGroup>
        )
    };

    const navigate = useNavigate();  // Import useHistory for navigation


    const handleSubmit = async (e) => {

        e.preventDefault();

        const submitRatings = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.error("No token found. Please log in.");
                return;
            }
            // Get reviewId from local storage
            const reviewId = localStorage.getItem("reviewId");

            if (!reviewId) {
                console.error("No reviewId found. Please log in.");
                return;
            }

            // Prepare the ratings object
            const ratings = {
                flexibility: flexibilityRating,
                management: managementRating,
                coWorkers: coWorkersRating,
                diversity: diversityRating,
                safety: safetyRating,
                compensation: compensationRating
            };

            try {
                // Make an asynchronous request to the backend API
                const response = await fetch("https://findher-backend.onrender.com/updateRatings", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`  // Assuming your token is stored in local storage
                    },
                    credentials: "include", // Include this line
                    body: JSON.stringify({reviewId, ratings})
                });

                // Handle response
                if (response.ok) {
                    const result = await response.json();
                    console.log(result);
                    console.log("She works!!")

                    // Navigate to the next page
                    navigate("/reviews_four");
                } else {
                    // Handle error
                    const errorMessage = await response.text();
                    console.error(errorMessage);
                }
            } catch (error) {
                console.error("Error occurred:", error);
            }
        }

        submitRatings();
    };

    return (
        <div>
             {/* <ReviewProgressBar/> */}
        <Container className="ratings"
                   style={{ paddingTop: navbarHeight }}>
            <Form>
                <Row >
                    <h1 className="head-name review-four-head" style={{marginBottom:"3%", marginTop:"5%"}}>Tell us your experience at <b>{companyName}</b></h1>
                    <Col md={6}  xs="12">
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">1. Flexibility </Form.Label>
                            <h3 className="review-subs"> I am able to schedule my work as per my requirements </h3>
                            {createRatingInputGroup("flexibility", setFlexibilityRating)}
                        </Form.Group>
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">2. Management </Form.Label>
                            <h3 className="review-subs">I feel supported by my bosses and leadership</h3>
                            {createRatingInputGroup("management", setManagementRating)}
                        </Form.Group>
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">3. Co-Workers </Form.Label>
                            <h3 className="review-subs">The workplace fosters a positive and friendly team culture</h3>
                            {createRatingInputGroup("coWorkers", setCoWorkersRating)}
                        </Form.Group>
                    </Col>
                    <Col md={6} xs="auto">
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">4. Diversity </Form.Label>
                            <h3 className="review-subs">I have several female co-workers and managers</h3>
                            {createRatingInputGroup("diversity", setDiversityRating)}
                        </Form.Group>
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">5. Safety </Form.Label>
                            <h3 className="review-subs">I feel safe and included at work.</h3>
                            {createRatingInputGroup("safety", setSafetyRating)}
                        </Form.Group>
                        <Form.Group className="rating-box">
                            <Form.Label className="review-heads">6. Compensation </Form.Label>
                            <h3 className="review-subs">I feel fairly compensated in pay or other benefits</h3>
                            {createRatingInputGroup("compensation", setCompensationRating)}
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">

                        <Button type="submit"
                                className="button-sub2 review-four-sub"
                                style={{ marginBottom: '50px' }}
                                onClick={handleSubmit}>
                            Next </Button>

                </Row>
            </Form>
        </Container>
        </div>
    );
};

export default FourthPage;
