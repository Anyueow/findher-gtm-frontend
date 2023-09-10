import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./hero.css";

function Hero() {
    return (
        <section className="hero-section d-flex justify-content-center align-items-center" >
            <Container className="content-hero hero-container" >
                <Row className="">
                    <Col className="heroInner">
                    {/* h-100 ensures the row takes the full height of its parent */}
                        <h1 className=" mt-0 mb-4 hero-h1 ">Information <span className="hero-header-span">   <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="auto" viewBox="0 0 284 23">
                            <path
                                d="M 3 3 L 280.663 3 C 269.449 3 258.349 3.9 247.279 4.764 C 221.349 6.787 195.529 8.92 169.786 11.556 C 151.278 13.451 132.755 15.328 114.19 17.061 C 113.357 17.139 90.773 19.35 90.951 19.635 C 91.634 20.727 116.442 19.025 118.838 18.968 C 135.096 18.578 151.406 18.638 167.64 18.014"
                                stroke="var(--token-9d85a53d-218a-49d3-a122-1f7b560ca535, rgb(255, 213, 90))"
                                stroke-width="5" stroke-linecap="round" fill="transparent" opacity="1" pathLength="1"
                                stroke-dashoffset="0px" stroke-dasharray="1px 1px">
                            </path>
                        </svg></span> You Need to Find The Best Jobs For You</h1>
                        <h4 className=" hero-h4">
                            With 10,000+ ratings, reviews, and overviews on Indian workplaces,
                            you can learn what it’s like to work at a company directly from the women who have been there.
                        </h4>
                        <div className="my-5" style={{height:"30px"}}>
                        <Button className="hero-button">Join the Waitlist!</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </section>
    );
}

export default Hero;
