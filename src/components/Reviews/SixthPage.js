import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import "./reviewStyles.css";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { useEffect } from "react";

export const ThirdPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Find all arrow elements and disable them
    const arrowElements = document.querySelectorAll(".react-tooltip-arrow");
    arrowElements.forEach((arrow) => {
      arrow.style.display = "none";
    });
  }, []);
  return (
    <Container className="sub">
      <Row className="reviews-box">
        <h1 className="head-name4">
          Thank you for <span className="pink"> sharing! </span>
        </h1>
        <h2 className="para">
          You are on our <span className="strong pink">waitlist </span>
          and will be among the <strong> first </strong> to access our platform
          when we launch. In the meantime, we’re building to make job
          information accessible to more women.
        </h2>
        <h2 className="para">
          If you want to co-create with us, here’s how you can join our journey
          :{" "}
        </h2>

        <Row>
          <Button
            className="chk-bttn"
            onClick={() => navigate("/reviews_login")}
          >
            {" "}
            1. Leave another review 📨
          </Button>
          <Button className="chk-bttn">
            {" "}
            2. Share us with 1 other woman in your life 👯‍
          </Button>
          <Button className="chk-bttn">
            {" "}
            3. Schedule a research call with us ☎️{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
              data-tip="We're want to create something that is useful for you. Allow us to share more about ourselves and help us understand your experiences by getting on a quick 15-mins call with a member of our team."
              data-for="tooltip1"
              type="button"
            >
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.75-3.25a.75.75 0 1 1-1.5 0V5.25a.75.75 0 0 1 1.5 0V8.75z" />
            </svg>
          </Button>
          <Button className="chk-bttn">
            {" "}
            4. Reach out to find other ways to align 💌{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
              data-tip="If you're passionate about supporting women at work in India, reach out to us. We're excited to explore possible partnerships, opportunities, funding, or simply an insightful conversation!"
              data-for="tooltip2"
              type="button"
            >
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm.75-3.25a.75.75 0 1 1-1.5 0V5.25a.75.75 0 0 1 1.5 0V8.75z" />
            </svg>
          </Button>
        </Row>
      </Row>
      <ReactTooltip id="tooltip1" place="right" effect="solid"/>
      <ReactTooltip id="tooltip2" place="right" effect="solid"/>
    </Container>
  );
};

export default ThirdPage;
