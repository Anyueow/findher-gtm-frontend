import React from 'react';
import './SectionOne.css';
import {Button, Col, Row} from "react-bootstrap";
import demo from "./Group 167.webp";
import img1 from "./Artboard 1-2.png";
import img2 from "./Artboard 1 copy.png";
import img3 from "./Artboard 1 copy 2.png";

function SectionOne() {
    return (
        <div className="job-search-section">
            <Row className="justify-content-center">
                <Col className="justify-content-center">
                    <h2>How We Help You</h2>
                    <h3>Redesigning Job Search for Indian Women</h3>
                    <p>It's common for job postings to lack detailed
                        information, leaving you in the dark about a potential employer's compatibility with your needs and aspirations. FindHer offers exclusive and reliable insights into different workplaces, allowing you to make informed decisions about your next career move.

                    </p>
                    <img src={demo} alt="Placeholder 1" />
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={3} className="text-center mx-1 justify-content-center">
                    <div className="line mb-n3"></div>
                    <div className="rectangle shadow d-flex flex-column align-items-center justify-content-center">
                        <img src={img1} alt="in Rectangle" className="img-in-rectangle" />
                        <h4>The Whole Picture</h4>
                    </div>
                </Col>
                <Col md={3} className="text-center mx-1 justify-content-center">
                    <div className="line mb-n3"></div>
                    <div className="rectangle shadow d-flex flex-column align-items-center justify-content-center">
                        <img src={img2} alt="in Rectangle" className="img-in-rectangle" />
                        <h4>Exclusive insights</h4>
                    </div>
                </Col>
                <Col md={3} className="text-center mx-1 justify-content-center">
                    <div className="line mb-n3"></div>
                    <div className="rectangle shadow d-flex flex-column align-items-center justify-content-center">
                        <img src={img3} alt="in Rectangle" className="img-in-rectangle" />
                        <h4>Personalized For You</h4>
                    </div>
                </Col>

                <p
                style={{marginTop:"5vw", fontSize:"1.1rem",
                width:"60%",
                color:"black"}}>FindHer helps you discover
                    job opportunities that match your skills and experience. We save you time by providing you with all the information you need in one place.
                </p>


            </Row>
            <Button className="JoinButtonS">Join Now</Button>
        </div>
    );
}

export default SectionOne;
