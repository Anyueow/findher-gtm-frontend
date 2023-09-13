import React, { useState } from "react";
import "./SeventhPage.css";
import ReviewProgressBar from "./ReviewProgressBar";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Toast,
} from "react-bootstrap";

function SeventhPage() {
  const [firstOne, setFirstOne] = useState([]);
  const [setTwo, setsetTwo] = useState([]);

  const [showFirstOne, setshowFirstOne] = useState(false);
  const [setTwoShow, setsetTwoShow] = useState(false);

  const companyName = localStorage.getItem("companyName");

  const optionsOne = [
    "Remote work",
    "On-site cafeteria",
    "On-site childcare",
    "Clean toilets",
    "Free coffee/tea",
    "Designated parking",
    "Convenient public transportation to site",
    "Security personnel",
    "Open workspaces",
    "Vibrant interiors",
    "Clean infrastructure",
    "Safe locality",
    "Healthcare benefits",
    "Mental health resources",
    "Menstrual leaves",
    "Flexible work options",
    "Gym memberships or wellness programs",
    "Paid time off",
    "Retirement plans",
    "Professional development opportunities",
    "Employee award/recognition programs",
    "Childcare benefits or support",
    "Transportation benefits",
    "Employee engagement or team-building activities",
    "Employee discounts or perks",
  ];

  const optionsTwo = [
    "Unclean toilets",
    "Poor parking spaces",
    "Unsafe locality",
    "Office location is too remote",
    "Overcrowded office spaces",
    "Poor building maintenance",
    "Inconsistent work hours"
];

  const handleFirstCheckboxChange = (option) => {
    console.log("Checkbox clicked:", option);

    if (firstOne.includes(option)) {
      setFirstOne((prevOptions) =>
        prevOptions.filter((item) => item !== option)
      );
    } else {
      setFirstOne((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleFirstClose = (data) => {
    setFirstOne((prevOptions) =>
    prevOptions.filter((item) => item !== data)
  );
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Selected Options:", firstOne);
  };
  return (
    <div>
      <ReviewProgressBar percent={75} />
      <Container
        className="container-seven d-flex justify-content-center "
        style={{ marginTop: "20px" }}
      >
        <Row className="seven-review-row">
          <h1 className="review-four-head" style={{ marginTop: "8%" }}>
            Apply all that apply for
            <span style={{ color: "#ee2c5b" }}> {companyName}</span>’s
            workplace.
          </h1>
          <h5 className="review-four-head-h5" style={{ marginBottom: "3%" }}>
            Select all that apply.
          </h5>
          <Form onSubmit={handleSubmit}>
            <Col md={5}>
              <Form.Control
                className="search-features py-4"
                onClick={() => setshowFirstOne(!showFirstOne)}
                type="text"
                placeholder="Search features"
                onKeyPress={function(e) {
                  if (e.key === "Enter") {
                    // Call your search function here
                    handleSearch(e.target.value); // You need to define the handleSearch function
                  }
                }}
              />
              {showFirstOne && (
                <div className="review-seven-options">
                  {optionsOne.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={option}
                      id={`option-${index}`}
                      checked={firstOne.includes(option)}
                      onChange={() => handleFirstCheckboxChange(option)}
                    />
                  ))}
                </div>
              )}
            </Col>
            <Col md={3} className="d-flex justify-content-center">
              {firstOne[0] && 
              firstOne.map((data,index)=>(
                <div className="Seven-selcted-key mx-2" key={index}>{data}
                <button className="btn btn-close" onClick={()=>handleFirstClose(data)}></button>
                </div>
              ))

              }
            </Col>
            <Button
              type="submit"
              className="button-review-four review-four-sub mt-5"
            >
              Next
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default SeventhPage;
