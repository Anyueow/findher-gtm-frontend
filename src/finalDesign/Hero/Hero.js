import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";

function Hero() {
    return (
        <section style={{height:"120vh"}} className="hero-section">
            <div className="gradient-section">
            <Container className="content">
                <Row className="justify-content-center">
                    <Col className="justify-content-center">
                    {/* h-100 ensures the row takes the full height of its parent */}

                        <h1 className="header">Information You Need to Find The Best Jobs For You</h1>
                        <h4 className="sub hero-sub">
                            With 10,000+ ratings, reviews, and overviews on Indian workplaces,
                            you can learn what it’s like to work at a company directly from the women who have been there.
                        </h4>
                        <Button className="JoinButtonH"
                        style={{width:"18%",marginTop:"0px"}}>Join the Waitlist!</Button>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
}

export default Hero;
