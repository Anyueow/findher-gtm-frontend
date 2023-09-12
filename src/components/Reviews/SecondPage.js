import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, Toast } from "react-bootstrap";
import "./reviewStyles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewProgressBar from "./ReviewProgressBar";

export const SecondPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companies, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [employment, setEmployment] = useState("");
  const [industry, setIndustry] = useState("");
  const [Loc, setLoc] = useState("");
  const [title, setTitle] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  

  const [showToast, setShowToast] = useState(true); // Add this state

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const submitReview = async () => {
      if (endDate <= startDate && !currentlyWorking) {
        setisFormValid({
          message: "End date must be greater than start date",
          for: "Date",
          status: true,
        });
        return;
      }
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }

      const reviewData = {
        companyName: companies,
        industry:industry,
        companyOffice: Loc,
        positionTitle: title,
        employmentDetails:employment,
        department:department,
        workingStatus:currentlyWorking,
        startDate: startDate.toISOString().split("T")[0], // Convert the date to a string in the format YYYY-MM-DD
        endDate: currentlyWorking? null :endDate.toISOString().split("T")[0], // Convert the date to a string in the format YYYY-MM-DD
      };

      try {
        const response = await fetch(
          "https://findher-backend.onrender.com/protectedRoute/createReview",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include", // Include this line
            body: JSON.stringify(reviewData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          // Save the review ID in the localStorage
          localStorage.setItem("reviewId", data.reviewId);
          localStorage.setItem("companyName", companies);
          navigate("/reviews_three");
        } else {
          // Handle the error response
          const data = await response.json();
          console.error(`Error: ${response.status} ${response.statusText}`);
          console.error(data.message); // Print the error message from the backend
        }
      } catch (error) {
        console.error("Network error:", error);
      }
    };

    submitReview();
  };

  const employmentStatus = ["Full Time","Part Time","Contract","Unpaid Internship","Paid Internship"];
  const [isFormValid, setisFormValid] = useState({
    message: "",
    for: "",
    status: false,
  });

  return (
    <div>
      <ReviewProgressBar percent={1} />
      <Container className="container-second" style={{ marginTop: "20px" }}>
        <Row className="ROw">
          <Form onSubmit={handleSubmit} className="form-grp-one">
            <h1 className="review-one-head-name" style={{ marginBottom: "4%" }}>
              Tell us about one{" "}
              <span style={{ color: "#ee2c5b" }}> company </span>
              you’ve worked at before :{" "}
            </h1>
            <Row style={{ marginBottom: "2%" }}>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    value={companies}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>{" "}
              <Col md={6} xs={12} className="Office-Location">
                <Form.Group>
                  <Form.Label>Industry</Form.Label>
                  <Form.Control
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>{" "}
              </Col>
            </Row>

            <Row style={{ marginBottom: "2%", marginTop: "27px" }}>
              <Col md={6} xs={12}>
                <Form.Group>
                  <Form.Label>Your Job Title</Form.Label>
                  <Form.Control
                    style={{ padding: "20px" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} xs={12} className="Office-Location">
                <Form.Group>
                  <Form.Label>Location (enter city)</Form.Label>
                  <Form.Control
                    value={Loc}
                    onChange={(e) => setLoc(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row
              style={{ marginBottom: "2%" }}
              className="justify-content-between"
            >
              <Col md={6} xs={12} className="Office-Location">
                <Form.Group>
                  <Form.Label>The Department you were working in</Form.Label>
                  <Form.Control
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>{" "}
              </Col>
              <Col md={3} xs={6}>
                <Form.Group>
                  <Form.Label className="Office-Location">Start Date</Form.Label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    style={{ width: "400px" }} // Adding this line to set the width to 100%
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3} xs={6}>
                <Form.Group>
                  <Form.Label className="Office-Location">End Date</Form.Label>
                  <br />
                  <DatePicker
                    selected={endDate}
                    disabled={currentlyWorking} 
                    onChange={(date) => setEndDate(date)}
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row
              style={{ marginBottom: "2%" }}
            >
              <Col md={6} xs={9}>
              <Form.Group>
                  <Form.Label className="Office-Location">Your Employment status</Form.Label>
                  <Form.Select
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    required
                  >
                    <option value="">Select one</option>
                    {employmentStatus.map((status, index) => (
                      <option key={index} value={status} >
                        {status} 
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4} xs={12} className="d-flex justify-content-center align-items-center Office-Location">
                <Form.Group>
                <Form.Label></Form.Label>
                  <Form.Check
                    type="checkbox"
                    label="I’m currently in this position"
                    // checked={isChecked}
                    onChange={(e) => setCurrentlyWorking(!currentlyWorking)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Button
                className="button-sub"
                type="submit"
                style={{ marginTop: "3%" }}
              >
                Next
              </Button>
              <Link to="/reviews_two" className="nav-link2 bottom-link">
                <p> If you haven't worked anywhere before, click here </p>
              </Link>
            </Row>
          </Form>
        </Row>
        {showToast && (
          <Toast className="SecondPageToast">
            <Toast.Body className="px-5">
              <div className="d-flex justify-content-between align-items-center">
                <p className="underline-text fs-6">Note:</p>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowToast(false)}
                ></button>
              </div>
              <p>
                We ensure that the information you provide is collected in an
                anonymous manner, preventing any association with your identity.
                If you are employed by a small organization, your feedback will
                remain confidential unless it is combined with a significant
                number of other responses.
              </p>
              <p className="underline-text underline-text-review-second">
                Protecting your identity and authenticity is our top priority.
              </p>
              <div className="d-flex justify-content-center">
                <Button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => setShowToast(false)}
                >
                  Sounds good
                </Button>
              </div>
            </Toast.Body>
          </Toast>
        )}
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

export default SecondPage;
