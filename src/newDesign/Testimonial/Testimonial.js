import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Col, Container, Row} from "react-bootstrap";
import pic from "./18.80328ac61c501e8b10f2.png";
import "./Testimonial.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, {Pagination, Autoplay } from "swiper";
import Slider from "react-slick";
SwiperCore.use([Pagination,Autoplay]);

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "100px", // Adjust the padding value as needed
    // initialSlide: sliderIndex, // Start at the current slide index
    // afterChange: (currentSlide) => {
    //   setSliderIndex(currentSlide);
    // },
  };


    return (
        <div style={{overflowX:"hidden"}}> 
            <Container className='Testimonial-container my-5'>
                <Container
                    style={{
                        height: "80vh",
                        backgroundColor: "pink",
                        alignItems: "center",
                        borderRadius: "1.5rem",
                        padding: "5%"
                    }}
                    className="rect">
                    <Row className="align-items-center  overflow-hidden mt-4">
                        <Col md={4} style={{ marginLeft: "3%" }}>
                            <h3 className="zeld"> Our Success Stories</h3>
                            <h1 className="head head-testimonial">Why Women Love FindHer</h1>
                        </Col>
                        <Col md={6} style={{ marginLeft: "8%" }} className='TestimonialCardDiv'>
                            <Slider {...settings}>
                                {/* Testimonial 1 */}
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe1"
                                        position="Marketing Manager"
                                        image={pic}
                                    />
                                </div>
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe2"
                                        position="Marketing Manager"
                                        image={pic}
                                    />
                                </div>
                                <div>
                                    <TestimonialCard
                                        testimonial="'FindHer helped me land my dream job'"
                                        description="FindHer provided me with valuable insights and information that helped me find the job of my dreams. I couldn't have done it without them."
                                        name="Jane Doe3"
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

const TestimonialCard = ({
  testimonial,
  description,
  name,
}) => {
  return (
    <div className="testimonial-rectangle"
    style={{
        width: "101%", height: "48vh",
        textAlign: "left" 
    }}>
   <div className="card-body">
   <p className="card-text testimonial-name">{name}</p>
       <p className="card-text testimonial-sub" style={{ marginBottom: "8%" }}>{testimonial}</p>
       <p style={{ marginBottom: "3%" }} className="card-text testimonial-description">{description}</p>
       <Row className="align-items-center align no-gutter" style={{ marginTop: "8%" }}>
       </Row>
   </div>
</div>
  );
};

export default TestimonialSection;
