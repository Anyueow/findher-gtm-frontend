import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup, Toast } from 'react-bootstrap';
import { BsCircleFill } from 'react-icons/bs'
import "./reviewStyles.css";
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
      <InputGroup className='' id='linear-scale' style={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
        marginTop:"2rem",
        marginBottom:"2rem",
      }}>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i} className='review-four-star-label'>
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
                  color={ratingValue <= (name === 'flexibility' ? flexibilityRating :
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
          <Row >
            <h1 className="head-name review-four-head" style={{ marginBottom: "3%", marginTop: "5%" }}>Tell us your experience at <b>{companyName}</b></h1>
            <Col md={6} xs="12">
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
