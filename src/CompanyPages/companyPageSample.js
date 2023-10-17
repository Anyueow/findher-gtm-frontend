import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import "./companyPage.css";
import logo from "./images-4.jpeg";
import loc from "./imageAssets/map.svg";
import industry from "./imageAssets/suitcase.svg";
import employee from "./imageAssets/people.svg";
import greentick from "./imageAssets/greentick.svg";
// import building from "./imageAssets/Group 4393.png";
import flexibility from "./imageAssets/Group 4365.png";
import graph from "./imageAssets/Group 4394.png";
import people from "./imageAssets/people.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CircularProgress = ({ progress, circleColor, percentageColor }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width="120" height="120">
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke={circleColor}
                strokeWidth="20"
                fill={circleColor}
            />
            <circle
                cx="60"
                cy="60"
                r={radius}
                stroke={percentageColor}
                strokeWidth="20"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text x="60" y="50" textAnchor="middle" dy=".3em" fontSize="20">
            <tspan dy="0.3em">{`${progress}%`}</tspan>
        <tspan x="60" dy="1.2em">Agree</tspan>
            </text>
        </svg>
    );
};

const testimonials = [
    {
        type: "Flexibility",
        comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
        rating: 4,
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
    const [showMore, setShowMore] = useState({
        why:false,
        look:false,
        like:false,
        only:false,
    });



    return (
        <Container className="contt">
            <Col className="colcont">

                <div className="profile-box">
                    <Row className="info-group">
                        <Col xs="5" md="3" className="logo-container">
                            <img className="company-logo" alt="Company Logo" src={logo}/>
                        </Col>
                        <Col xs='5' md="3" className="text-info company-details-page">
                            <h1 className="head-text mx-3">Spring Tech Inc</h1>
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
                        </Col>
                    </Row>
                </div>

                <Navigation />

                <Row className="colTwo">
                    <Col xs={12} md={6} className="section" id="about">
                        <Container className="infoBox">

                            <div>
                                <h2 className="header-card">About</h2>
                                <p className="header-card-p">
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
                            <Row className="quickFactinnerRow">
                                <Col xs="5" md="2" className="Rect Rect-mobile" style={{alignItems:"center"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#F6B5A8" fill-opacity="0.64"/>
  <path d="M29.6222 19C22.68 19 17 24.4929 17 31.2063C17 37.9198 22.68 43.4127 29.6222 43.4127C31.8942 43.4127 34.0399 42.8024 35.9333 41.8259C36.5644 41.4597 36.6906 40.7273 36.4381 40.117C36.0595 39.5066 35.3021 39.3846 34.671 39.6287C29.8746 42.3141 23.6898 40.7273 20.9129 36.0889C18.136 31.4505 19.7769 25.4694 24.5733 22.784C29.3697 20.0986 35.5546 21.6854 38.3315 26.3238C39.215 27.7886 39.7199 29.4974 39.7199 31.2063V32.1828C39.7199 33.4035 38.7101 34.38 37.4479 34.38C36.1857 34.38 35.1759 33.4035 35.1759 32.1828V26.9341C35.1759 26.2017 34.671 25.7135 33.9137 25.7135C33.2826 25.7135 32.7777 26.0797 32.6515 26.69C30.1271 24.9811 26.4666 25.5914 24.6995 28.0327C22.9324 30.474 23.5635 34.0138 26.088 35.7227C28.4862 37.3095 31.6417 36.9433 33.535 34.8682C35.1759 36.8213 38.079 37.1874 40.0986 35.7227C41.2346 34.8682 41.9919 33.5255 41.9919 32.0608V31.2063C42.2443 24.4929 36.5644 19 29.6222 19ZM29.6222 34.2579C27.8551 34.2579 26.4666 32.9152 26.4666 31.2063C26.4666 29.4974 27.8551 28.1548 29.6222 28.1548C31.3893 28.1548 32.7777 29.4974 32.7777 31.2063C32.7777 32.9152 31.3893 34.2579 29.6222 34.2579Z" fill="#FF0000"/>
</svg>
                                    <h6 className="iconttext" style={{textDecoration:"underline"}}>sprintec.com</h6>
                                </Col>
                                <Col xs="5" md="2" className="Rect Rect-mobile" style={{alignItems:"center"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60Z" fill="#F9D0C7"/>
  <path d="M33.2 25.3803H34.55C34.908 25.3803 35.2514 25.2332 35.5046 24.9712C35.7578 24.7093 35.9 24.354 35.9 23.9836C35.9 23.6132 35.7578 23.2579 35.5046 22.996C35.2514 22.734 34.908 22.5869 34.55 22.5869H33.2C32.842 22.5869 32.4986 22.734 32.2454 22.996C31.9922 23.2579 31.85 23.6132 31.85 23.9836C31.85 24.354 31.9922 24.7093 32.2454 24.9712C32.4986 25.2332 32.842 25.3803 33.2 25.3803ZM33.2 30.9672H34.55C34.908 30.9672 35.2514 30.82 35.5046 30.5581C35.7578 30.2962 35.9 29.9409 35.9 29.5705C35.9 29.2 35.7578 28.8448 35.5046 28.5829C35.2514 28.3209 34.908 28.1738 34.55 28.1738H33.2C32.842 28.1738 32.4986 28.3209 32.2454 28.5829C31.9922 28.8448 31.85 29.2 31.85 29.5705C31.85 29.9409 31.9922 30.2962 32.2454 30.5581C32.4986 30.82 32.842 30.9672 33.2 30.9672ZM26.45 25.3803H27.8C28.158 25.3803 28.5014 25.2332 28.7546 24.9712C29.0078 24.7093 29.15 24.354 29.15 23.9836C29.15 23.6132 29.0078 23.2579 28.7546 22.996C28.5014 22.734 28.158 22.5869 27.8 22.5869H26.45C26.092 22.5869 25.7486 22.734 25.4954 22.996C25.2422 23.2579 25.1 23.6132 25.1 23.9836C25.1 24.354 25.2422 24.7093 25.4954 24.9712C25.7486 25.2332 26.092 25.3803 26.45 25.3803ZM26.45 30.9672H27.8C28.158 30.9672 28.5014 30.82 28.7546 30.5581C29.0078 30.2962 29.15 29.9409 29.15 29.5705C29.15 29.2 29.0078 28.8448 28.7546 28.5829C28.5014 28.3209 28.158 28.1738 27.8 28.1738H26.45C26.092 28.1738 25.7486 28.3209 25.4954 28.5829C25.2422 28.8448 25.1 29.2 25.1 29.5705C25.1 29.9409 25.2422 30.2962 25.4954 30.5581C25.7486 30.82 26.092 30.9672 26.45 30.9672ZM42.65 42.141H41.3V18.3967C41.3 18.0263 41.1578 17.671 40.9046 17.4091C40.6514 17.1472 40.308 17 39.95 17H21.05C20.692 17 20.3486 17.1472 20.0954 17.4091C19.8422 17.671 19.7 18.0263 19.7 18.3967V42.141H18.35C17.992 42.141 17.6486 42.2881 17.3954 42.5501C17.1422 42.812 17 43.1672 17 43.5377C17 43.9081 17.1422 44.2634 17.3954 44.5253C17.6486 44.7873 17.992 44.9344 18.35 44.9344H42.65C43.008 44.9344 43.3514 44.7873 43.6046 44.5253C43.8578 44.2634 44 43.9081 44 43.5377C44 43.1672 43.8578 42.812 43.6046 42.5501C43.3514 42.2881 43.008 42.141 42.65 42.141ZM31.85 42.141H29.15V36.5541H31.85V42.141ZM38.6 42.141H34.55V35.1574C34.55 34.7869 34.4078 34.4317 34.1546 34.1697C33.9014 33.9078 33.558 33.7606 33.2 33.7606H27.8C27.442 33.7606 27.0986 33.9078 26.8454 34.1697C26.5922 34.4317 26.45 34.7869 26.45 35.1574V42.141H22.4V19.7934H38.6V42.141Z" fill="#FF0000"/>
</svg>
                                    <h6 className="iconttext">Started in 2010</h6>
                                </Col>
                                <Col xs="12" md="5" className="Rect ">
                                    <div className="d-flex justify-content-center align-items-baseline"><span className="greenTick"><img src={greentick} alt="tick"/></span><h6 className="bubble mx-3">Remote Work Opps</h6></div>
                                    <div className="d-flex justify-content-center align-items-baseline"><span><img src={greentick} alt="tick"/></span>  <h6 className="bubble mx-3">Retirement Benefits</h6></div>
                                    <div className="d-flex justify-content-center align-items-baseline"><span><img src={greentick} alt="tick"/></span> <h6 className="bubble mx-3">Parental Leaves</h6></div>
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
                                    <Col xs={7} md={8}>
                                        <h4 className="header-card">Why work here?</h4>
                                    </Col>
                                    <Col xs={5} md={4} className="text-right">
                                        <Button className="companyPage-seemore px-4 pt-2 pb-3" style={{backgroundColor:"#FCEEBE"}} onClick={() => setShowMore((prev)=>({...prev, why:!showMore.why}))}>
                                            {showMore.why ? "See Less" : "See More"}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="infoCard">
                                    <Col xs="2" md="2" className="header-section">
                                        <img src={flexibility} alt="flex" className="icono"/>
                                    </Col>
                                    <Col xs='10' className="">
                                    <h3 className="subhead">Flexibility</h3>
                                        <p>We offer flexible work arrangements, including options for remote work and flexible hours. We trust our team members to manage their schedules effectively, allowing you to excel both professionally and personally.</p>
                                    </Col>
                                </Row>
                                {showMore.why && (
                                    <>
                                        <Row className="infoCard">
                                        <Col xs="2" md="2" className="header-section">
                                                <img src={flexibility} alt="flex" className="icono"/>
                                         </Col>
                                            <Col className="text-section">
                                            <h3 className="subhead">Remote Opportunities</h3>
                                                <p>We provide opportunities for remote work to ensure our team can work in the environment that suits them best, promoting a healthy work-life balance and increased productivity.</p>
                                            </Col>
                                        </Row>
                                        <Row className="infoCard">
                                            <Col xs="2" md="2" className="header-section">
                                                <img src={flexibility} alt="flex" className="icono"/>
                                            </Col>
                                            <Col className="text-section">
                                            <h3 className="subhead">Career Growth</h3>
                                                <p>We support the career growth of our team members through various professional development opportunities, training programs, and mentorship to help you navigate your career path.</p>
                                            </Col>
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
                                    <Button  className="companyPage-seemore px-4 pt-2 pb-3" style={{backgroundColor:"#DAD7FE"}}  onClick={() => setShowMore((prev)=>({...prev, look:!showMore.look}))}>
                                        {showMore.look ? "See Less" : "See More"}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="infoCard">
                                <Col xs="2" md="2" className="header-section">
                                    <img src={graph} alt="flex" className="icono"/>
                                </Col>
                                <Col className="text-section">
                                <h3 className="subhead">Passion for Technology</h3>
                                    <p> We seek individuals who are genuinely enthusiastic about
                                        technology and its transformative potential. A deep interest
                                        in staying updated with industry trends and a hunger
                                        for continuous learning are highly regarded.</p>
                                </Col>
                            </Row>
                            {showMore.look && (
                                <>
                                    <Row className="infoCard">
                                        <Col xs="2" md="2" className="header-section">
                                            <img src={graph} alt="flex" className="icono"/>
                                        </Col>
                                        <Col className="text-section">
                                        <h3 className="subhead">Passion for Technology</h3>
                                            <p> We seek individuals who are genuinely enthusiastic about
                                                technology and its transformative potential. A deep interest
                                                in staying updated with industry trends and a hunger
                                                for continuous learning are highly regarded.</p>
                                        </Col>
                                    </Row>
                                    <Row className="infoCard">
                                        <Col xs="2" md="2"className="header-section">
                                            <img src={graph} alt="flex" className="icono"/>
                                        </Col>
                                        <Col className="text-section">
                                        <h3 className="subhead">Passion for Technology</h3>
                                            <p> We seek individuals who are genuinely enthusiastic about
                                                technology and its transformative potential. A deep interest
                                                in staying updated with industry trends and a hunger
                                                for continuous learning are highly regarded.</p>
                                        </Col>
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
                                        <Button className="companyPage-seemore px-4 pt-2 pb-3" style={{backgroundColor:"#FFE5D3"}} onClick={() => setShowMore((prev)=>({...prev, like:!showMore.like}))}>
                                            {showMore.like ? "See Less" : "See More"}
                                        </Button>
                                    </Col>
                                </Row>
                                <Row className="infoCard">
                                    <Col xs="2" md="2" className="header-section">
                                        <img src={people} alt="flex" className="icono"/>
                                    </Col>
                                    <Col className="text-section">
                                    <h3 className="subhead">Approachable Leadership</h3>
                                        <p>We believe in open-door policies, where you can readily connect with leadership to share your ideas, concerns, and feedback. Our management team actively seeks to build strong relationships with employees.</p>
                                    </Col>
                                </Row>
                                {showMore.like && (
                                    <>
                                        <Row className="infoCard">
                                            <Col xs="2" md="2" className="header-section">
                                                <img src={people} alt="flex" className="icono"/>
                                            </Col>
                                            <Col className="text-section">
                                                <h3 className="subhead">Passion for Technology</h3>
                                                <p>We seek individuals who are genuinely enthusiastic about technology and its transformative potential. A deep interest in staying updated with industry trends and a hunger for continuous learning are highly regarded.</p>
                                            </Col>
                                        </Row>
                                        <Row className="infoCard">
                                            <Col xs="2" md="2" className="header-section">
                                                <img src={people} alt="flex" className="icono"/>
                                            </Col>
                                            <Col className="text-section">
                                                <h3 className="subhead">Continuous Learning</h3>
                                                <p>Our team is encouraged to pursue further education and training. We provide resources and time for you to explore new technologies, methodologies, and frameworks to stay at the forefront of the industry.</p>
                                            </Col>
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
                                    <p className="parahCen mb-4"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress progress={80} circleColor="#ffb9c6" percentageColor="#ee2c5b"/>

                                </Row>
                            </Col>

                            <Col    className="GraphCard" >
                                <Row>
                                    <p className="parahCen mb-4"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress progress={95} circleColor ="#CCF8FE" percentageColor="#02A0FC" />

                                </Row>
                            </Col>

                            <Col    className="GraphCard" >
                                <Row>
                                    <p className="parahCen mb-4"> <i> “My co-workers were friendly and I feel included and welcome
                                        in my team”
                                    </i></p></Row>

                                <Row>
                                    <CircularProgress progress={90} circleColor="#FFF8D3" percentageColor="#FFD029"/>

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
                                    <Button className="companyPage-seemore px-4 pt-2 pb-3" style={{backgroundColor:"#F6B5A8"}} onClick={() => setShowMore((prev)=>({...prev,only:!showMore.only}))}>
                                        {showMore.only ? "See Less" : "See More"}
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="infoCard">
                                <Col xs="2" md="2" className="header-section">
                                    <img src={people} alt="flex" className="icono"/>
                                </Col>
                                <Col className="text-section">
                                    <h3 className="subhead">WellWom Wellness</h3>
                                    <p>the WellWom Program offers resources and support for physical, emotional, and mental well-being. From on-site yoga and meditation sessions to workshops on women's health issues,...</p>
                                </Col>
                            </Row>
                            {showMore.only && (
                                <>
                                    <Row className="infoCard">
                                        <Col xs="2" md="2" className="header-section">
                                            <img src={people} alt="flex" className="icono"/>
                                        </Col>
                                        <Col className="text-section">
                                        <h3 className="subhead">Passion for Technology</h3>
                                            <p>We seek individuals who are genuinely enthusiastic about technology and its transformative potential. A deep interest in staying updated with industry trends and a hunger for continuous learning are highly regarded.</p>
                                        </Col>
                                    </Row>
                                    <Row className="infoCard">
                                        <Col xs="2" md="2" className="header-section">
                                            <img src={people} alt="flex" className="icono"/>
                                        </Col>
                                        <Col className="text-section">
                                            <h3 className="subhead">Continuous Learning</h3>
                                            <p>We foster an environment that encourages continuous learning and development. Our team members are motivated to explore new technologies, methodologies, and approaches to enhance their skills and our collective knowledge.</p>
                                        </Col>
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