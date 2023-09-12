import React, {useState} from 'react';
import {Button, Col, Container, Form, Row,} from 'react-bootstrap';
import "./reviewStyles.css";
import {useNavigate} from "react-router-dom";
import NavbarContext from "../NavbarContext";
import ReactTooltip from "react-tooltip";
import ReviewProgressBar from "./ReviewProgressBar";

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

    const companyName =  localStorage.getItem('companyName'); // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? {minHeight: "100vh", paddingTop: navbarHeight}
                           : {minHeight: "130vh"};


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
            const response = await fetch('https://findher-backend.onrender.com/updateReviewDetails', {
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
                navigate('/successUser');
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };



    return (
      <div>
        <ReviewProgressBar percent={50} />
        <Container className="sub" style={containerStyle}>
          <Row className="reviews-box">
            <h1 className="head-name" style={{ marginBottom: "3%" }}>
              Tell us your experience at <span style={{ color: "#ee2c5b" }}>{companyName}</span>
            </h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="question-grp">
                <Form.Label className="question-grp-q">
                  1. What are some good things about this workplace?
                </Form.Label>
                <Form.Control
                  className="custom-input"
                  type="text"
                  placeholder="Type answer here..."
                  value={goodThings}
                  onChange={(e) => setGoodThings(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="question-grp">
                <Form.Label className="question-grp-q">
                  2. What are some not-so-good things about this workplace?{" "}
                </Form.Label>
                <Form.Control
                  className="custom-input"
                  type="text"
                  placeholder="Type answer here..."
                  value={badThings}
                  onChange={(e) => setBadThings(e.target.value)}
                  required
                />{" "}
              </Form.Group>

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
                      required
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
                      required
                    />
                  </Form.Group>
                </Col> 
                <Button
                  type="submit"
                  className="button-sub"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="By submitting, you consent to us utilizing
                 your feedback anonymously to gather and
                 display workplace insights."
                >
                  Submit Review!
                </Button>
              </Row>
            </Form>
            <ReactTooltip id="FifthSubmit" place="right" effect="solid" />
          </Row>
        </Container>
      </div>
    );
};

export default FifthPage;
