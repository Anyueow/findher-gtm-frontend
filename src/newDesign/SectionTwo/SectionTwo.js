import React from "react";
import "./SectionTwo.css";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

function SectionTwo() {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1, delay: 2 },
  };

  return (
    <motion.div
      className="sec-two-container"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Row className=" blur-border ">
        <Col className=" sec-two-box">
          <h2 className=" sec-two-h2">Why Choose FindHer?</h2>
          <h1 className=" sec-two-h1">
            We are all about helping you find work that works for you.
          </h1>
        </Col>
      </Row>
    </motion.div>
  );
}

export default SectionTwo;
