import React from 'react';
import './SectionTwo.css';
import {Col, Row} from "react-bootstrap";


function SectionTwo() {
    return (
        <div className="job-search-section sec-two-container" style={{overflowX:"hidden"}}>
            <Row className="justify-content-center">
                <Col className="justify-content-center">
                    <h2 className='sec-two-head font-weight-bold'>Why Choose FindHer?
                    </h2>
                    <h1 className='sec-two-sub newMsg1'>We are all about helping you find work that works for you.</h1>

                </Col>
            </Row>

        </div>
    );
}

export default SectionTwo;
