import React from "react";
import "./SectionSix.css";
import { Button, Col, Row } from "react-bootstrap";
import sec6img from "./sec6img.webp";
import img1 from "./images/download.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SectionSix() {

  const navigate = useNavigate();

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
      className="section6 sec-six-container"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Row className="sec6cont sec-six-div">
        <Col className="sec6stuffs sec-six-left">
          <Col className="stuffsInner">
            <Col className="sec6head sec-six-heading">
              <p>Be in the know!</p>
            </Col>
            <Col className="sec6body sec-six-sub" >
              <p>
                Supercharge your job search process with insights and
                information from women who've worked there.
              </p>
            </Col>
            <Button className="AcessButton secbtn exclusive-btn hero-button-six"  onClick={()=>navigate('/reviews_login')}>
              Get Exclusive Access
            </Button>
          </Col>
        </Col>
        <Col className="sec6img sec-six-right">
          <img src={img1} className="sec-six-load" alt="Be in the know" />
          <img src={sec6img} className="sec-six-img2" alt="Be in the know" />
        </Col>
      </Row>
    </motion.div>
  );
}

export default SectionSix;
