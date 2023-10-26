import React, { useState } from "react";
import "./CSS/Overview.css";
import greentick from "../imageAssets/greentick.svg";
import {Row, Col, Button, Container, Card, Image} from "react-bootstrap";
import { FaLaptop, FaUsers, FaMapMarkerAlt, FaRegClock, FaCity } from 'react-icons/fa';

function Overview() {

  // State to keep track of the collapsed status
  const [isCollapsed, setIsCollapsed] = useState(true);

  // The full text that you want to display
  const fullText = "At Sprintex, we envision a world where businesses seamlessly integrate technology into their core processes, fostering growth, efficiency, and success. Our mission is to guide organizations through the evolving digital landscape, ensuring they leverage the most effective and innovative tech solutions to meet their unique challenges and goals.";

  // The text that will be displayed when the content is collapsed
  const displayText = isCollapsed ? `${fullText.substring(0, 150)}...` : fullText;

  // Function to handle the "See More" button click
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
      <Container className="backgroundgrey">
    <Row className="ms-0 me-1 px-2">


          <Row style={{justifyContent:"center", marginTop:"5%"}}>
            <Col md={6} xs={11} className="smollbox"
                 style={{marginBottom:"3%"}}>
            <h2 className="company-details-sub-title">Mission</h2>
            <p className="company-details-para">
              At Sprintex, we envision a world where businesses seamlessly integrate technology
              into their core processes, fostering growth, efficiency, and success. Our mission is
              to guide organizations through the evolving digital landscape, ensuring they leverage the most effective and innovative tech solutions to meet their unique challenges and goals.
            </p>
            </Col>
            <Col md={6} xs={11} className="smollbox"
                 style={{marginBottom:"3%"}}>
              <h2 className="company-details-sub-title">What They Do</h2>
              <p className="company-details-para">
                At Sprintex, we envision a world where businesses seamlessly integrate technology into their core processes, fostering growth, efficiency, and success. Our mission is to guide organizations through the evolving digital landscape, ensuring they leverage the most effective and innovative tech solutions to meet their unique challenges and goals.
              </p>
            </Col>
          </Row>

      <Row style={{marginTop:"0%"}} className="OverviewRow">
        <Col md={6} xs={11} className="smollbox">
          <Row className="smallerRow" style={{marginBottom:"2%"}}>
            <h2 className="company-details-sub-title">Quick Facts</h2>
          </Row>
          <Row className="smallerRow">
            <Col className="rowtext">
              <div className="circleBorder" style={{backgroundColor:"#FFFBE4"}}>
                <FaLaptop className="iconCenter" /> {/* Icon for IT */}
              </div>
              <p>Information Technology</p>
            </Col>
            <Col className="rowtext">
              <div className="circleBorder" style={{backgroundColor:"#EEFFE8"}}>
                <FaUsers className="iconCenter" /> {/* Icon for Employees */}
              </div>
              <p>50-250 Employees</p>
            </Col>
            <Col className="rowtext">
              <div className="circleBorder" style={{backgroundColor:"#D9FAFF"}}>
                <FaRegClock className="iconCenter" /> {/* Icon for Year Started */}
              </div>
              <p>Started in 2015</p>
            </Col>
            <Col className="rowtext">
              <div className="circleBorder" style={{backgroundColor:"#FEEEFF"}}>
                <FaCity className="iconCenter" /> {/* Icon for Offices */}
              </div>
              <p>2 Offices in India</p>
            </Col>
            <Col className="rowtext">
              <div className="circleBorder" style={{backgroundColor:"#FFEAEA"}}>
                <FaMapMarkerAlt className="iconCenter" /> {/* Icon for HQ */}
              </div>
              <p>HQ in Mumbai</p>
            </Col>
          </Row>
        </Col>

        <Col md={6} xs={11} className="smollbox">
          <Row className="smallerRow" style={{marginBottom:"2%"}}>
            <h2 className="company-details-sub-title">
              Top Reasons To Work Here</h2>
          </Row>
          <Row style={{paddingTop:"0%"}} className="smallerRow">
            <Col xs="11" md="11" lg="11"
                 className="Rect columnpens">
              <div className="d-flex  align-items-baseline groupbox">
                    <span className="greenTick">
                      <img src={greentick} alt="tick" />
                    </span>
                <h6 className="bubble mx-3">Remote Work Opps</h6>
              </div>
              <div className="d-flex  align-items-baseline groupbox">
                    <span>
                      <img src={greentick} alt="tick" />
                    </span>{" "}
                <h6 className="bubble mx-3">Retirement Benefits</h6>
              </div>
              <div className="d-flex  align-items-baseline groupbox">
                    <span>
                      <img src={greentick} alt="tick" />
                    </span>{" "}
                <h6 className="bubble mx-3">Parental Leaves</h6>
              </div>
              <div className="d-flex  align-items-baseline groupbox">
                    <span>
                      <img src={greentick} alt="tick" />
                    </span>{" "}
                <h6 className="bubble mx-3">Parental Leaves</h6>
              </div>
            </Col>

          </Row>
        </Col>
      </Row>

      <Row style={{marginTop:"0%"}} className="OverviewRow">

        <Row md={12} xs={11} className="smollbox"
        style={{width:"97.5%", padding:"3%", flexDirection:"row"}}>
          <Row style={{padding:"1%", width:"100%", paddingBottom:'2%'}}>
            <Col>
          <h2 className="company-details-sub-title">What They Do</h2>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',
              height: '100%' /* or any specific height as per your layout */ }}>
              <Button
                  variant="danger"
                  style={{ padding: "1%", width: "100px" }}
                  onClick={toggleCollapse}
                  className="see-more-button"
              >
                {isCollapsed ? "See More" : "See Less"}
              </Button>
            </Col>
          </Row>
          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>

          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>
          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>
        </Row>
      </Row>

      <Row style={{marginTop:"0%"}} className="OverviewRow">

        <Row md={12} xs={11} className="smollbox"
             style={{width:"97.5%", padding:"3%", flexDirection:"row"}}>
          <Row style={{padding:"1%", width:"100%", paddingBottom:'2%'}}>
            <Col>
              <h2 className="company-details-sub-title">What They Do</h2>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',
              height: '100%' /* or any specific height as per your layout */ }}>
              <Button
                  variant="danger"
                  style={{ padding: "1%", width: "100px" }}
                  onClick={toggleCollapse}
                  className="see-more-button"
              >
                {isCollapsed ? "See More" : "See Less"}
              </Button>
            </Col>
          </Row>
          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>

          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>
          <Col className="infomorebox" style={{width:"37.5%"}}>
            <h2 className="company-details-sub-title">What They Do</h2>
            <p className="company-details-para">
              {displayText}
            </p>
          </Col>
        </Row>
      </Row>


    </Row>
      </Container>
  );
}

export default Overview;
