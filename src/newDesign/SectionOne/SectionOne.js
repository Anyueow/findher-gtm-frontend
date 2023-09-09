import React from "react";
import "./SectionOne.css";
import { Button, Col, Row } from "react-bootstrap";
import demo from "./Group 167.webp";
import img1 from "./Artboard 1-2.png";
import img2 from "./Artboard 1 copy.png";
import img3 from "./Artboard 1 copy 2.png";
import img4 from "./Group 181.png";

function SectionOne() {
  return (
    <div className="job-search-section">
      <Row className="justify-content-center" >
        <Col className="justify-content-center">

          <h5 className="sec-one-head font-weight-bold howwecan sec-one-h5">How We Help You</h5>
          <h3 className="sec-one-sub sec-one-h3">

            Redesigning Job Search for Indian Women
          </h3>
          <p className="sec-one-sub-p sec-one-para">
            It's common for job postings to lack detailed information, leaving
            you in the dark about a potential employer's compatibility with your
            needs and aspirations. FindHer offers exclusive and reliable
            insights into different workplaces, allowing you to make informed
            decisions about your next career move.
          </p>
          <img
            src={demo}
            alt="Placeholder 1"
            className="section-one-first-img desktop"
          />
          <img
            src={img4}
            alt="Placeholder 1"
            className="section-one-first-img mobile"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 rectangle-row">
        <Col md={3} className="text-center mx-1 justify-content-center desktop">
          <div className="line mb-n3"></div>
          <div className=" shadow  card">
            <img src={img1} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">The Whole Picture</h4>
          </div>
        </Col>
        <Col md={3} className="text-center mx-1 justify-content-center desktop">
          <div className="line mb-n3"></div>
          <div className=" shadow d-flex flex-column align-items-center justify-content-center card">
            <img src={img2} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">Exclusive insights</h4>
          </div>
        </Col>
        <Col md={3} className="text-center mx-1 justify-content-center desktop card-img">
          <div className="line mb-n3"></div>
          <div className=" shadow d-flex flex-column align-items-center justify-content-center card">
            <img src={img3} alt="in Rectangle" className="img-in-rectangle card-img" />
            <h4 className="card-h4">Personalized For You</h4>
          </div>
        </Col>

        <p
          className="sec-one-last-p sec-one-para"
          style={{
            marginTop: "5vw",
            fontSize: "1.1rem",
            width: "60%",
            color: "black",
          }}
        >
          FindHer helps you discover job opportunities that match your skills
          and experience. We save you time by providing you with all the
          information you need in one place.
        </p>
      </Row>
      <div className="my-4 mobBtnsec1" style={{ height: "fit-content" }}>
        <Button className="hero-button">Sign Me Up</Button>
      </div>
    </div>
  );
}

export default SectionOne;
