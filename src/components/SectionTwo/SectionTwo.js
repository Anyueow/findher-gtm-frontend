import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import base from "./Images/maindemo.png";
import mobbase from "./Images/phone des.png";

import "./sectionTwo.css";

function SectTwo() {
    return (
        <section className="section-container">
            <Container fluid className="section-content">
                <Row className="align-items-center full-height">

                    <Col md={5} xs={12} className="text-content">
                        <h1 className="title">
                            <strong>
                                That's why we're building
                                <span className="highlight-text"> FindHer</span>
                            </strong>
                        </h1>
                        <h3 className="description">
                           <span className="emphasis"> So you can be
                               in the know,</span> not in the dark. On our platform
                            you can access exclusive information
                            about workplaces to ensure you're always making the
                             best career decisions.

                        </h3>
                    </Col>

                    <Col md={7} xs={12} className="image-content" style={{marginTop: '-60%'}}>
                        <img src={base} className="display-image desktop" alt="Findher Demo"/>
                        <img src={mobbase} className="display-image mobile" alt="Findher Demo"/>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default SectTwo;
