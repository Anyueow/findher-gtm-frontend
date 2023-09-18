import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./hero.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section d-flex justify-content-center align-items-center">
      <Container className="content-hero hero-container">
        <Row className="">
          <Col className="heroInner">
            {/* h-100 ensures the row takes the full height of its parent */}
            <motion.h1
              className=" mt-0 mb-4 hero-h1 "
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Information Women Need to Find the Best Jobs For Them
            </motion.h1>
            <motion.span className="hero-header-span"
             initial={{ opacity: 0, x: -100 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="auto"
                viewBox="0 0 284 23"
              >
                <path
                  d="M 3 3 L 280.663 3 C 269.449 3 258.349 3.9 247.279 4.764 C 221.349 6.787 195.529 8.92 169.786 11.556 C 151.278 13.451 132.755 15.328 114.19 17.061 C 113.357 17.139 90.773 19.35 90.951 19.635 C 91.634 20.727 116.442 19.025 118.838 18.968 C 135.096 18.578 151.406 18.638 167.64 18.014"
                  stroke="hsl(342, 100%, 50%)"
                  stroke-width="5"
                  stroke-linecap="round"
                  fill="transparent"
                  opacity="1"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></path>
              </svg>
            </motion.span>
            <motion.h4
              className=" hero-h4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              with 10,000+ ratings, reviews, and overviews on Indian workplaces,
              you can learn what it’s like to work at a company directly from
              the women who have been there.
            </motion.h4>
            <div className="my-4" style={{ height: "30px" }}>
              <motion.button
                initial={{ opacity: 0, y: -100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0,
                    delay: 0.2,
                  },
                }}
                onClick={()=>navigate('/reviews_login')}
                className="JoinButton-hero"
              >
                Join the Waitlist
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
