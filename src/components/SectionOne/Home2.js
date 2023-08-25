import React from "react";
import './sectionOne.css';
import {Col, Row} from "react-bootstrap"; // Importing the custom CSS
import image from "./questions.png";
import imageMobile from "./question women.png";
function Home2() {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <Row className="center-contents">
                    <Col md={6} xs="auto" className="ques-img-container">
                        <img src={image} className="ques-img desktop"
                        alt = "confused"/>
                         <img src={imageMobile} className="ques-img mobile"
                        alt = "confused"/>
                    </Col>
                    <Col md={6} xs={"auto"}>
                <h1 className="main-name-sect">

                        Job postings
                        can be quite vague, and it's hard to figure out if a workplace
                        aligns with your <span className="text-wrapper"> values and needs.
</span>
                </h1>
                <h1 className="main-sub">
             Sometimes, you’re left with
                    <strong style={{color:"#ee2c5b"}}> more questions </strong>
                    than answers!
                </h1>
                    </Col>

                </Row>
            </div>
        </div>
    );
}

export default Home2;
