import React, {useState} from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './businesses.css';
import img1 from "./prototype/Proto1.png";
import img2 from "./prototype/proto2.png";
import img3 from "./prototype/proto3.png";
import FaqSectionBusiness from "./FaqsSection/FaqSectionBusiness";
import PopupForm from "./Forms/businessforms";
import "./background.css";
import { ToastContainer } from "react-toastify";
import {Link} from "react-router-dom";


document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the parallax effect
    function parallaxEffect() {
        // This could be any container or the window itself
        const scrollTop = window.pageYOffset;

        // Select all circles; you might need a more specific selector
        const circles = document.querySelectorAll('.circle');

        // Apply a parallax effect to each circle
        circles.forEach((circle, index) => {
            // The speed factor will affect how fast the circles move
            // You can set different speeds for each circle to enhance the effect
            const speed = index % 2 === 0 ? 2 : 1.5;

            const yPos = -(scrollTop / speed);

            // Apply the transformation to the circle
            circle.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    }

    // Listen for the scroll event
    window.addEventListener('scroll', parallaxEffect);
});

const Box = () => {

    const [isPopupVisible, setPopupVisible] = useState(false);



    return (
        <>
        <Container fluid className="box-container">
            <Col className="boxedup content-inside-box">
                <Row className="info-section-forBusiness">
                    <h1 className="title">
                        Attract, Hire & Retain
                        <br className="mobile-show"/>
                        Top Female Talent</h1>
                </Row><Row className="info-section-forBusiness">
                    <hr className="line-separator" />
            </Row> <Row className="info-section-forBusiness">
                    <p>
                        Diversity isn’t just beneficial - it’s vital.
                        <br className="mobile-hide"/>

                        FindHer’s AI-driven platform helps you unlock access to India's top
                        <br className="mobile-hide"/>
                        female professionals and build a better future for your organization.
                    </p>
                    <Button
                        onClick={() => {
                            console.log("Button clicked!");
                            setPopupVisible(true);
                        }}
                        variant="danger" className="join-btn">Join Now</Button>
                </Row>
            </Col>
        </Container>
        <Container className="forafter">
            <Col>
                <Row><h3 className="toggle-forbusiness"> What We Do For You  ▼</h3>
                </Row>
                <Row>
                <Col md={1}>
                                <div className="line-vert-separator-forbusiness"></div>
                            </Col>
                    <Col className="contentrow">
                    
                        <Row className="section-forbusiness">
                           
                            <Col md={4} className="contentcoltext">
                            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
                                <h2 className="titlehead-forbusiness">Elevate Your
                                    Talent Brand</h2>
                                <Button
                                    onClick={() => {
                                        console.log("Button clicked!");
                                        setPopupVisible(true);
                                    }}
                                    variant="danger"
                                    className="learnmore-forbusiness isDesktop">Learn How</Button>
                            </Col>

                            <Col md={7} className="contentcol">

                                <Image src={img1} className="proto" alt="description"/>
                                <p className="paratext">
                                    In today's fierce job market, your talent brand defines you.
                                    With FindHer, you can effectively communicate your value to
                                    potential female employees, positioning you as a top choice
                                    and ensuring you secure the industry's best.
                                </p>
                            </Col>
                            <Button
                                    onClick={() => {
                                        console.log("Button clicked!");
                                        setPopupVisible(true);
                                    }}
                                    variant="danger"
                                    className="learnmore-forbusiness isMobile">Learn How</Button>
                        </Row>

                        <Row className="section-forbusiness">
                            {/* <Col md={1}>
                                <div className="line-vert-separator-forbusiness"></div>
                            </Col> */}
                            <Col md={4} className="contentcoltext">
                            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
            <div className="circle circle5"></div>
                                <h2 className="titlehead-forbusiness">Find Best-Fit
                                    Matches</h2>
                                <Button  onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isDesktop">Get Access</Button>
                            </Col>

                            <Col md={7} className="contentcol">
                                <Image src={img2} className="proto" alt="description"/>

                                <p className="paratext">Rather than just mass-sending profiles
                                    your way, FindHer uses advanced AI to curate the top female
                                    candidates for your specific roles. We dive into the nuances of
                                    compatibility to provide not just applicants, but perfect fits,
                                    every time.</p>
                            </Col>
                            <Button  onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isMobile">Get Access</Button>
                        </Row>

                        <Row className="section-forbusiness">
                            {/* <Col md={1}>
                                <div className="line-vert-separator-forbusiness"></div>
                            </Col> */}
                            <Col md={4} className="contentcoltext">
                                
                            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
            <div className="circle circle4"></div>
                                <h2 className="titlehead-forbusiness"
                                style={{minWidth:"80%"}}>Optimize Employee Satisfaction</h2>
                                <Button onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isDesktop">Join Now</Button>
                            </Col>

                            <Col md={7} className="contentcol">
                                <Image src={img3} className="proto" alt="description"/>

                                <p className="paratext"> We provide businesses with data-driven
                                    insights on existing female employee experiences,
                                    guiding efficient improvements. The result? Higher retention,
                                    increased productivity, and accelerated growth.</p>
                            </Col>
                            <Button onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isMobile">Join Now</Button>
                        </Row>

                    </Col>

                </Row>
            </Col>
        </Container>
            <Container className="withFAQS">
                <h2 className="titleTwo-forbusiness"> Change the face of work in your organization.
                    <br/> <br/>
                <Link className='text-underline-titleTwo-forbusiness no-underline-link'
                        onClick={() => {
                            console.log("Button clicked!");
                            setPopupVisible(true);}} > Speak with us today.</Link> </h2>
                <FaqSectionBusiness/>
            </Container>

            {/* Popup form */}
            <PopupForm
                isVisible={isPopupVisible}

                onClose={() => setPopupVisible(false)}


            />
            <ToastContainer/>
            </>
    );
};

export default Box;
