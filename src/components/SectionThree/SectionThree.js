import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../Assets/wholepic.png";
import image2 from "../../Assets/insights.png";
import image3 from "../../Assets/relevant.png";
import "./secthree.css";

function SectionThree() {
    const [selectedCard, setSelectedCard] = useState(null);

    const images = [image1, image2, image3];
    const cardTitles = ["The Whole Picture", "Exclusive Insights", "Relevant to You"];
    const cardSubtitles = [
        "Comprehensive overviews of individual offices",
        "Real, transparent reviews from women who have worked there",
        "Detailed information on factors important to you"
    ];

    const handleClick = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    }

    return (
        <section className="grid-section shade">
            <Container className="container-md">
                <Row className="row-features">
                    <h1 className="header-font"> On <span className="text-deco-three"> FindHer
                        </span> you will get:</h1>

                    <Col xs={12} md={3} lg={4} className="icon-features">
                        <h2 className="features-head">
                            {cardTitles[0]}
                        </h2>
                        <div>
                            <img src={images[0]} className="img-card" alt={cardTitles[0]} />
                        </div>
                        <h3 className="features-sub">{cardSubtitles[0]}</h3>
                    </Col>

                    <Col xs={12} md={3} lg={4} className="icon-features">
                        <h2 className="features-head">{cardTitles[1]}</h2>
                        <div>
                            <img src={images[1]} className="insights-img-class" alt={cardTitles[1]} />
                        </div>
                        <h3 className="features-sub">{cardSubtitles[1]}</h3>
                    </Col>

                    <Col xs={12} md={4} className="icon-features">
                        <h2 className="features-head">{cardTitles[2]}</h2>
                        <div>
                            <img src={images[2]} className="img-card" alt={cardTitles[2]} />
                        </div>
                        <h3 className="features-sub">{cardSubtitles[2]}</h3>
                    </Col>

                </Row>

                <Row className="btn-section1">
                    <h1 className="header-font"> On <span className="text-deco-three"
                        style={{textDecorationColor:"#c1c50a"}}> FindHer
                        </span> you will get:</h1>
                    {cardTitles.map((title, index) => (
                        <Col key={index} xs={12} md={4} className="align-content-center">
                            <button className="card-btn" onClick={() => handleClick(index)}>
                                <span className="card-btn-head">{title}</span>
                            </button>
                            {selectedCard === index && (
                                <div className="icon-features">
                                    <h2 className="features-head">{cardTitles[index]}</h2>
                                    <div>
                                        <img src={images[index]} className="img-card" alt={cardTitles[1]} />
                                    </div>
                                    <h3 className="features-sub">{cardSubtitles[index]}</h3>
                                </div>
                            )}
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default SectionThree;
