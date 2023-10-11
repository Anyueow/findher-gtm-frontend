import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Toast,
} from "react-bootstrap";
// import { BsCircleFill } from "react-icons/bs";
import { FaRegCircleDot } from "react-icons/fa6";

import "./reviewStyles.css";
import "./FourthPage.css";
import { useNavigate } from "react-router-dom";
import ReviewProgressBar from "./ReviewProgressBar";
import { usePageTimeTracker } from "../../ReusableFunctions/usePageTimeTracker";
import { useCsrfToken } from '../../CsrfTokenProvider';

const FourthPage = () => {
  // within your component
  const secondPageTime= usePageTimeTracker();
  // console.log(secondPageTime);
  const companyName = localStorage.getItem("companyName"); // Placeholder for company name
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

  const csrfToken = useCsrfToken();

  const createRatingInputGroup = (name, setter) => {
    return (
      <InputGroup className="inp-group">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i} className="rating-div">
              <input
                type="radio"
                name={name}
                value={ratingValue}
                onClick={() => setter(ratingValue)}
                className="star-radio ratIcon"
                
              />
                <div className="rating-title">{i === 0 && "Strongly Disagree"} {i === 1 && "Somewhat Disagree"}{i === 2 && "Agree/ Disagree"}{i === 3 && "Somewhat Agree"}{i === 4 && "Strongly Agree"}</div>
                <FaRegCircleDot
                  className="star-icon review-four-star-icon"
                  color={
                    ratingValue ===
                    (name === "flexibility"
                      ? flexibilityRating
                      : name === "management"
                      ? managementRating
                      : name === "coWorkers"
                      ? coWorkersRating
                      : name === "diversity"
                      ? diversityRating
                      : name === "safety"
                      ? safetyRating
                      : compensationRating)
                      ? "blue"
                      : "#dbd9fd"
                  }
                  
                  size={40}
                />
            </label>
          );
        })}
      </InputGroup>
    );
  };

  const navigate = useNavigate(); // Import useHistory for navigation

  function checkForm() {
    if (flexibilityRating <= 0) {
      setisFormValid({
        message: "Please slect flexibility rating star",
        for: "flexibility",
        status: true,
      });
      return true;
    } else if (managementRating <= 0) {
      setisFormValid({
        message: "Please slect management rating star",
        for: "management",
        status: true,
      });
      return true;
    } else if (coWorkersRating <= 0) {
      setisFormValid({
        message: "Please slect co-workers rating star",
        for: "co-workers",
        status: true,
      });
      return true;
    } else if (diversityRating <= 0) {
      setisFormValid({
        message: "Please slect diversity rating star",
        for: "diversity",
        status: true,
      });
      return true;
    } else if (safetyRating <= 0) {
      setisFormValid({
        message: "Please slect safety rating star",
        for: "safety",
        status: true,
      });
      return true;
    } else if (compensationRating <= 0) {
      setisFormValid({
        message: "Please slect compensation rating star",
        for: "compensation",
        status: true,
      });
      return true;
    } else {
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
        compensation: compensationRating,
      };

      try {
        // Make an asynchronous request to the backend API
        const response = await fetch(process.env.REACT_APP_URL+"updateRatings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Assuming your token is stored in local storage
              "X-CSRF-Token" : csrfToken,
            },
            credentials: "include", // Include this line
            body: JSON.stringify({ reviewId, ratings,secondPageTime }),
          }
        );

        // Handle response
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          console.log("She works!!");

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
    };

    submitRatings();
  };

  return (
    <div>
      <ReviewProgressBar percent={25} />
      <Container className="ratings" style={{ marginTop: "20px",marginLeft:"0" }}>
        <Form onSubmit={handleSubmit}>
          <Row className="fourth-row">
            <h1 className="review-four-head" style={{ marginTop: "8%" }}>
              Tell us your experience at{" "}
              <span style={{ color: "#ee2c5b" }}>{companyName}</span>
            </h1>
            <h5 className="review-four-head-h5" style={{ marginBottom: "3%" }}>
              How would you respond to the following?:
            </h5>
            <div className="qesBox" style={{width:"100%",padding:"0"}}>
            <Col   className="fourth-left">
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                   1. I had the flexibility I needed to balance my work and
                  personal life:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup("flexibility", setFlexibilityRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                  2. I feel supported by my bosses and leadership:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup("management", setManagementRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                  3. The workplace fosters a positive and friendly team culture:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup("coWorkers", setCoWorkersRating)}
                </div>
              </Form.Group>
            </Col>
            <Col  className="fourth-right">
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                  4. I have several female co-workers and managers:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup("diversity", setDiversityRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                  5. I feel safe and included at work:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup("safety", setSafetyRating)}
                </div>
              </Form.Group>
              <Form.Group className="rating-box fourth-rating-box">
                <Form.Label className="review-label">
                  6. I feel fairly compensated in pay or other benefits:{" "}
                </Form.Label>
                <div className="form-stars">
                  {createRatingInputGroup(
                    "compensation",
                    setCompensationRating
                  )}
                </div>
              </Form.Group>
            </Col>
            </div>
            <Row className="d-flex justify-content-center">
              <Button
                type="submit"
                className="button-review-four review-four-sub"
                style={{ marginBottom: "50px" }}
              >
                Next{" "}
              </Button>
            </Row>
          </Row>
          <button className="right-review-arrow desktop-view" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill="#F6B5A8" />
              <path
                d="M23 17L31 24.5L23 32"
                stroke="#EE2C5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="left-review-arrow desktop-view" 
          onClick={()=>navigate('/reviews_one')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                transform="matrix(-1 0 0 1 50 0)"
                fill="#F6B5A8"
              />
              <path
                d="M27 17L19 24.5L27 32"
                stroke="#EE2C5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Form>
        {isFormValid.status && (
          <Toast className="Second-page-validation-toast">
            <Toast.Body>
              <p>{isFormValid.message}</p>
              <Button
                type="button"
                className="btn"
                onClick={() =>
                  setisFormValid((prevState) => ({
                    ...prevState,
                    status: false,
                  }))
                }
              >
                Ok
              </Button>
            </Toast.Body>
          </Toast>
        )}
      </Container>
    </div>
  );
};

export default FourthPage;
