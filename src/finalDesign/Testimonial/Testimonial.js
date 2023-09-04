import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import pic from "./18.80328ac61c501e8b10f2.png";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Container className='Testimonial-container'>
                <Container
                    style={{
                        height: "70vh",
                        backgroundColor: "pink",
                        alignItems: "center",
                        borderRadius: "1.5rem",
                        padding: "5%"
                    }}
                    className="rect">
                    <Row className="align-items-center">
                        <Col md={4} style={{ marginLeft: "3%" }}>
                            <h3 className="zeld"> Our Success Stories</h3>
                            <h1 className="head">Why Women Love FindHer</h1>
                        </Col>
                        <Col md={6} style={{ marginLeft: "8%" }}>
                            <Slider {...settings}>
                                {/* Testimonial 1 */}
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe"
                                        position="Marketing Manager"
                                        image={pic}
                                    />
                                </div>
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe"
                                        position="Marketing Manager"
                                        image={pic}
                                    />
                                </div>
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe"
                                        position="Marketing Manager"
                                        image={pic}
                                    />
                                </div>
                                {/* Add more testimonials as needed */}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

// ... (rest of your code remains unchanged)


const TestimonialCard = ({ testimonial, description, name, position, image }) => {
    return (
        <div className="rectangle"
             style={{
                 width: "100%", height: "auto",
                 paddingLeft: "15%",
                 paddingRight: "15%",
                 paddingTop: "10%",
                 paddingBottom: "10%"
             }}>
            <div className="card-body">
                <h3 className="card-text" style={{ marginBottom: "8%" }}>{testimonial}</h3>
                <p style={{ marginBottom: "3%" }} className="card-text">{description}</p>
                <Row className="align-items-center align no-gutter" style={{ marginTop: "8%" }}>
                    <Col md={4} style={{ marginLeft: "-4%" }}>
                        <img src={image} className="img-test"  alt="test"/>
                    </Col>
                    <Col md={8}>
                        <p className="card-text"><strong>{name}</strong> - {position}</p>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default TestimonialSection;
