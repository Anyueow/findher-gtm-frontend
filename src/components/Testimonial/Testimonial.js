import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Col, Container, Row } from "react-bootstrap";
import image1 from "./images/17.png";
import image2 from "./images/18.png";
import image3 from "./images/19.png";
import image4 from "./images/20.png";
import image5 from "./images/21.png";
import "./testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Navigation } from "swiper";

const testimonials = [
  {
    name: "Sneha M.",

    message:
      "Findher has been a game-changer in my job search. It gave me insights I didn't " +
      "even know I needed and connected me with a job that's a perfect fit. Highly recommend!",
    image: image1,
  },
  {
    name: "Radhika S.",
    message:
      "As a working mom, finding the right job seemed overwhelming. But Findher's " +
      "personalized matches and support made the process seamless. I'm so grateful!",
    image: image2,
  },
  {
    name: "Pooja K.",

    message:
      "I was searching for a platform that truly understood the challenges women like me " +
      "face in their careers. Their focus on my specific goals made all the difference",
    image: image3,
  },
  {
    name: "Radhika S.",
    message:
      "As a working mom, finding the right job seemed overwhelming. But Findher's " +
      "personalized matches and support made the process seamless. I'm so grateful!",
    image: image4,
  },
  {
    name: "Pooja K.",

    message:
      "I was searching for a platform that truly understood the challenges women like me " +
      "face in their careers. Their focus on my specific goals made all the difference",
    image: image5,
  },

  // Add more testimonials as needed
];

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="center-contents">
        <h1 className="test-head test-head-testimonial my-5">
          What these women have to say about{" "}
          <span className=" text-deco-testimonial">FindHer</span>:
        </h1>
      </div>

      <Container className="">
        <Row className="ms-5 swiper-button-prev-testimonials">
          <button className="arrow-button desktop">
            <AiOutlineLeft className="opalescent-arrow" />
          </button>
        </Row>
        <div className="testimonials-Swiper-container">
          <Swiper
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            loop={false}
            spaceBetween={20} 
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            navigation={{
              nextEl: ".swiper-button-next-testimonials",
              prevEl: ".swiper-button-prev-testimonials",
              clickable: true,
            }}
            breakpoints={{
              780: {
                slidesPerView: 1, // Number of slides per view for screens <= 780px width
              },
              781: {
                slidesPerView: 3, // Number of slides per view for screens > 780px width
              },
            }}
            modules={[Navigation]}
            className="swiper_container"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial">
                  <Row>
                    <Col
                      md={7}
                      xs={7}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h1
                        className="header"
                        style={{ fontSize: "20px", fontWeight: "550" }}
                      >
                        {testimonial.name}
                      </h1>
                    </Col>
                    <Col md={5} xs={5}>
                      <img
                        className="card-img"
                        src={testimonial.image}
                        alt="profile"
                      />
                    </Col>
                  </Row>
                  <p className="cardSub my-5 mx-4">{testimonial.message}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Row className="me-5 swiper-button-next-testimonials">
          <button className="arrow-button desktop">
            <AiOutlineRight className="opalescent-arrow" />
          </button>
        </Row>
      </Container>
      <div className="mobile dot-testimonial-div mt-2 mb-5 pb-5">
        <div
          className={`dot-testimonial mx-2 ${
            currentIndex === 0 ? "active" : ""
          }`}
        ></div>
        <div
          className={`dot-testimonial mx-2 ${
            currentIndex >= 1
              ? currentIndex < testimonials.length - 1
                ? "active"
                : ""
              : ""
          }`}
        ></div>
        <div
          className={`dot-testimonial mx-2 ${
            currentIndex === testimonials.length - 1 ? "active" : "" 
          }`}
        ></div>
      </div>
    </section>
  );
}

export default TestimonialSection;
