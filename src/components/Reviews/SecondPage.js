import React, { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form, Row, Col, Toast } from "react-bootstrap";
import "./reviewStyles.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReviewProgressBar from "./ReviewProgressBar";
import axios from "axios";
import TextField from '@mui/material/TextField';
// import debounce from 'lodash/debounce';
// require('dotenv').config();

import Autocomplete from "@mui/material/Autocomplete";
import GoogleMapsLoader from "./GoogleMapsLoader";

export const SecondPage = () => {

  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companies, setCompany] = useState("");
  const [department, setDepartment] = useState("");
  const [employment, setEmployment] = useState("");
  const [industry, setIndustry] = useState("");
  const [Loc, setLoc] = useState("");
  const [title, setTitle] = useState("");
  const [Com,setCom]=useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const [showToast, setShowToast] = useState(true);

  const [CompanyList, setCompanyList] = useState([]);

  const navigate = useNavigate();

  const getCompanies = async (cname) => {
    const apikey=process.env.REACT_APP_xrapidKey
    const hostkey=process.env.REACT_APP_xrapidHost
    const options = {
      method: "GET",
      url: "https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes",
      params: {
        query: { cname },
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Key": `${apikey}`,
        "X-RapidAPI-Host": `${hostkey}`,
      },
    };

    try {
      const response = await axios.request(options);
      if (response.status === 200) {
        // Handle the response data here, for example:
        const companyData = response.data;
        // console.log(companyData);

        // You can return the data or perform additional actions here
        return companyData;
      } else {
        // Handle other status codes if needed
        console.error(`Request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

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
        companyName: Com,
        industry: industry,
        companyOffice: Loc,
        positionTitle: title,
        employementStatus: employment,
        department: department,
        currworking: currentlyWorking,
        startDate: startDate.toISOString().split("T")[0], // Convert the date to a string in the format YYYY-MM-DD
        endDate: currentlyWorking ? null : endDate.toISOString().split("T")[0], // Convert the date to a string in the format YYYY-MM-DD
      };

      try {
        const response = await fetch(
          // "https://findher-backend.onrender.com/protectedRoute/createReview",
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
          // console.log(data);
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

  const employmentStatus = [
    "Full Time",
    "Part Time",
    "Contract",
    "Unpaid Internship",
    "Paid Internship",
  ];
  const [isFormValid, setisFormValid] = useState({
    message: "",
    for: "",
    status: false,
  });

  // const [query, setState] = useState("");
  const debounce = (fn, delay) => {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(context, args), delay);
    };
  };
  const apiCall = (val) => setCompany(val);
  const delayQuery = debounce((val) => apiCall(val), 1000);
  const handleCompanyChange = (e) => {
    // if(e.target.value!==null) {
    //   if(e.target.value == 0) return;
    //   setCompanyList([])
    // }
    // else setCompanyList([])
    delayQuery(e.target.value);
  };
  // console.log(Com,"selected company");
  useEffect(() => {
    async function apiCall(params) {
      const data = await getCompanies(companies);
      const temp = data.entities.map((item) => item.identifier.value);
      setCompanyList(temp);
      // console.log(data, "companieslist",companies);
    }
    apiCall();
  }, [companies]);

  const autoCompleteRef = useRef();
 const inputRef = useRef();
//  const options = {....
//  };

const addScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script);
  })
}

const getRestData = () => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    inputRef.current,
   //  options
   );
   autoCompleteRef.current.addListener("place_changed", async function () {
    const place = await autoCompleteRef.current.getPlace();
    setLoc(place.formatted_address)
    // console.log(place.formatted_address);
   });
}

const getScript = async () => {
  await addScript();
  getRestData();
}
 useEffect(() => {
  getScript();  

  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
const [jobTitle, setJobTitle] = useState();
const [jobTitleList, setJobTitleList] = useState([]);

// console.log(jobTitle);
  useEffect(() => {
    const fetchJobTitles = async () => {
      // console.log("hiii");
      try {
        const response = await fetch('https://findher-backend.onrender.com/jobTitleList',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({inputTitle:jobTitle})
        }); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log("dataaaa",data);
        const tmp=data.matchingJobTitles.map(item => item.job_title);
        setJobTitleList(tmp);
      } catch (error) {
        console.error('Error fetching job titles:', error);
      }
    };

    fetchJobTitles();
  }, [jobTitle]);

  //for department
const [dep, setDep] = useState();
const [depList, setDepList] = useState([]);

// console.log(dep);
  useEffect(() => {
    const fetchDep = async () => {
      // console.log("hiii");
      try {
        const response = await fetch('https://findher-backend.onrender.com/jobDepList',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({inputDep:dep})
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log("dataaaa",data);
        const tmp=data.matchingDep.map(item => item.department);
        setDepList(tmp);
      } catch (error) {
        console.error('Error fetching Departments:', error);
      }
    };

    fetchDep();
  }, [dep]);
  // console.log("finalDep",department);
  return (
    <div>
      <GoogleMapsLoader />
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
                  <Autocomplete
                    className="review-second-auto-comp"
                    disablePortal
                    id="combo-box-demo"
                    onChange={(_, v) => setCom(v)}
                    onInputChange={handleCompanyChange}
                    options={CompanyList}
                    sx={{ width: 415 }}
                    renderInput={(params) => (
                      <TextField
                      className="review-second-auto-comp"
                      {...params} />
                    )}
                  />
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
                  {/* <Form.Control
                    style={{ padding: "20px" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  ></Form.Control> */}
                  <Autocomplete
                    className="review-second-auto-comp"
                    disablePortal
                    id="combo-box-demo"
                    freeSolo 
                    onChange={(_, v) => setTitle(v)}
                    onInputChange={(e)=>{
                      setJobTitle(e.target.value)
                      setTitle(e.target.value)
                    }}
                    options={jobTitleList}
                    sx={{ width: 415 }}
                    renderInput={(params) => (
                      <TextField
                      className="review-second-auto-comp"
                      {...params} />
                    )}
                  />
                </Form.Group>
              </Col>
              <Col md={6} xs={12} className="Office-Location">
                <Form.Group>
                  <Form.Label>Location (enter city)</Form.Label>
                  <Form.Control
                    // value={Loc}
                    // onChange={(e) => setLoc(e.target.value)}
                    ref={inputRef}
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
                  <Autocomplete
                    className="review-second-auto-comp"
                    disablePortal
                    id="combo-box-demo"
                    freeSolo 
                    onChange={(_, v) => setDepartment(v)}
                    onInputChange={(e)=>{
                      setDep(e.target.value)
                      setDepartment(e.target.value)
                    }}
                    options={depList}
                    sx={{ width: 415 }}
                    renderInput={(params) => (
                      <TextField
                      className="review-second-auto-comp"
                      {...params} />
                    )}
                  />
                </Form.Group>{" "}
              </Col>
              <Col md={3} xs={6}>
                <Form.Group>
                  <Form.Label className="Office-Location">
                    Start Date
                  </Form.Label>
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
            <Row style={{ marginBottom: "2%" }}>
              <Col md={6} xs={9}>
                <Form.Group>
                  <Form.Label className="Office-Location">
                    Your Employment status
                  </Form.Label>
                  <Form.Select
                    value={employment}
                    onChange={(e) => setEmployment(e.target.value)}
                    required
                  >
                    <option value="">Select one</option>
                    {employmentStatus.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col
                md={4}
                xs={12}
                className="d-flex justify-content-center align-items-center Office-Location"
              >
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
              <div className="d-flex justify-content-center">
                <Button
                  className="button-sub-review"
                  type="submit"
                  style={{ marginTop: "3%", width: "auto" }}
                >
                  Next
                </Button>
              </div>
              <Link to="/reviews_two" className="nav-link2 review-second-bottom-link d-flex justify-content-center">
                <p> If you haven't worked anywhere before, click here </p>
              </Link>
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
