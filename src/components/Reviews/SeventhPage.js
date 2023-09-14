import React, { useState } from "react";
import "./SeventhPage.css";
import ReviewProgressBar from "./ReviewProgressBar";
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SeventhPage() {

  const navigate = useNavigate(); 

  const [firstOne, setFirstOne] = useState([]);
  const [setTwo, setsetTwo] = useState([]);

  const [showFirstOne, setshowFirstOne] = useState(false);
  const [setSecondShow, setsetSecondShow] = useState(false);

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

  const AddFirstOne = (data) => {
    setFirstOne((prevOptions) => [...prevOptions, data]);
  }
  
  const handleSecondCheckboxChange = (option) => {
    console.log("Checkbox clicked:", option);

    if (setTwo.includes(option)) {
      setsetTwo((prevOptions) =>
        prevOptions.filter((item) => item !== option)
      );
    } else {
      setsetTwo((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleSecondClose = (data) => {
    setsetTwo((prevOptions) =>
    prevOptions.filter((item) => item !== data)
  );
  }

  const AddSecondOne = (data) => {
    setsetTwo((prevOptions) => [...prevOptions, data]);
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
            <Row>
            <Col md={6}>
              <Form.Control
               className={`search-features py-4 ${showFirstOne ? 'search-features-active' : 'class-when-false'}`}
                onClick={() => setshowFirstOne(!showFirstOne)}
                type="text"
                placeholder="Search features"
                onKeyDown={function(e) {
                  if (e.key === "Enter") {
                    AddFirstOne(e.target.value); 
                  }
                }}
              />
              {showFirstOne && (
                <div className="review-seven-options review-seven-custom-checkbox">
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
            {showFirstOne && ( <Col md={6} className="d-flex flex-wrap align-content-start">
              {firstOne[0] && 
              firstOne.map((data,index)=>(
                <div className="Seven-selcted-key d-flex justify-content-center mx-2 my-3 px-3 py-2" key={index}><p className="m-0">{data}</p>
                <button className="btn btn-close ms-4" onClick={()=>handleFirstClose(data)}></button>
                </div>
              ))
              }
            </Col>
             )}
            {!showFirstOne && (<Col md={12} className="d-flex justify-content-start my-3 flex-wrap">
              {firstOne[0] && 
              firstOne.map((data,index)=>(
                <div className="Seven-selcted-key d-flex justify-content-center mx-2 my-3 px-3 py-2" key={index}><p className="m-0">{data}</p>
                <button className="btn btn-close ms-4" onClick={()=>handleFirstClose(data)}></button>
                </div>
              ))
              }
            </Col>
             )}
            </Row>
            <Row>
            <Col md={6} className="mt-5">
              <Form.Control
               className={`search-features py-4 ${setSecondShow ? 'search-features-active' : 'class-when-false'}`}
                onClick={() => setsetSecondShow(!setSecondShow)}
                type="text"
                placeholder="Search features"
                onKeyDown={function(e) {
                  if (e.key === "Enter") {
                    AddSecondOne(e.target.value); 
                  }
                }}
              />
              {setSecondShow && (
                <div className="review-seven-options review-seven-custom-checkbox">
                  {optionsTwo.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={option}
                      id={`option-${index}`}
                      checked={setTwo.includes(option)}
                      onChange={() => handleSecondCheckboxChange(option)}
                    />
                  ))}
                </div>
              )}
            </Col>
            {setSecondShow && (
            <Col md={6} className="d-flex flex-wrap align-content-start mt-5">
              {setTwo[0] && 
              setTwo.map((data,index)=>(
                <div className="Seven-selcted-key d-flex justify-content-center mx-2 my-3 px-3 py-2" key={index}><p className="m-0">{data}</p>
                <button className="btn btn-close ms-4" onClick={()=>handleSecondClose(data)}></button>
                </div>
              ))
              }
            </Col>
              )}
            {!setSecondShow && (
            <Col md={12} className="d-flex justify-content-start my-3 flex-wrap">
              {setTwo[0] && 
              setTwo.map((data,index)=>(
                <div className="Seven-selcted-key d-flex justify-content-center mx-2 my-3 px-3 py-2" key={index}><p className="m-0">{data}</p>
                <button className="btn btn-close ms-4" onClick={()=>handleSecondClose(data)}></button>
                </div>
              ))
              }
            </Col>
              )}
            </Row>
            <Button
              type="submit"
              className="button-review-four review-four-sub mt-5"
            >
              Next
            </Button>
            <button className="right-review-arrow" type="submit">
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
          <button className="left-review-arrow" 
          onClick={()=>navigate('/reviews_four')}
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
        </Row>
      </Container>
    </div>
  );
}

export default SeventhPage;
