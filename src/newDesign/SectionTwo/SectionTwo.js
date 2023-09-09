import React from 'react';
import './SectionTwo.css';
import {Col, Row} from "react-bootstrap";


function SectionTwo() {
    return (

        <div className="sec-two-container">
            <Row className=" blur-border ">
                <Col className=" sec-two-box">
                    <h2 className=' sec-two-h2'>Why Choose FindHer?

                    </h2>
                    <h1 className=' sec-two-h1'>We are all about helping you find work that works for you.</h1>

                </Col>
            </Row>

        </div>
    );
}

export default SectionTwo;
