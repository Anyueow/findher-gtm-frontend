// JobDetailsModal.js
import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import "./CSS/Programs.css";



const JobDetailsModal = ({ job, onClose, onSwipeLeft, onSwipeRight }) => {
    if (!job) return null; // If no job data, don't render anything


    return (
        <Modal show={true} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="modalcss">
                <Row>
                    <Col>
                        <h1 className="jobtitlecard">{job.title} @{job.company}</h1>
                        <hr className="line-separator-job-box" />
                        <p className="SubJobtitle">{job.type} • {job.location}</p>
                    </Col>
                </Row>
                <Row className="BubbleHolderRow">
                    {job.categories.map((category, index) => (
                        <p key={index} className="bubbleHighlight">{category}</p>
                    ))}
                </Row>
                <Row className="informationaboutjob">
                    <h3 className="othertitlecard">Top 3 Responsibilities On-Job:</h3>
                    <hr className="line-separator-job-box" style={{width:"40%", marginBottom:"3%"}} />
                    <ul>
                        {job.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </Row>
                <Row className="informationaboutjob">
                    <h3 className="othertitlecard">Top 3 skills Required:</h3>
                    <hr className="line-separator-job-box" style={{width:"40%", marginBottom:"3%"}} />
                    <ul>
                        {job.skills.map((skill, index) => (
                            <li key={index} style={{lineHeight:"2rem"}}>
                                <span className="highlightskills">{skill.name}</span> {skill.description}
                            </li>
                        ))}
                    </ul>
                </Row>


            </Modal.Body>
            <Modal.Footer>

                <Button variant="outline-success" onClick={() => onSwipeLeft()}>Previous</Button>
                <Button variant="outline-info" onClick={() => onSwipeRight()}>Next</Button>

                <Col style={{justifyContent:"flex-end"}}>
                <Button variant="primary" style={{width:"100%"}}
                        onClick={() => window.open('https://airtable.com/appbWBtB4y2MRltIZ/shrHIGlMWk2nDbrO6',
                                                   '_blank')}>Apply Now</Button> </Col>

            </Modal.Footer>
        </Modal>
    );
};

export default JobDetailsModal;
