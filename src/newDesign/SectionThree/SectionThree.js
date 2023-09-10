import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import "./SectionThree.css";
// import img1 from "./shutterstock_1125823856 (1).webp";
import img2 from "./screen 4.png";
import img3 from "./screen 5.webp";
// import img4 from "./Untitled design-24.png";
// import img5 from "./screentop.png";
import row1img2 from "./row1img2.webp";
import row2img2 from "./row2img2.webp";
import row3img1 from "./row3img1.webp";
import row3img2 from "./row3img2.webp";
function SectionThree() {
  return (
    <Container className="my-5 section-three-container secOutCont" id="features"> 
      {/* The Whole Picture */}
      <Row className="mb-4 align-items-center sec3Rows" >
        <Col md={5} className="no-gutter">
          <h3 className="head wholeHead">The Whole Picture</h3>
          <p className="wholePara">
            Knowledge is power, and having access to the whole picture empowers
            you to make informed career choices. FindHer ensures that you're in
            control of your path, whether you're just starting or advancing your
            career.
          </p>
          <Button className="hero-button">Get Acess!</Button>
        </Col>
        <Col md={7} xs={12} className="no-gutter">
          <div className="decorative-rectangle"></div>
          <Image
            src={row1img2}
            className="overlay-image"
            alt="Decorative Image 1"
          />
          <Image
            src={img2}
            className="overlay-image-two"
            alt="Decorative Image 1"
          />
        </Col>
      </Row>

      <Row
        className="mb-4 align-items-center sec3Rows sec3row2"
        // style={{ marginTop: "8%" }}
      >
        <Col md={7} className="no-gutter ">
          <div className="decorative-rectangle-right"></div>
          <Image
            src={img3}
            className="overlay-image-right"
            alt="Decorative Image 1"
          />
          <Image
            src={row2img2}
            className="overlay-image-right-two"
            alt="Decorative Image 1"
          />
        </Col>
        <Col md={5} className="no-gutter ">
          <h3 className="head wholeHead" style={{ marginLeft: "6%" }}>
            Exclusive Insights
          </h3>
          <p className="sub wholePara" style={{ marginLeft: "6%" }}>
            We believe that you deserve more than just a job title. Our platform
            offers a treasure trove of insider insights, spanning workplace
            culture, work-life balance, and the unspoken aspects that truly
            matter.
          </p>
          <Button style={{ marginLeft: "6%" }} className=" hero-button">
            Join us now
          </Button>
        </Col>
      </Row>
      <Row
        className="mb-4 align-items-center sec3Rows"
        // style={{ marginTop: "8%" }}
      >
        <Col md={7} className="no-gutter">
        <h3 className="head wholeHead ">Personalized For You</h3>
          <p className="subc wholePara" style={{ width: "85%" }}>
            Your unique experiences and aspirations deserve recognition. With
            FindHer, you're not just another applicant. Our platform matches you
            with roles that align with YOUR specific needs and ambitions.
          </p>
          <Button className="hero-button" style={{fontWeight:"bold",color: "#ffffffe0"}}>Take Me There</Button>
        </Col>
        <Col md={5} className="no-gutter">
        <div className="decorative-rectangle lstOne"></div>
          <Image
            src={row3img1}
            className="overlay-image-three"
            style={{ top: "45%" }}
            alt="Decorative Image 1"
          />
          <Image
            src={row3img2}
            className="overlay-image-right-three"
            alt="Decorative Image 3"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionThree;
