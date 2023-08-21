import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import "./bizzstyles.css";
import { useNavigate } from "react-router-dom";
import NavbarContext from "../NavbarContext";

const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
}

const UpdateBusinessPage = () => {
    const [employeesCount, setEmployeesCount] = useState('');
    const [officeType, setOfficeType] = useState('');
    const [industry, setIndustry] = useState('');
    const [summary, setSummary] = useState('');

    const navigate = useNavigate();
    const navbarHeight = React.useContext(NavbarContext);

    const companyName = "placeholder"; // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? { minHeight: "100vh", paddingTop: navbarHeight }
                           : { minHeight: "130vh", paddingTop: navbarHeight };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const businessId = "your_business_id"; // Replace with your business ID

        const payload = {
            employees_count: employeesCount,
            office_type: officeType,
            industry,
            summary
        };

        try {
            const response = await fetch(`/business/update-details/${businessId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);

                // Navigate to the next page if needed
                navigate('/update_details_two');
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <Container className="sub" style={containerStyle}>
            <Row className="reviews-box"
                 style={{marginTop:"-10%"}}>
                <h1 className="head-name">
                    Tell us more about your office at <b style={{color:"#ee2c5b"}}>{companyName}</b></h1>
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="inputfield">
                        <Form.Label>Number of Employees</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter number of employees"
                            value={employeesCount}
                            onChange={(e) => setEmployeesCount(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Office Type</Form.Label>
                        <Form.Control
                            as="select"
                            value={officeType}
                            onChange={(e) => setOfficeType(e.target.value)}
                        >
                            <option value="" disabled>Select office type</option>
                            <option value="franchise">Franchise</option>
                            <option value="branch">Branch</option>
                            <option value="headquarters">Headquarters</option>
                            <option value="co-working space">Co-working Space</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter industry"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Give us a short overview of your company</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="For example : FindHer is a mission-driven early-stage startup working
                            towards empowering women with more information in their job-search process. "
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" className="button-sub">
                       Next
                    </Button>

                </Form>


            </Row>
        </Container>
);
        };

export default UpdateBusinessPage;
