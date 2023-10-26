import React from "react";
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import "./mainpage.css";
import search from "./icons8-search-500-2.png";
import hrh from "./logos/hrh-logo-white@4x.png";
import fin from "./logos/50fin.png";
import supu from "./logos/superu.png";
import enter from "./logos/enterpilogo.png";
import junglee from "./logos/social.png";
import {useNavigate} from 'react-router-dom';



const logos = [ hrh, supu, fin, enter, junglee];
export const MainPage = () => {

    const navigate = useNavigate();

    const handleButtonClickB = () => {
        navigate('/forbusiness');
    };

    const handleButtonClickC = () => {
        navigate('/forwomen');
    };


    return (
        <Container className="animateBg">
             <Container className="centeredBox">
                 <Col className="centercolumn">
                     <Row className="full-width searchrow">
                     <div className="RectBox-Landing-Page
                      vcc">

                        <Col className="TinyBox" md={4}>
                            <Image className="SearchIcon" src={search} />
                        </Col>
                         <Col md={9}>
                             <h1
                             className="typing-animation"> Job Search </h1></Col>

                     </div>
                         <h1 className="subsies"> made <i> for</i> Indian Women</h1>

                     </Row>

                     <Row className="buttonrow full-width">
                      <Button className="buttonforrow   mt-2" onClick={handleButtonClickC}> Find Your Next Job </Button>
                     
                       <Button className="buttonforrow  mt-2" onClick={handleButtonClickB}> Find Your Next Hire </Button>
                
                     </Row>


                     <Container fluid className="marquee isDesktop">
                         <Col>
                             <Row>
                                 <h3 className="trusted"> Trusted by</h3>
                             </Row>
                         <Row>
                             <div className="marquee-content">
                                 {/* Render the first set of logos */}
                                 {logos.map((logo, index) => (
                                     <Col className="marquee-logo" key={index}>
                                         <img src={logo} alt={`logo-${index + 1}`} />
                                     </Col>
                                 ))}
                                 {/* Duplicate: Render the second set of logos immediately after the first */}
                                 {logos.map((logo, index) => (
                                     <Col className="marquee-logo" key={`duplicate-${index}`}>
                                         <img src={logo} alt={`logo-duplicate-${index + 1}`} />
                                     </Col>
                                 ))}
                             </div>
                         </Row>
                         </Col>
                     </Container>



                 </Col>

             </Container>
        </Container>
    );
};

export default MainPage;