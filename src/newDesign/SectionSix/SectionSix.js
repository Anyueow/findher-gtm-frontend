import React from 'react'
import "./SectionSix.css";
import { Button, Col, Row } from "react-bootstrap";
import sec6img from './sec6img.webp';
import img1 from "./images/download.svg"
function SectionSix() {
  return (
    <div className="section6">
      <Row className="sec6cont"> 
        <Col className="sec6stuffs">
            <Col className="stuffsInner">
            <Col className="sec6head">
                <p>Be in the know!</p>
            </Col>
            <Col className="sec6body">
            <p>Supercharge your job search process with insights and information from women who've worked there.</p>

            </Col>
            <Button className="AcessButton secbtn exclusive-btn">Get Exclusive Access!</Button>
            </Col>
        </Col>
        <Col className="sec6img">
        <img src={img1} className='sec-six-load' alt="Be in the know" />
            <img src={sec6img} className='sec-six-img2' alt="Be in the know" />
        </Col>
      </Row>
    </div>
  )
}

export default SectionSix
