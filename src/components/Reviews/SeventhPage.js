import React, { useState } from "react";
import "./SeventhPage.css";
import ReviewProgressBar from "./ReviewProgressBar";
import {Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import { usePageTimeTracker } from "../../ReusableFunctions/usePageTimeTracker";
import { useCsrfToken } from '../../CsrfTokenProvider';

function SeventhPage() {
  const fourthPageTime= usePageTimeTracker();
  const navigate = useNavigate(); 

  const csrfToken = useCsrfToken();

  const [firstOne, setFirstOne] = useState([]);
  const [setTwo, setsetTwo] = useState([]);

  const [showFirstOne, setshowFirstOne] = useState(false);
  const [setSecondShow, setsetSecondShow] = useState(false);

  const [filteredFirstOptions, setFilteredFirstOptions] = useState();
  const [filteredSecondOptions, setFilteredSecondOptions] = useState();

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



const handleFirstInputChange = (e) => {
  e.preventDefault();
  console.log(handleFirstInputChange)
  setshowFirstOne(true);
  const filtered = optionsOne.filter((option) =>
    option.toLowerCase().includes(e.target.value.toLowerCase())
  );

  setFilteredFirstOptions(filtered);
};

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

  const AddFirstOne = (e) => {
    e.preventDefault();
    setFirstOne((prevOptions) => [...prevOptions, e.target.value]);
  };
  
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

  const AddSecondOne = (e) => {
    e.preventDefault();
    setsetTwo((prevOptions) => [...prevOptions, e.target.value]);
  }

  const handleSecondInputChange = (e) => {
    e.preventDefault();
    setsetSecondShow(true)
    const filtered = optionsTwo.filter((option) =>
      option.toLowerCase().includes(e.target.value.toLowerCase())
    );
  
    setFilteredSecondOptions(filtered);
  };
  const [addInfo,setAddinfo]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log("Selected firstOne:", firstOne);
    console.log("Selected SecondOne:", setTwo);
    const submitFeatures = async () => {
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
      const features = {
        firstOne,
        setTwo,
        addInfo
      };

      try {
        // Make an asynchronous request to the backend API
        const response = await fetch(
          "https://findher-backend.onrender.com/updateFeatures",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Assuming your token is stored in local storage
              "X-CSRF-Token" : csrfToken,
            },
            credentials: "include", // Include this line
            body: JSON.stringify({ reviewId, features,fourthPageTime }),
          }
        );

        // Handle response
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          console.log("She works!!");

          // Navigate to the next page
          navigate("/successUser");
        } else {
          // Handle error
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };
    submitFeatures();
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
            <Col md={6} className="sevCont">
            <div className="seven-review-input-with-icon">
              <Form.Control
               className={`search-features py-4 ${showFirstOne ? 'search-features-active' : ''}`}
                type="text"
                placeholder="Search features"
                onClick={() => {setshowFirstOne(!showFirstOne)
                  setFilteredFirstOptions(optionsOne)
                }}
                onKeyDown={function(e) {
                  if (e.key === "Enter") {
                    AddFirstOne(e); 
                  }
                }}
                onChange={(e) => handleFirstInputChange(e)}
              />
                  <IoIosArrowDown className="seven-review-dropdown-icon" style={{ zIndex: 2 }}
                />
                </div>
              {showFirstOne && (
                <div className="review-seven-options review-seven-custom-checkbox">
                  {filteredFirstOptions.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={option}
                      id={`optionOne-${index}`}
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
            <Col md={6} className="mt-5 sevCont ">
            <div className="seven-review-input-with-icon">
              <Form.Control
               className={`search-features py-4 ${setSecondShow ? 'search-features-active' : ''}`}
                onClick={() => {setsetSecondShow(!setSecondShow)
                  setFilteredSecondOptions(optionsTwo)
                }}
                onChange={(e) => handleSecondInputChange(e)}
                type="text"
                placeholder="Search features"
                onKeyDown={function(e) {
                  if (e.key === "Enter") {
                    AddSecondOne(e); 
                  }
                }}
              />
              <IoIosArrowDown className="seven-review-dropdown-icon" style={{ zIndex: 2 }}
                />
              </div>
              {setSecondShow && (
                <div className="review-seven-options review-seven-custom-checkbox">
                  {filteredSecondOptions.map((option, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={option}
                      id={`optionTwo-${index}`}
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
            <Col md={12} className="addInfoSec">
              <p>Is there anything else you'd like us to know?</p>
                <Form.Control
                className="addInfo"
                  name="addInfo" // Added name attribute
                  type="text"
                  value={addInfo}
                  onChange={(e)=>setAddinfo(e.target.value)}
                />
            </Col>
            <Button
              type="submit"
              className="button-review-four review-four-sub mt-5"
            >
              Next
            </Button>
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
