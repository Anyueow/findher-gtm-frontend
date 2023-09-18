import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo.png";
import './Hero/home.css';
import './Footer.css';
import linkedinIcon from '../Assets/icons8-linkedin-100.png';
import instaIcon from '../Assets/icons8-instagram-100.png';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
      <Container fluid id="contact" className="new-footer">
        <Row className="marg justify-content-md-start">
          <Col md="9" lg="10" className="logomob">
            <img src={logo} className="img-fluid my-3" alt="brand" style={{ maxWidth: '21%',marginLeft:"-5px", display:"block" }} />
            <p className="Footer-hed">© {year}. All rights reserved</p>
          </Col>
          <Col md="3" lg="2" className="contact-side">
          <h4 className=""> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"black" ,cursor:"pointer" }} target="_blank" rel="noopener noreferrer">
                 Contact
                </a></h4>
            <h4 className=""> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"#f04a72" ,cursor:"pointer" }} target="_blank" rel="noopener noreferrer">
                 info@findher.work
                </a></h4>





                  <h4 className=""> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"black" ,cursor:"pointer" }} target="_blank" rel="noopener noreferrer">
                      <img src={linkedinIcon}  alt="" className="footer-icons"
                           style={{width:"12%"}}/>
                      <span>  </span>LinkedIn

                </a></h4>

                <h4 className=""> <a href="mailto:info@findher.work?subject=Reaching%20out%20for&body=Hi!%20I'm%20%3Center%20name%3E.%20I%20want%20to%20enquire%20about%20%3CEnter%20enquiry%20details%3E.%0A%0AThank%20you.%0ABest,%0A%3CName%3E%0A%3CPhone%20Number%3E"
                style={{ textDecoration:"none",color:"black" ,cursor:"pointer" }} target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="" className="footer-icons"
                         style={{width:"12%"}}/>
                    <span>  </span>Instagram
                </a></h4>
          </Col>
          
        </Row>
      </Container>
  );
}

export default Footer;
