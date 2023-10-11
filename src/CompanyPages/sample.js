import React from "react";
import "./samplestyle.css";
import img from "./images-4.jpeg";
import {Col, Row} from "react-bootstrap";
export const Sample = () => {
    return (
        <div className="macbook-air">
            <div className="Box">
                <Row>
                <Col>
                <img src={img} alt="profile pic"/>
                </Col>
                    <Col>
                        <h1> Sprintex </h1>
                        <h4> Mumbai, Maharashtra</h4>
                        <h4> Telecommunications </h4>
                        <h4> 15-50 Employees </h4>
                    </Col>
                </Row>

            </div>
            <div className="div-4">

                <h1 className="sprintex-inc-is-a">
                    Sprintex Inc. is a leading Information
                    Technology consulting firm. We specialize in providing expert
                    guidance and innovative solutions to businesses seeking to harness
                    the full potential of technology. Whether it's streamlining operations,
                    optimizing IT infrastructure, or implementing strategic digital initiatives,
                    Sprintex Inc. offers tailored consulting services that drive efficiency,
                    innovation, and sustainable growth.
                </h1>

                <div className="overlap-4">
                    <p className="flexibility-we-offer">
                        <span className="span">Flexibility:</span> We offer flexible work arrangements, including options for remote work and flexible hours. We trust our team members to manage their schedules effectively, allowing you to excel both professionally and personally.
                        <span className="span">Employee Resource Groups (ERGs):</span> We have established Employee Resource Groups. These groups provide a platform for employees with shared interests or backgrounds to connect, collaborate, and drive positive change within our organization.
                        <span className="span">Wellness Initiatives:</span> Sprintex Inc. goes the extra mile to promote a healthy and thriving workforce. We offer comprehensive wellness programs that encompass physical, mental, and emotional health. From yoga and fitness classes to mental health resources and counseling.
                    </p>
                    <p className="approachable">
                        <span className="span">Approachable Leadership: </span> We believe in open-door policies, where you can readily connect with leadership to share your ideas, concerns, and feedback. Our management team actively seeks to build strong relationships with employees.
                        <span className="span">Inclusive Workforce: </span> Inclusivity is not just a buzzword for us; it's a core value. We actively seek talent from all backgrounds and perspectives because we believe that diversity drives innovation.
                        <span className="span">Innovative Mindset:</span> Here, creativity and fresh ideas are not just encouraged but celebrated. We believe in pushing boundaries, experimenting, and learning from both successes and failures. At Sprintex Inc., you'll be part of a dynamic team that thrives on innovation.
                    </p>
                    <p className="p">What it’s like to work here</p>
                </div>
                <p className="passion-for">
                    <span className="span">Passion for Technology:</span> We seek individuals who are genuinely enthusiastic about technology and its transformative potential. A deep interest in staying updated with industry trends and a hunger for continuous learning are highly regarded.
                    <span className="span">Problem-Solving Skills: </span> In the fast-paced world of IT, problem-solving is crucial. We look for candidates who can approach challenges creatively and find effective solutions, whether it's debugging code or optimizing system performance.
                    <span className="span">Strong Team Player:</span> Collaboration is at the heart of our work. We value applicants who can work seamlessly within a team, communicate effectively, and contribute positively to a collaborative environment.
                </p>
                <div className="text-wrapper-12">Why work for them</div>
                <div className="text-wrapper-13">What they look for</div>
                <div className="overlap-6">
                    <div className="information">
                        Information Technology
                        <br />
                        50-250 Employees
                        <br />
                        www.sprintex.inc
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sample;
