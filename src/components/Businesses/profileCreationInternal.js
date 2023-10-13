import React, { useState } from 'react';
import {Form, Button, Container, ProgressBar, Row, Col} from 'react-bootstrap';
import "./survey.css";
const Survey = () => {
    const [formData, setFormData] = useState({
                                                 companyName: '',
                                                 name: '',
                                                 email: '',
                                                 website: '',
                                                 hq: '',
                                                 offices: '',
                                                 organizationSize: '',
                                                 industry: '',
                                                 overview: '',
                                                 hiring: '',
                                                 culture: '',
                                                 topChoice: '',
                                                 policies: '',
                                                 addInfo: '',
                                                 more: '',
                                                 workplaceOffers: {
                                                     flexibleHours: false,
                                                     workFromHome: false,
                                                     profDevPrograms: false,
                                                     // ... other checkboxes
                                                     parentalLeave: false,
                                                     childcareSupport: false,
                                                     divInclusionPrograms: false,
                                                     retirementPlans: false,
                                                     contEducationSupport: false,
                                                     employeeDiscounts: false,
                                                     commuteAssistance: false,
                                                     menstrualLeaves: false,
                                                     mentalHealthLeaves: false,
                                                     stockOptions: false

                                                 },
                                                 otherSpecify: ''
                                             });

    const totalSteps = 16; // Total number of steps in your form

    const calculateProgress = () => {
        // Count how many of the main form fields are not empty
        const filledFields = Object.keys(formData).filter(key => formData[key] !== '').length;
        // Calculate the percentage of filled fields
        const progress = (filledFields / totalSteps) * 100;
        return progress;
    };
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
                        ...formData,
                        workplaceOffers: {
                            ...formData.workplaceOffers,
                            [name]: checked
                        }
                    });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
                        ...formData,
                        [name]: value
                    });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
                        ...formData,
                        [name]: value
                    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };
    const ProgressBar = ({ now }) => (
        <div className="progress-bar-container">
            <div
                className="progress-bar"
                style={{ width: `${now}%` }}
            >
                {Math.round(now)}%
            </div>
        </div>
    );

    return (

        <div className="cent">

        <div className="box">
            <Container className="screenContain">

                <h1 style={{fontSize:"2.5rem",
                fontWeight:"600",
                color:"rgba(196,0,47,0.83)"}}>Businesses @ FindHer</h1>

                <ProgressBar now={calculateProgress()} />

                <Row className="full-width">
                <Form onSubmit={handleSubmit}>


                <Form.Group controlId="companyName"
                className="formgrp">
                    <Form.Label>1. What is your company name?</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        style={{resize: "vertical"}}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="name" className="formgrp">
                    <Form.Label>2. What is your name?</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{resize: "vertical"}}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="email" className="formgrp">
                    <Form.Label>3. What is your email?</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="website" className="formgrp">
                    <Form.Label>4. Link to their website</Form.Label>
                    <Form.Control
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="hq" className="formgrp">
                    <Form.Label>5. Enter where you're headquartered</Form.Label>
                    <Form.Control
                        type="text"
                        name="hq"
                        value={formData.hq}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="offices" className="formgrp">
                    <Form.Label>6. Cities that have their offices</Form.Label>
                    <Form.Control
                        type="text"
                        name="offices"
                        value={formData.offices}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="organizationSize" className="formgrp">
                    <Form.Label>7. What is the size of your organization?</Form.Label>
                    <Form.Control
                        as="select"
                        name="organizationSize"
                        value={formData.organizationSize}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select size of organization</option>
                        <option value="1-10">1-10 Employees</option>
                        <option value="11-50">11-50 Employees</option>
                        <option value="51-200">51-250 Employees</option>
                        <option value="201-1000">250+ Employees</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="industry" className="formgrp">
                    <Form.Label>8. What industry does your organization belong to?</Form.Label>
                    <Form.Control
                        as="select"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select industry</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Consulting & Professional Services">Consulting & Professional Services</option>
                        <option value="Legal">Legal</option>
                        <option value="Marketing and Advertising">Marketing and Advertising</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education">Education</option>
                        <option value="Event Management">Event Management</option>
                        <option value="Hospitality">Hospitality</option>
                        <option value="Retail">Retail</option>
                        <option value="Transportation and Logistics">Transportation and Logistics</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Environmental Services">Environmental Services</option>
                        <option value="B2B">B2B</option>
                        <option value="Consumer">Consumer</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="overview" className="formgrp">
                    <Form.Label>9. What is the brief overview of your company? <i>eg: origin story, products or services offered, team, mission, vision, etc.</i></Form.Label>
                    <Form.Control
                        as="textarea"
                        name="overview"
                        value={formData.overview}
                        onChange={handleChange}
                        style={{resize: "vertical"}}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="hiring" className="formgrp">
                    <Form.Label>10. What are three things you look for in applicants when hiring:</Form.Label>
                    <Form.Control
                        type="text"
                        name="hiring"
                        value={formData.hiring}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="culture" className="formgrp">
                    <Form.Label>11. What three words to describe your work culture. Your company is an ideal fit if women seek a workplace that:</Form.Label>
                    <Form.Control
                        type="text"
                        name="culture"
                        value={formData.culture}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="qualities" className="formgrp">
                    <Form.Label>12. Here are three standout qualities that make you a great place to work:</Form.Label>
                    <Form.Control
                        type="text"
                        name="qualities"
                        value={formData.qualities}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="policies" className="formgrp">
                    <Form.Label>13. Briefly outline any policies and benefits that you offer to your female employees. This could include policies related to work-life balance, professional development, diversity and inclusion, health and safety, etc.</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="policies"
                        value={formData.policies}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Label
                className="formgrp">14. Your workplace offers:</Form.Label>

                <Row className="checker">
                    <Col>
                        <Form.Check
                            type="checkbox"
                            label="Flexible Work Hours"
                            name="flexibleHours"
                            checked={formData.workplaceOffers.flexibleHours}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="Work-from-Home Opportunities"
                            name="workFromHome"
                            checked={formData.workplaceOffers.workFromHome}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="Professional Development Programs"
                            name="profDevPrograms"
                            checked={formData.workplaceOffers.profDevPrograms}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="Parental Leave Policies"
                            name="parentalLeave"
                            checked={formData.workplaceOffers.parentalLeave}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="Childcare Facilities or Support"
                            name="childcareSupport"
                            checked={formData.workplaceOffers.childcareSupport}
                            onChange={handleCheckboxChange}
                        />

                        <Form.Check
                            type="checkbox"
                            label="Diversity and Inclusion Programs"
                            name="divInclusionPrograms"
                            checked={formData.workplaceOffers.divInclusionPrograms}
                            onChange={handleCheckboxChange}
                        />
                        <Form.Check
                            type="checkbox"
                            label="Employee Discounts"
                            name="employeeDiscounts"
                            checked={formData.workplaceOffers.employeeDiscounts}
                            onChange={handleCheckboxChange}
                        />



                    </Col>
         <Col>

             <Form.Check
                 type="checkbox"
                 label="Commute Assistance"
                 name="commuteAssistance"
                 checked={formData.workplaceOffers.commuteAssistance}
                 onChange={handleCheckboxChange}
             />

                <Form.Check
                    type="checkbox"
                    label="Continuing Education Support"
                    name="contEducationSupport"
                    checked={formData.workplaceOffers.contEducationSupport}
                    onChange={handleCheckboxChange}
                />

                <Form.Check
                    type="checkbox"
                    label="Retirement Plans and Benefits"
                    name="retirementPlans"
                    checked={formData.workplaceOffers.retirementPlans}
                    onChange={handleCheckboxChange}
                />


                <Form.Check
                    type="checkbox"
                    label="Menstrual Leaves"
                    name="menstrualLeaves"
                    checked={formData.workplaceOffers.menstrualLeaves}
                    onChange={handleCheckboxChange}
                />

                <Form.Check
                    type="checkbox"
                    label="Mental Health Leaves"
                    name="mentalHealthLeaves"
                    checked={formData.workplaceOffers.mentalHealthLeaves}
                    onChange={handleCheckboxChange}
                />

                <Form.Check
                    type="checkbox"
                    label="Employee Stock Options"
                    name="stockOptions"
                    checked={formData.workplaceOffers.stockOptions}
                    onChange={handleCheckboxChange}
                />

                <Form.Check
                    type="checkbox"
                    label="Other (please specify)"
                    name="other"
                    checked={formData.workplaceOffers.other}
                    onChange={handleCheckboxChange}
                />
             <Form.Control
                 type="text"
                 name="otherSpecify"
                 value={formData.otherSpecify}
                 onChange={handleInputChange}
                 placeholder="Please specify"
             />

         </Col>
                    </Row>

                <Form.Group controlId="addInfo" className="formgrp">
                    <Form.Label>15. What's the best way for potential applicants to hear about you?</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="addInfo"
                        value={formData.addInfo}
                        onChange={handleChange}
                        style={{resize: "vertical"}}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="more" className="formgrp">
                    <Form.Label>16. Is there any additional information you'd like to provide to prospective female applicants?</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="more"
                        value={formData.more}
                        onChange={handleChange}
                        style={{resize: "vertical"}}

                    />
                </Form.Group>



                <Button
                    className ="submitbutton"
                    type="submit">Submit</Button>
            </Form>
                </Row>
        </Container>
        </div>
    </div>
    );
};

export default Survey;
