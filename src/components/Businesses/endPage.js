import React from "react";
import {Button, Container, Row} from 'react-bootstrap';

import "./bizzstyles.css";




export const EndPage = () => {



    return (
        <Container className="sub">

            <Row className="reviews-box" >


            <h1 className="head-name4">
                Thank you for <span className="pink"> sharing! </span>
            </h1>
            <h5 className="para">
                You are on our <span className="strong pink">waitlist </span>
                and will be among the <strong> first </strong> to access our platform when we launch.

                In the meantime, we’re building
                to make job information accessible to more women.</h5>
            <h2 className="para">

                If you want to co-create with us, here’s how you can join our journey :  </h2>

            <Row >

                <Button className="chk-bttn"> 1. Share us with 1 other Business who you think might benefit 👯‍</Button>
                <Button className="chk-bttn"> 2. Schedule a research call with us ☎️</Button>
                <Button className="chk-bttn"> 3. Reach out to find other ways to align 💌 </Button>


            </Row>

            </Row>
        </Container>
    );
};

export default EndPage;
