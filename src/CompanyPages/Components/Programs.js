import React from "react";
import "./CSS/Programs.css";
import people from "../imageAssets/people.png";
import { Row, Col, Container, Button } from "react-bootstrap";

function Programs() {
  return (
    <Col className="infoBoxProgram" style={{ width: "60%", height: "85vh" }}>
      <Row>
        <Col xs={8}>
          <h2 className="header-card">Women’s-Only Programs</h2>
        </Col>
        <Col xs={4} className="text-right">
          <Button
            className="companyPage-seemore px-4 pt-2 pb-2"
            style={{ backgroundColor: "#F6B5A8" }}
            //  onClick={() => handleShowMore("only")}
          >
            See More
            {/* {showMore ? "See Less" : "See More"} */}
          </Button>
        </Col>
      </Row>
      <Row className="infoCard my-4">
        <Col xs="2" md="2" className="header-section">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col className="text-section">
          <h3 className="subhead">WellWom Wellness</h3>
          <p>
            the WellWom Program offers resources and support for physical,
            emotional, and mental well-being. From on-site yoga and meditation
            sessions to workshops on women's health issues,...
          </p>
        </Col>
      </Row>
      {/* {showMore.only && (
                                <> */}
      <Row className="infoCard my-4">
        <Col xs="2" md="2" className="header-section">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col className="text-section">
          <h3 className="subhead">Passion for Technology</h3>
          <p>
            We seek individuals who are genuinely enthusiastic about technology
            and its transformative potential. A deep interest in staying updated
            with industry trends and a hunger for continuous learning are highly
            regarded.
          </p>
        </Col>
      </Row>
      <Row className="infoCard my-4">
        <Col xs="2" md="2" className="header-section">
          <img src={people} alt="flex" className="icono" />
        </Col>
        <Col className="text-section">
          <h3 className="subhead">Continuous Learning</h3>
          <p>
            We foster an environment that encourages continuous learning and
            development. Our team members are motivated to explore new
            technologies, methodologies, and approaches to enhance their skills
            and our collective knowledge.
          </p>
        </Col>
      </Row>
      {/* </>
                            )} */}
    </Col>
  );
}

export default Programs;
