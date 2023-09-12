import React from "react";
import "./SectionFour.css";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

function SectionFour() {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1 },
  };

  return (
    <div
      className="job-search-section sec-two-container"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Row className="justify-content-center"
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
      >
        <Col className="justify-content-center">
          <motion.h2 className="sec-two-head succStory"
           variants={containerVariants}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}
          >OUR SUCESS STORIES</motion.h2>
          <motion.h1 className="sec-two-sub newMsg1"
           variants={containerVariants}
           initial="initial"
           whileInView="animate"
           viewport={{
             once: true,
           }}
          >Why women love FindHer.</motion.h1>
        </Col>
      </Row>
    </div>
  );
}

export default SectionFour;
