import React, { useState, useEffect, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { Col, Container, Row } from "react-bootstrap";
import image1 from "./images/17.png";
import image2 from "./images/18.png";
import image3 from "./images/19.png";
import image4 from "./images/20.png";
import image5 from "./images/21.png";
import "./testimonial.css";

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
    name: "Pooja KA.",

    message:
      "I was searching for a platform that truly understood the challenges women like me " +
      "face in their careers. Their focus on my specific goals made all the difference",
    image: image5,
  },
  // Add more testimonials as needed
];

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Adjust items per page based on window width
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const containerRef = useRef(null);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    // Ignore touch move if there are multiple touches
    if (
      e.touches.length !== 1 ||
      Math.abs(e.touches[0].clientY - dragStartY) > 50
    ) {
      setIsDragging(false);
      return;
    }

    const dragDistance = e.touches[0].clientX - dragStartX;
    const threshold = 150; // Adjust this threshold as needed

    if (dragDistance > threshold) {
      // Swipe from left to right (swipe right)
      setTouchEndX(e.touches[0].clientX); // Set the touch end position
    } else if (dragDistance < -threshold) {
      // Swipe from right to left (swipe left)
      setTouchEndX(e.touches[0].clientX); // Set the touch end position
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const dragDistance = dragStartX - touchEndX; // Calculate the total drag distance
    const threshold = 150; // Adjust this threshold as needed

    if (dragDistance > threshold) {
      // Swipe from right to left (swipe left)
      handleNext();
    } else if (dragDistance < -threshold) {
      // Swipe from left to right (swipe right)
      handlePrev();
    }

    // Clear touch end position
    setTouchEndX(0);
  };

  useEffect(() => {
    const calculateItemsPerPage = () => {
      return window.innerWidth <= 780 ? 1 : 3;
    };

    // Set the initial value of itemsPerPage
    setItemsPerPage(calculateItemsPerPage());

    // Update itemsPerPage when the window width changes
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, testimonials.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  return (
    <section>
      <Container className=" jus center-contents">
        <div>
          <h1 className="test-head test-head-testimonial">
            {" "}
            What these women have to say about{" "}
            <span className="headspan text-deco"> FindHer</span> :
          </h1>
        </div>
      </Container>

      <Container className="mar">
        <button className="arrow-button desktop" onClick={handlePrev}>
          <AiOutlineLeft className="opalescent-arrow" />
        </button>
        <Row
          className="center-contents"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          ref={containerRef}
        >
          {visibleTestimonials.map((testimonial) => (
            <Col md={3} className="testimonial center-contents">
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
                <p className="cardSub mt-3">{testimonial.message}</p>
                <div className="mobile dot-testimonial-div">
                  <div className={`dot-testimonial mx-2 ${currentIndex ===0? "active":""}`}></div>
                  <div className={`dot-testimonial mx-2 ${currentIndex >= 1? (currentIndex < testimonials.length-1? "active":""):""}`}></div>
                  <div className={`dot-testimonial mx-2 ${currentIndex ===testimonials.length-1? "active":""}`}></div>
                </div>
              </Row>
            </Col>
          ))}
        </Row>
        <button className="arrow-button desktop" onClick={handleNext}>
          <AiOutlineRight className="opalescent-arrow" />
        </button>
      </Container>
      {/* ... other components or sections ... */}
    </section>
  );
}

export default TestimonialSection;
