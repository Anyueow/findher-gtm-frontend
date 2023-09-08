import React from 'react'
import "./SectionSix.css";
import { Button, Col, Row } from "react-bootstrap";
import sec6img from './sec6img.webp'
function SectionSix() {
  return (
    <div className="section6" >
      <Row className="sec6cont"> 
        <Col className="sec6stuffs">
            <Col className="stuffsInner">
            <Col className="sec6head">
                <p>Be in the know!</p>
            </Col>
            <Col className="sec6body">
            <p>Supercharge your job search process with insights and information from women who've worked there.</p>

            </Col>
            <Button className="AcessButton secbtn">Join now!</Button>
            </Col>
        </Col>
        <Col className="sec6img">
            <img src={sec6img} alt="Be in the know" />
        </Col>
      </Row>
    </div>
  )
}

export default SectionSix
