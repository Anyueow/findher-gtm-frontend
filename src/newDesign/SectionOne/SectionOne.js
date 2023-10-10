import React from "react";
import "./SectionOne.css";
import { Button, Col, Row } from "react-bootstrap";
import demo from "./Group 167.webp";
import img1 from "./Artboard 1-2.png";
import img2 from "./Artboard 1 copy.png";
import img3 from "./Artboard 1 copy 2.png";
import img4 from "./Group 181.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function SectionOne() {
  
  const navigate = useNavigate();

  const containerVariants = {
    initial:{
      opacity: 0, 
      y: 100
    },
    animate:{
      opacity:1,
      y:0,
    },
    transition:{duration: 1 }
  };
  return (
    <div className="job-search-section mt-5">
      <Row className="justify-content-center" 
      >
        <Col className="justify-content-center section-one-container">

          <motion.h5 className=" font-weight-bold howwecan sec-one-h5"
               variants={containerVariants}
               initial="initial"
              whileInView="animate"
              viewport ={{
                once:true,
              }}
          >How We Help You</motion.h5>
          <motion.h3 className="sec-one-sub sec-one-h3"
              variants={containerVariants}
              initial="initial"
             whileInView="animate"
             viewport ={{
               once:true,
             }}
          >

            Redesigning Job Search <br/> for Indian Women
          </motion.h3>
          <motion.p className="sec-one-para"
              variants={containerVariants}
              initial="initial"
             whileInView="animate"
             viewport ={{
               once:true,
             }}
          >
              Women experience the workplace differently,
              but job search currently lacks information on
              factors important to them. FindHer offers exclusive and
              reliable insights into different workplaces so you can make
              informed decisions about your next career move.

          </motion.p>
          <motion.img
            src={demo}
            alt="Placeholder 1"
            className="section-one-first-img desktop"
            variants={containerVariants}
            initial="initial"
           whileInView="animate"
           viewport ={{
             once:true,
           }}
          />
          <motion.img
            src={img4}
            alt="Placeholder 1"
            className="section-one-first-img mobile"
            variants={containerVariants}
            initial="initial"
           whileInView="animate"
           viewport ={{
             once:true,
           }}
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 sec-one-rectangle-row">
        <Col md={3} className="text-center mx-1 justify-content-center desktop">
          <div className="line mb-n3"></div>
          <div className="sec-one-card  card">
            <img src={img1} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">The Whole Picture</h4>
          </div>
        </Col>
        <Col md={3} className="text-center mx-4 justify-content-center desktop">
          <div className="line mb-n3"></div>
          <div className=" sec-one-card  d-flex flex-column align-items-center justify-content-center card">
            <img src={img2} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">Exclusive Insights</h4>
          </div>
        </Col>
        <Col md={3} className="text-center mx-1 justify-content-center desktop card-img">
          <div className="line mb-n3"></div>
          <div className=" sec-one-card  d-flex flex-column align-items-center justify-content-center card">
            <img src={img3} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">Personalized For You</h4>
          </div>
        </Col>

        <p
          className="sec-one-last-para"
          style={{
            marginTop: "5vw",
            fontSize: "1.3rem",
            width: "60%",
          }}
        >
          FindHer helps you discover job opportunities that match your skills
          and experience. We save you time by providing you with all the
          information you need in one place.
        </p>
      </Row>
      <div className="my-4 mobBtnsec1" style={{ height: "fit-content" }}>
        <Button className="hero-button"  
        // onClick={()=>navigate('/reviews_login')}
        onClick={(e) => {
          if (e.ctrlKey) {
            window.open('https://www.surveymonkey.com/r/NMD3GRV', '_blank');
          } else {
            window.location.href = 'https://www.surveymonkey.com/r/NMD3GRV';
          }
        }}
        >Sign Me Up</Button>
      </div>
    </div>
  );
}

export default SectionOne;
