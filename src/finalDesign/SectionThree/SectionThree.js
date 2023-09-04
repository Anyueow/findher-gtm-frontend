import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "./SectionThree.css";
import img1 from "./shutterstock_1125823856 (1).webp";
import img2 from "./screen 4.png";
import img3 from "./screen 5.webp";
import img4 from "./Untitled design-24.png";
import img5 from "./screentop.png";
function SectionThree() {
  return (
    <Container className="my-5 section-three-container">
      {/* The Whole Picture */}
      <Row className="mb-4 align-items-center">
        <Col md={7} xs={12} className="no-gutter">
          <div className="decorative-rectangle"></div>
          <Image
            src={img1}
            className="overlay-image"
            alt="Decorative Image 1"
          />
          <Image
            src={img2}
            className="overlay-image-two"
            alt="Decorative Image 1"
          />
        </Col>
        <Col md={5} className="no-gutter">
          <h3 className="head">The Whole Picture</h3>
          <p className="sub">
            Knowledge is power, and having access to the whole picture empowers
            you to make informed career choices. FindHer ensures that you're in
            control of your path, whether you're just starting or advancing your
            career.
          </p>
          <Button className="JoinButton">Join us now</Button>
        </Col>
      </Row>

      <Row className="mb-4 align-items-center" style={{ marginTop: "8%" }}>
        <Col md={7} className="no-gutter mobile">
          <div className="decorative-rectangle-right"></div>
          <Image
            src={img3}
            className="overlay-image-right"
            alt="Decorative Image 1"
          />
          <Image
            src={img4}
            className="overlay-image-right-two"
            alt="Decorative Image 1"
          />
        </Col>

        <Col md={5} className="no-gutter">
          <h3 className="head" style={{ marginLeft: "6%" }}>
            Exclusive Insights
          </h3>
          <p className="sub" style={{ marginLeft: "6%" }}>
            We believe that you deserve more than just a job title. Our platform
            offers a treasure trove of insider insights, spanning workplace
            culture, work-life balance, and the unspoken aspects that truly
            matter.
          </p>
          <Button style={{ marginLeft: "6%" }} className="JoinButton">
            Join us now
          </Button>
        </Col>
        <Col md={7} className="no-gutter desktop">
          <div className="decorative-rectangle-right"></div>
          <Image
            src={img3}
            className="overlay-image-right"
            alt="Decorative Image 1"
          />
          <Image
            src={img4}
            className="overlay-image-right-two"
            alt="Decorative Image 1"
          />
        </Col>
      </Row>
      <Row className="mb-4 align-items-center" style={{ marginTop: "8%" }}>
        <Col md={7} className="no-gutter">
          <div className="decorative-rectangle"></div>
          <Image
            src={img5}
            className="overlay-image-two"
            style={{ top: "45%" }}
            alt="Decorative Image 1"
          />
        </Col>
        <Col md={5} className="no-gutter">
          <h3 className="head">Personalized For You</h3>
          <p className="sub" style={{ width: "85%" }}>
            Your unique experiences and aspirations deserve recognition. With
            FindHer, you're not just another applicant. Our platform matches you
            with roles that align with YOUR specific needs and ambitions.
          </p>
          <Button className="JoinButton">Join us now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionThree;
