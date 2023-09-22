import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import "./reviewStyles.css";
// import NavbarContext from "../NavbarContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FirstPage = () => {
    // const navbarHeight = React.useContext(NavbarContext);

    const [user, setUser] = useState({
                                         email: "",
                                         phoneNumber: "",
                                         password: "",
                                         firstName:"",
                                         lastName:""
,                                     });

    const [formErrors, setFormErrors] = useState({
                                                     email: false,
                                                     phoneNumber: false,
                                                     password: false,
                                                     firstName:false,
                                                     lastName:false
                                                 });

    const [isOtp,setisOtp]= useState({
        status:false,
        value:'',
        isError:false,
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleClick = () => {
        navigate("/");
    };

    const handleUserdetailsSubmit = async (e) => {
        e.preventDefault();
        const { email, phoneNumber, password, firstName, lastName} = user;
        if (email && phoneNumber && password && firstName && lastName ) {
            try {
                const response = await fetch("https://findher-backend.onrender.com/verify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // Include this line
                    body: JSON.stringify({
                                             email: email,
                                             phoneNumber: phoneNumber,
                                             password: password,
                                             firstName:firstName,
                                             lastName:lastName,
                                         }),
                });
          
    

            console.log("its been sent")



        if (response.ok) {
            
                const data = await response.json();
                setisOtp((prevState) => ({ ...prevState, status: !prevState.status }));
                console.log(data); // Print the response data to the console for debugging purp
            } else {
                 console.log("dammit these errors")
            // Handle the error response
                const data = await response.json();
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                console.error(`Error: ${response.status} ${response.statusText}`);
                console.error(data.message); // Print the error message from the backend

                // Display error messages for duplicate email or phone number
                setFormErrors({
                                  email: data.message === "Email already in use.",
                                  phoneNumber: data.message === "Phone number already in use.",
                                  password: false,
                              });
            }
        } catch (error) {
            console.log(error)
            console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Stack Trace:", error.stack);
        }
        } else {
            // Update formErrors to show which fields are missing
            setFormErrors({
                              email: !email,
                              phoneNumber: !phoneNumber,
                              password: !password,
                              firstName:!firstName,
                              lastName:!lastName
                          });
        }
        
    };
    
    const handleOTPSubmit = async (e) => {
        e.preventDefault();

        const { email, phoneNumber, password } = user;

        if (email && phoneNumber && password) {
            // const response = await fetch("https://findher-backend.onrender.com/register", 
            const response = await fetch("https://findher-backend.onrender.com/register", 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include this line
                body: JSON.stringify({
                                         email: email,
                                         phoneNumber: phoneNumber,
                                         password: password,
                                         otp: isOtp.value,
                                     }),
            });

            console.log("its been sent")



        if (response.ok) {
            setisOtp((prevState) => ({ ...prevState, status: !prevState.status }));
                const data = await response.json();
                localStorage.setItem("token", data.token);
                console.log(data); // Print the response data to the console for debugging purposes
                navigate("/reviews_one"); // Assuming you have a success page to navigate to
            } else {
                 console.log("dammit these errors")
            // Handle the error response
                const data = await response.json();
                toast.error(data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                console.error(`Error: ${response.status} ${response.statusText}`);
                console.error(data.message); // Print the error message from the backend

                // Display error messages for duplicate email or phone number
                setFormErrors({
                                  email: data.message === "Email already in use.",
                                  phoneNumber: data.message === "Phone number already in use.",
                                  password: false,
                              });
            }
        } else {
            // Update formErrors to show which fields are missing
            setFormErrors({
                              email: !email,
                              phoneNumber: !phoneNumber,
                              password: !password,
                          });
        }
    };
    const isFormValid = user.email && user.phoneNumber && user.password;

    return (
        <section>
            <Container id="reviews" className="sub sub1"
                       style={{ paddingTop: "4%" }}>

                <Row className="ROw center-contents">
                    <Col md={6} className="align-content-center">

                        <div className="design">
                            <Row>
                                <p className="head-name headnm2">
                                    Exclusive information
                                    about workplaces in India
                                </p>
                            </Row>
                            <Row>
                                <p className="sub-name">
                                    ... brought to you by women who
                                    have been there before
                                </p>

                            </Row>
                            <Row>
                                <Col md={7} xs={7} style={{paddingRight:"15px",width:"66%", position: "relative",right: "9%"}}>
                                    <Button className="button-sub first-more-info" onClick={handleClick}> More info </Button>

                                </Col>
                            </Row>
                        </div>
                    </Col>


                    <Col md={6} className="formDes">
                       {!isOtp.status && ( 
                        <>
                       <Row>
                            <h2 className="head-name head-name-review-signin Waitlist" >
                                Join the Waitlist!</h2>
                                <p className="small Waitlistpara">To be the first to access ratings, reviews, and how 10,000+ different workplaces in India support the women working for them</p>
                        </Row><Row>

                        <Form  className="form-wrapper">
                            <Row className="form-grp-name">
                                <Col xs="6"  className="pe-0">
                        <Form.Group className="">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    name="firstName" // Added name attribute
                                    type="text"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            </Col>
                            <Col xs="6" className="pe-0">
                            <Form.Group className="">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    name="lastName" // Added name attribute
                                    type="text"
                                    value={user.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            </Col>
                            </Row>
                            <Form.Group className="form-grp">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email" // Added name attribute
                                    type="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="form-grp">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    name="phoneNumber" // Added name attribute
                                    type="text"
                                    value={user.phoneNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formErrors.phoneNumber && <p className="error-message">Phone Number is required</p>}
                            </Form.Group>
                            <Form.Group className="form-grp">
                                <Form.Label>Create Password</Form.Label>
                                <Form.Control
                                    name="password" // Added name attribute
                                    type="password"
                                    value={user.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                {formErrors.password && <p className="error-message">Password is required</p>}
                            </Form.Group>
                            <Button
                                className="button-sub reviewbtn"
                                disabled={!isFormValid}
                                style={{marginBottom:"3%"}}
                                onClick={handleUserdetailsSubmit}
                            >
                                Send OTP
                            </Button>


                        </Form>
                    </Row>
                        <Link to="/login" className="nav-link2"
                              style={{fontSize:"1rem", color:"#ee2c5b"}}
                        >
                            <p> Log in instead</p>
                        </Link>

                        </> )}
                        {isOtp.status && ( 
                        <>
                       <Row>
                       <h2 className="head-name Waitlist" >
                                Join the Waitlist!</h2>
                                <p className="small Waitlistpara">To be the first to access ratings, reviews, and how 10,000+ different workplaces in India support the women working for them</p>
                         </Row>
                        <Row>

                        <Form onSubmit={handleOTPSubmit} className="form-wrapper">
                            <Form.Group className="form-grp">
                                <Form.Label>Please enter OTP to continue...</Form.Label>
                                <Form.Control
                                    name="otp" // Added name attribute
                                    type="text"
                                    pattern="^[0-9]{6}$"
                                    title="Only number are allowed"
                                    value={isOtp.value}
                                    maxLength={6}
                                    onChange={(e) => setisOtp(prevState => ({ ...prevState, value: e.target.value }))}
                                    required
                                />
                                {isOtp.isError && <p className="error-message">Invalid OTP</p>}
                            </Form.Group>
                            <Button
                                className="button-sub reviewbtn"
                                type="submit"
                                disabled={isOtp.value.length<6}
                                style={{marginBottom:"3%"}}
                            >
                                Submit
                            </Button>


                        </Form>
                    </Row>
                        <Link to="/login" className="nav-link2"
                              style={{fontSize:"1rem", color:"#ee2c5b"}}
                        >
                            <p> Log in instead</p>
                        </Link>

                        </> )}
                    </Col>
                </Row>

            </Container>
            <ToastContainer/>
        </ section>
    );
};

export default FirstPage;