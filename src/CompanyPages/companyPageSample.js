import React, {useState} from "react";
import {Container, Row, Col, Image, Button} from "react-bootstrap";
import "./companyPage.css";
import logo from "./images-4.jpeg";
import loc from "./imageAssets/map.svg";
import industry from "./imageAssets/suitcase.svg";
import employee from "./imageAssets/people.svg";
import web from "./imageAssets/Group 4392.png";
import building from "./imageAssets/Group 4393.png";
import flexibility from "./imageAssets/Group 4365.png";
import graph from "./imageAssets/Group 4394.png";
import people from "./imageAssets/people.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CircularProgress = ({ progress }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width="120" height="120">
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#ffb9c6"
                strokeWidth="20"
                fill="#ffb9c6"
            />
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#ee2c5b"
                strokeWidth="20"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text x="60" y="60" textAnchor="middle" dy=".3em" fontSize="20">
                {`${progress}%`}
            </text>
        </svg>
    );
};
const CircularProgress2 = ({ progress }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width="120" height="120">
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#CCF8FE"
                strokeWidth="20"
                fill="#CCF8FE"
            />
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#02A0FC"
                strokeWidth="20"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text x="60" y="60" textAnchor="middle" dy=".3em" fontSize="20">
                {`${progress}%`}
            </text>
        </svg>
    );
};

const CircularProgress3 = ({ progress }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width="120" height="120">
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#FFF8D3"
                strokeWidth="20"
                fill="#FFF8D3"
            />
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="#FFD029"
                strokeWidth="20"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text x="60" y="60" textAnchor="middle" dy=".3em" fontSize="20">
                {`${progress}%`}
            </text>
        </svg>
    );
};
const testimonials = [
    {
        type: "Flexibility",
        comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
        rating: 5,
    },
    {
        type: "Diversity",
        comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
        rating: 5,
    },
    {
        type: "Security",
        comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
        rating: 5,
    },
    {
        type: "TechCorp",
        comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
        rating: 5,
    },
];

const StarRating = ({ rating }) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);

    return (
        <p style={{ fontSize: '24px', margin: '0', color: "yellowgreen", borderRadius: "5px" }}>
            {filledStars}{emptyStars}
        </p>
    );
};

const Testimonial = ({ testimonial }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const truncatedComment = testimonial.comment.slice(0, 100);
    const shouldTruncate = testimonial.comment.length > 100;

    return (
        <div className="testimonial-content">
            <p className="testiText">
                {isExpanded || !shouldTruncate ? testimonial.comment : `${truncatedComment}...`}
            </p>
            {shouldTruncate && (
                <button className="tiny" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "See Less" : "See More"}
                </button>
            )}
            <p className="tinyBub">{testimonial.type}</p>
            <StarRating rating={testimonial.rating} />
        </div>
    );
};

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li><a href="#about">Overview</a></li>
                <li><a href="#WhyWork">Working Here</a></li>
                <li><a href="#testimonial">Testimonials</a></li>
                <li><a href="#programs">For Women</a></li>
            </ul>
        </div>
    );
};

export const CompanyProfileHeader = () => {
    const [showMore, setShowMore] = useState(false);



    return (
        <Container className="contt">
            <Col className="colcont">

                <div className="profile-box">
                    <div className="info-group">
                        <div className="logo-container">
                            <img className="company-logo" alt="Company Logo" src={logo}/>
                        </div>
                        <div className="text-info">
                            <h1 className="head-text">Spring Tech Inc</h1>
                            <div className="info-row">
                                <img className="icon" alt="Location Icon" src={loc}/>
                                <p className="sub-text">Mumbai, India</p>
                            </div>
                            <div className="info-row">
                                <img className="icon" alt="Industry Icon" src={industry}/>
                                <p className="sub-text">Information Technology</p>
                            </div>
                            <div className="info-row">
                                <img className="icon" alt="Employee Icon" src={employee}/>
                                <p className="sub-text">50-250 People</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Navigation />

                <Row className="colTwo">
                    <Col xs={12} md={6} className="section" id="about">
                        <Container className="infoBox">

                            <div>
                                <h2 className="header-card">About</h2>
                                <p>
                                    Sprintex Inc. is a leading Information Technology consulting
                                    firm. We specialize in providing expert guidance and innovative
                                    solutions to businesses seeking to harness the full potential of
                                    technology. Whether it's streamlining operations, optimizing IT
                                    infrastructure, or implementing strategic digital initiatives,
                                    Sprintex Inc. offers tailored consulting services that drive
                                    efficiency, innovation, and sustainable growth.
                                </p>
                            </div>

                        </Container>
                    </Col>

                    <Col xs={12} md={6} className="section" id="about">
                    <Container className="infoBoxTwo">
                        <div className="rectBox">
                            <Row>
                                <Col xs={12}>
                                    <h2 className="header-card">Quick Facts</h2>
                                </Col>
                            </Row>
                            <Row style={{minWidth:"100%"}}>
                                <Col className="Rect">
                                    <Image src={web} alt="web" className="icon" />
                                    <h6 className="iconttext"><u>sprintec.com</u></h6>
                                </Col>
                                <Col  className="Rect">
                                    <Image src={building} alt="building" className="icon" />
                                    <h6 className="iconttext">Started in 2010</h6>
                                </Col>
                                <Col  className="Rect">
                                    <h6 className="bubble">Remote Work Opps</h6>
                                    <h6 className="bubble">Retirement Benefits</h6>
                                    <h6 className="bubble">Parental Leaves</h6>
                                </Col>
                            </Row>
                        </div>
                    </Container>
            </Col>
                </Row>

                <div className="frame">
                    <div className="section framer" id="WhyWork">
                        <Container className="infoBox">
                            <Col>
                                <Row style={{ minWidth: "100%" }}>
                                    <Col xs={8}>
                                        <h4 className="header-card">Why work here?</h4>
                                    </Col>
                                    <Col xs={4} className="text-right">
                                        <Button className="pink" onClick={() => setShowMore(!showMore)}>
                                            {showMore ? "See Less" : "See More"}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="infoCard">
                                    <div className="header-section">
                                        <img src={flexibility} alt="flex" className="icono"/>
                                        <h3 className="subhead">Flexibility</h3>
                                    </div>
                                    <div className="text-section">
                                        <p>We offer flexible work arrangements, including options for remote work and flexible hours. We trust our team members to manage their schedules effectively, allowing you to excel both professionally and personally.</p>
                                    </div>
                                </Row>
                                {showMore && (
                                    <>
                                        <Row className="infoCard">
                                            <div className="header-section">
                                                <img src={flexibility} alt="flex" className="icono"/>
                                                <h3 className="subhead">Remote Opportunities</h3>
                                            </div>
                                            <div className="text-section">
                                                <p>We provide opportunities for remote work to ensure our team can work in the environment that suits them best, promoting a healthy work-life balance and increased productivity.</p>
                                            </div>
                                        </Row>
                                        <Row className="infoCard">
                                            <div className="header-section">
                                                <img src={flexibility} alt="flex" className="icono"/>
                                                <h3 className="subhead">Career Growth</h3>
                                            </div>
                                            <div className="text-section">
                                                <p>We support the career growth of our team members through various professional development opportunities, training programs, and mentorship to help you navigate your career path.</p>
                                            </div>
                                        </Row>
                                    </>
                                )}
                            </Col>
                        </Container>
                    </div>
                <div className="section" id="WhyWork">
                    <Container className="infoBox">
                        <Col>
                            <Row style={{ minWidth: "100%" }}>
                                <Col xs={8}>
                                    <h4 className="header-card">What do they look for?</h4>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <Button className="pink"
                                            onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "See Less" : "See More"}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="infoCard">
                                <div className="header-section">
                                    <img src={graph} alt="flex" className="icono"/>
                                    <h3 className="subhead">Passion for Technology</h3>
                                </div>
                                <div className="text-section">
                                    <p> We seek individuals who are genuinely enthusiastic about
                                        technology and its transformative potential. A deep interest
                                        in staying updated with industry trends and a hunger
                                        for continuous learning are highly regarded.</p>
                                </div>
                            </Row>
                            {showMore && (
                                <>
                                    <Row className="infoCard">
                                        <div className="header-section">
                                            <img src={graph} alt="flex" className="icono"/>
                                            <h3 className="subhead">Passion for Technology</h3>
                                        </div>
                                        <div className="text-section">
                                            <p> We seek individuals who are genuinely enthusiastic about
                                                technology and its transformative potential. A deep interest
                                                in staying updated with industry trends and a hunger
                                                for continuous learning are highly regarded.</p>
                                        </div>
                                    </Row>
                                    <Row className="infoCard">
                                        <div className="header-section">
                                            <img src={graph} alt="flex" className="icono"/>
                                            <h3 className="subhead">Passion for Technology</h3>
                                        </div>
                                        <div className="text-section">
                                            <p> We seek individuals who are genuinely enthusiastic about
                                                technology and its transformative potential. A deep interest
                                                in staying updated with industry trends and a hunger
                                                for continuous learning are highly regarded.</p>
                                        </div>
                                    </Row>
                                </>
                            )}
                        </Col>
                    </Container>
                </div>
                    <div className="section" id="WhyWork">
                        <Container className="infoBox">
                            <Col>
                                <Row style={{ minWidth: "100%" }}>
                                    <Col xs={8}>
                                        <h4 className="header-card">What’s it like to work here?</h4>
                                    </Col>
                                    <Col xs={4} className="text-right">
                                        <Button className="pink" onClick={() => setShowMore(!showMore)}>
                                            {showMore ? "See Less" : "See More"}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="infoCard">
                                    <div className="header-section">
                                        <img src={people} alt="flex" className="icono"/>
                                        <h3 className="subhead">Approachable Leadership</h3>
                                    </div>
                                    <div className="text-section">
                                        <p>We believe in open-door policies, where you can readily connect with leadership to share your ideas, concerns, and feedback. Our management team actively seeks to build strong relationships with employees.</p>
                                    </div>
                                </Row>
                                {showMore && (
                                    <>
                                        <Row className="infoCard">
                                            <div className="header-section">
                                                <img src={people} alt="flex" className="icono"/>
                                                <h3 className="subhead">Passion for Technology</h3>
                                            </div>
                                            <div className="text-section">
                                                <p>We seek individuals who are genuinely enthusiastic about technology and its transformative potential. A deep interest in staying updated with industry trends and a hunger for continuous learning are highly regarded.</p>
                                            </div>
                                        </Row>
                                        <Row className="infoCard">
                                            <div className="header-section">
                                                <img src={people} alt="flex" className="icono"/>
                                                <h3 className="subhead">Continuous Learning</h3>
                                            </div>
                                            <div className="text-section">
                                                <p>Our team is encouraged to pursue further education and training. We provide resources and time for you to explore new technologies, methodologies, and frameworks to stay at the forefront of the industry.</p>
                                            </div>
                                        </Row>
                                    </>
                                )}
                            </Col>
                        </Container>
                    </div>

                </div>

                <Row className="section" id="WhyWork">
                    <Container className="infoBox">
                        <Row>
                        <h2 className="header-card">
                            What women who work here have to say:</h2>

                            <Col className="GraphCard" >
                                <Row>
                                    <p className="parahCen"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress progress={80} />

                                </Row>
                            </Col>

                            <Col    className="GraphCard" >
                                <Row>
                                    <p className="parahCen"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress2 progress={95} />

                                </Row>
                            </Col>

                            <Col    className="GraphCard" >
                                <Row>
                                    <p className="parahCen"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress3 progress={90} />

                                </Row>
                            </Col>



                        </Row>
                    </Container>

                </Row>
                <Row className="section" id="testimonial">
                    <Container className="testiBox">
                        {testimonials.map((testimonial, index) => (
                            <Testimonial key={index} testimonial={testimonial} />
                        ))}
                    </Container>

                </Row>

                <Row className="section" id="programs">
                    <Container className="infoBox">
                        <Col>
                            <Row style={{ minWidth: "100%" }}>
                                <Col xs={8}>
                                    <h2 className="header-card">Women’s-Only Programs</h2>
                                </Col>
                                <Col xs={4} className="text-right">
                                    <Button className="pink" onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "See Less" : "See More"}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="infoCard">
                                <div className="header-section">
                                    <img src={people} alt="flex" className="icono"/>
                                    <h3 className="subhead">WellWom Wellness</h3>
                                </div>
                                <div className="text-section">
                                    <p>the WellWom Program offers resources and support for physical, emotional, and mental well-being. From on-site yoga and meditation sessions to workshops on women's health issues,...</p>
                                </div>
                            </Row>
                            {showMore && (
                                <>
                                    <Row className="infoCard">
                                        <div className="header-section">
                                            <img src={people} alt="flex" className="icono"/>
                                            <h3 className="subhead">Passion for Technology</h3>
                                        </div>
                                        <div className="text-section">
                                            <p>We seek individuals who are genuinely enthusiastic about technology and its transformative potential. A deep interest in staying updated with industry trends and a hunger for continuous learning are highly regarded.</p>
                                        </div>
                                    </Row>
                                    <Row className="infoCard">
                                        <div className="header-section">
                                            <img src={people} alt="flex" className="icono"/>
                                            <h3 className="subhead">Continuous Learning</h3>
                                        </div>
                                        <div className="text-section">
                                            <p>We foster an environment that encourages continuous learning and development. Our team members are motivated to explore new technologies, methodologies, and approaches to enhance their skills and our collective knowledge.</p>
                                        </div>
                                    </Row>
                                </>
                            )}
                        </Col>
                    </Container>
                </Row>


            </Col>
        </Container>
    );
};

export default CompanyProfileHeader;