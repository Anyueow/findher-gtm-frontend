import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './businesses.css';

const Box = () => {
    return (
        <Container fluid className="box-container">
            <Col className="boxedup">
                <Row className="info-section">
                    <h1 className="title">
                        Attract, Hire & Retain Top Female Talent</h1>
                </Row><Row className="info-section">
                    <hr className="line-separator" />
            </Row> <Row className="info-section">
                    <p className="description">
                        Diversity isn’t just beneficial - it’s vital.
                        <br />
                        FindHer’s AI-driven platform helps you unlock access to India's top
                        <br /> female professionals and build a better future for your organization.
                    </p>
                    <Button variant="danger" className="join-btn">Join Now</Button>
                </Row>
            </Col>
        </Container>
    );
};

export default Box;
