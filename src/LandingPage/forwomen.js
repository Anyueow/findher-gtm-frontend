import React, {useState} from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './businesses.css';
import img1 from "./prototype/prototypeOne.png";
import img2 from "./prototype/prototypeTwo.png";
import img3 from "./prototype/prototypeThree.png";
import FaqSection from "./FaqsSection/FaqSection";
import PopupForm from "./Forms/businessforms";
import "./background.css";
import { ToastContainer } from "react-toastify";


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
                    Find Work That Works For You</h1>
                </Row><Row className="info-section-forBusiness">
                    <hr className="line-separator" />
            </Row> <Row className="info-section-forBusiness">
                    <p>
                    Progress isn't just about moving up - it's about fitting right.
                        <br />
                        FindHer’s lets you find relevant information and discover roles at
                        <br /> India's best companies for women. A search tailored just for you.
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
                                <h2 className="titlehead-forbusiness">Unveil Exclusive Company Insights</h2>
                                <Button
                                    onClick={() => {
                                        console.log("Button clicked!");
                                        setPopupVisible(true);
                                    }}
                                    variant="danger"
                                    className="learnmore-forbusiness isDesktop">Get Access</Button>
                            </Col>

                            <Col md={7} className="contentcol">
                                <div className="circle tinycirc1"></div>
                                <div className="circle tinycirc2"></div>
                                <div className="circle tinycirc3"></div>
                                <div className="circle tinycirc4"></div>
                                <Image src={img1} className="proto" alt="description"/>
                                <p className="paratext">Women experience the workplace differently, but job postings lack information on factors important to them. FindHer offers exclusive and reliable insights into different workplaces so you learn what it’s like to work somewhere before you apply - all in one click.</p>
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
                                <h2 className="titlehead-forbusiness">Access Handpicked Job Opportunities</h2>
                                <Button  onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isDesktop">Sign-Up</Button>
                            </Col>

                            <Col md={7} className="contentcol">
                                <Image src={img2} className="proto" alt="description"/>
                                    <div className="circle tinycirc1 tinycirc21"></div>
                                    <div className="circle tinycirc2 tinycirc22"></div>
                                    <div className="circle tinycirc3 tinycirc23"></div>
                                    <div className="circle tinycirc4 tinycirc24"></div>
            <div className="circle circle5"></div>
                                <p className="paratext"> We curate and send you open roles suited to your skills, values, and aspirations, straight into your inbox. Navigate the job market confidently, knowing each opportunity has been meticulously handpicked for you. Find the best fit, faster and smarter.</p>
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
                                style={{minWidth:"80%"}}>Discover Latest Career Information Easily</h2>
                                <Button onClick={() => {
                                    console.log("Button clicked!");
                                    setPopupVisible(true);
                                }}
                                         className="learnmore-forbusiness isDesktop">Join Now</Button>
                            </Col>

                            <Col md={7} className="contentcol">
                                <Image src={img3} className="proto" alt="description"/>
                                    <div className="circle tinycirc1 tinycirc31"></div>
                                    <div className="circle tinycirc2 tinycirc32"></div>
                                    <div className="circle tinycirc3 tinycirc33"></div>
                                    <div className="circle tinycirc4 tinycirc34"></div>
                                <p className="paratext">In a world buzzing with information, it's easy to miss out on what truly matters. With FindHer's social channels and newsletters, we sift through the noise to bring you the most relevant career updates, advice, and company profiles - updated daily.</p>
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
                <h2 className="titleTwo-forbusiness"> We’re not just rooting for your success, we’re making it happen. {" "}
                <span className='text-underline-titleTwo-forbusiness'>Join Us.</span> </h2>
                <FaqSection/>
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