import React, { useState , useEffect, useRef} from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {Col, Container, Row} from "react-bootstrap";
import image1 from "./images/17.png";
import image2 from "./images/18.png";
import image3 from "./images/19.png";
import image4 from "./images/20.png";
import image5 from "./images/21.png";
import "./testimonial.css";


const testimonials = [
    {
        name: "Sneha M.",

        message: "Findher has been a game-changer in my job search. It gave me insights I didn't "
                 + "even know I needed and connected me with a job that's a perfect fit. Highly recommend!",
        image: image1,
    },
    {
        name: "Radhika S.",
        message: "As a working mom, finding the right job seemed overwhelming. But Findher's "
                 + "personalized matches and support made the process seamless. I'm so grateful!",
        image: image2,
    },
    {
        name: "Pooja K.",

        message: "I was searching for a platform that truly understood the challenges women like me "
                 + "face in their careers. Their focus on my specific goals made all the difference",
        image: image3,
    },
    {
        name: "Radhika S.",
        message: "As a working mom, finding the right job seemed overwhelming. But Findher's "
                 + "personalized matches and support made the process seamless. I'm so grateful!",
        image: image4,
    },
    {
        name: "Pooja K.",

        message: "I was searching for a platform that truly understood the challenges women like me "
                 + "face in their careers. Their focus on my specific goals made all the difference",
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
    const containerRef = useRef(null);

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setDragStartX(e.touches[0].clientX);
      };
    
      const handleTouchMove = (e) => {
        if (!isDragging) return;
    
        const dragDistance = e.touches[0].clientX - dragStartX;
        containerRef.current.scrollLeft = currentIndex * 300 - dragDistance;
      };
    
      const handleTouchEnd = () => {
        setIsDragging(false);
        handleNext()
      };

      useEffect(() => {
        containerRef.current.scrollLeft = currentIndex * 300;
      }, [currentIndex]);

    useEffect(()=>{
        const calculateItemsPerPage = () => {
            return window.innerWidth <= 780 ? 1 : 3;
        };
        
        // Set the initial value of itemsPerPage
        setItemsPerPage(calculateItemsPerPage());

        // Update itemsPerPage when the window width changes
        const handleResize = () => {
            setItemsPerPage(calculateItemsPerPage());
        };
       
        window.addEventListener('resize', handleResize);
    },[])

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, testimonials.length - itemsPerPage));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

    return (
      <section>
        <Container className=" jus center-contents">
          <div>
            <h1 className="test-head">
              {" "}
              What these women have to say about{" "}
              <span className="headspan"> FindHer</span> :
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
                  <img
                    className="card-img"
                    src={testimonial.image}
                    alt="profile"
                  />
                  <h1 className="header">{testimonial.name}</h1>

                  <h1 className="Quotes">“</h1>
                  <p className="cardSub">{testimonial.message}</p>
                  <h1 className="Quotes"> ”</h1>
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
