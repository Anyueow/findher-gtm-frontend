import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillInstagram, AiFillMail} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/logo.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid id="contact" className="footer">
        <Row className="marg justify-content-md-start">
          <Col md="8" >
            <img src={logo} className="img-fluid" alt="brand" style={{ maxWidth: '21%',marginLeft:"-5px" }} />
            <p className="Footerhed"> Envisioning an India where all women are engaged in fulfilling and financially rewarding work</p>
            
          </Col>
          <Col md="4" >
            <h2 className="Footerhed"> <strong>
              Contact Us </strong></h2>
            <h4 className="desktop"> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"black" ,cursor:"pointer" }} target="_blank" rel="noopener noreferrer">
                 info@findher.work
                </a></h4>

            <Row className="footer-icons">
              <Col md={2} xs="auto">
                <a href="https://www.linkedin.com/company/96131931/admin/feed/posts/"
                   style={{ color: "#EA394A"}} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </Col>
              <Col md={2} xs="auto">
                <a href="https://www.linkedin.com/company/96131931/admin/feed/posts/"
                   style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
              </Col>
              <Col md={2} xs="auto">
                <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ color: "#EA394A" }} target="_blank" rel="noopener noreferrer">
                  <AiFillMail />
                </a>
              </Col>
              {/* Add more social icons here if needed */}
            </Row>
            <h4 className="mobile pt-2"> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"black" ,cursor:"pointer",position:"absolute" ,top:"17vh"}} target="_blank" rel="noopener noreferrer">
                 info@findher.work
                </a></h4>
          </Col>
          
        </Row>
        <h1 className="footer-copywright">
              Copyright © {year} FindHer</h1>
      </Container>
  );
}

export default Footer;
