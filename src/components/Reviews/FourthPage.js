import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup, Toast } from 'react-bootstrap';
import { BsCircleFill } from 'react-icons/bs'
import "./reviewStyles.css";
import "./FourthPage.css";
import { useNavigate } from "react-router-dom";
import ReviewProgressBar from "./ReviewProgressBar";


const FourthPage = () => {
  // within your component


  const companyName = "placeholder"; // Placeholder for company name
  const [flexibilityRating, setFlexibilityRating] = useState(0);
  const [managementRating, setManagementRating] = useState(0);
  const [coWorkersRating, setCoWorkersRating] = useState(0);
  const [diversityRating, setDiversityRating] = useState(0);
  const [safetyRating, setSafetyRating] = useState(0);
  const [compensationRating, setCompensationRating] = useState(0);
  const [isFormValid, setisFormValid] = useState({
    message: "",
    for: "",
    status: false,
  });

  const createRatingInputGroup = (name, setter) => {
    return (
      <InputGroup  className='inp-group'>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i} className='rating-div'>
              <input
                type="radio"
                name={name}
                value={ratingValue}
                onClick={() => setter(ratingValue)}
                className="star-radio"
              />
              <div className='rating-div'>

                <div className='rating-title'>{i === 0 && "Strongly"}</div>
                <div className='rating-title'>{i === 1 && "Disagree"}</div>
                <div className='rating-title'>{i === 2 && "Neutral"}</div>
                <div className='rating-title'>{i === 3 && "Agree"}</div>
                <div className='rating-title'>{i === 4 && "StronglyAgree"}</div>
                <BsCircleFill
                  className="star-icon review-four-star-icon"
                  color={ratingValue === (name === 'flexibility' ? flexibilityRating :
                    name === 'management' ? managementRating :
                      name === 'coWorkers' ? coWorkersRating :
                        name === 'diversity' ? diversityRating :
                          name === 'safety' ? safetyRating :
                            compensationRating) ? "#ffc107" : "#e4e5e9"}
                  size={40}
                />
              </div>
            </label>
          );
        })}
      </InputGroup>
    )
  };

  const navigate = useNavigate();  // Import useHistory for navigation

  function checkForm() {
    if (flexibilityRating <= 0) {
      setisFormValid({
        message: "Please slect flexibility rating star",
        for: "flexibility",
        status: true,
      });
      return true;
    }
    else if (managementRating <= 0) {
      setisFormValid({
        message: "Please slect management rating star",
        for: "management",
        status: true,
      });
      return true;
    }
    else if (coWorkersRating <= 0) {
      setisFormValid({
        message: "Please slect co-workers rating star",
        for: "co-workers",
        status: true,
      });
      return true;
    }
    else if (diversityRating <= 0) {
      setisFormValid({
        message: "Please slect diversity rating star",
        for: "diversity",
        status: true,
      });
      return true;
    }
    else if (safetyRating <= 0) {
      setisFormValid({
        message: "Please slect safety rating star",
        for: "safety",
        status: true,
      });
      return true;
    }
    else if (compensationRating <= 0) {
      setisFormValid({
        message: "Please slect compensation rating star",
        for: "compensation",
        status: true,
      });
      return true;
    }
    else {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkForm()) {
      return;
    }
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
          body: JSON.stringify({ reviewId, ratings })
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
      <ReviewProgressBar percent={35} />
      <Container className="ratings"
        style={{ marginTop: "20px" }}>

        <Form onSubmit={handleSubmit}>
          <Row className='fourth-row'>
            <h1 className="head-name review-four-head" style={{ marginBottom: "3%", marginTop: "5%" }}>Tell us your experience at <b>{companyName}</b></h1>
            <Col md={6} xs="12" className='fourth-left'>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">1. I am able to schedule my work as per my requirements </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("flexibility", setFlexibilityRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">2. I feel supported by my bosses and leadership </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("management", setManagementRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">3. The workplace fosters a positive and friendly team culture </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("coWorkers", setCoWorkersRating)}
                </div>
              </Form.Group>
            </Col>
            <Col md={6} xs="auto" className='fourth-right'>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">4. I have several female co-workers and managers </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("diversity", setDiversityRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">5. I feel safe and included at work. </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("safety", setSafetyRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">6. I feel fairly compensated in pay or other benefits </Form.Label>
                <div className='form-stars'>
                  {createRatingInputGroup("compensation", setCompensationRating)}
                </div>
              </Form.Group>
            </Col>
            <Row className="d-flex justify-content-center">
              <Button type="submit"
                className="button-sub2 review-four-sub"
                style={{ marginBottom: '50px' }}
              >
                Next </Button>
            </Row>
          </Row>
        </Form>
        {isFormValid.status && (
          <Toast className="Second-page-validation-toast">
            <Toast.Body>
              <p >{isFormValid.message}</p>
              <Button
                type="button"
                className="btn"
                onClick={() =>
                  setisFormValid((prevState) => ({
                    ...prevState,
                    status: false,
                  }))
                }
              >Ok</Button>
            </Toast.Body>
          </Toast>
        )}
      </Container>
    </div>
  );
};

export default FourthPage;
