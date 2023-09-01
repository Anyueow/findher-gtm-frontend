import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import base from "./Images/maindemo.png";
import mobbase from "./Images/phone des.png";

import "./sectionTwo.css";

function SecTwo2mob() {
  return (
    <section className="section-container gg2">
      <Container
        fluid
        className="section-content"
        style={{ overflow: "hidden" }}
      >
        <Row
          className="align-items-center full-height"
          style={{ overflow: "hidden", height:"fit-content"}}
        >
          <Col md={5} xs={12} className="text-content" style={{paddingLeft:"26px"}}>
            <h1 className="title">
              <div style={{ fontSize: "22px",  }}>
                That's why we're building Find
                <span style={{ color: "rgba(226, 11, 60, 0.83)" }}>Her,</span>
              </div>
            </h1>
            <div
              className="description dis1"
              style={{ width: "100%", display: "block",color:"black"}}
            >
              <span className="emphasis2" >
                {" "}
                So you can be in the know,
              </span>{" "}
              <span
                className="emphasis2"
                style={{ color: "rgba(226, 11, 60, 0.83)" }}
              >
                not in the dark.
              </span>
            </div>
            {/* <h3 className="description">
              On our platform you can access{" "}
              <strong> exclusive information about workplaces </strong> to
              ensure you're always making the best career decisions.
            </h3> */}
          </Col>

          <Col md={7} xs={12} className="image-content section-two-image">
            <img
              src={base}
              className="display-image desktop"
              alt="Findher Demo"
            />
            <img
              src={mobbase}
              className="display-image mobile mob22"
              alt="Findher Demo"
            />
          </Col>
          <Col className="piclower-text" >
            <p>to make it easy for women to access information on workplaces of interest, enabling more <span style={{textDecoration:"underline"}}>informed decision making</span>{" "}
            and <span style={{textDecoration:"underline "}}>honest feedback-sharing</span> </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SecTwo2mob;
