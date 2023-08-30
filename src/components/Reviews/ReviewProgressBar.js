import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./ReviewProgressBar.css";
import { Row, Col } from "react-bootstrap";
import logo from "../../Assets/logo.png";

function ReviewProgressBar(props) {
  return (
    <div className="progress-container">
      <Row className="fixed-top pt-2">
        <Col md={10} xs={8}>
          <img src={logo} alt="brand" className="logo" />
        </Col>
        <Col md={2} xs={4}>
          <button className="progress-btn py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="close"
              width="36"
              height="36"
            >
              <path
                d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
                fill="#ee2c5b"
              ></path>
            </svg>
          </button>
        </Col>
      </Row>
      <ProgressBar
        className="ProgressBar"
        percent={props.percent}
        filledBackground="linear-gradient(to right, #ee2c5b, #ee2c5b)"
        unfilledBackground="linear-gradient(to right,#f2b1aa, #f2b1aa)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className="step-container">
              <div
                className={`step-number ${
                  props.percent > 0 ? "active" : "inactive"
                }`}
              >
                1
              </div>
              <div
                className={`step-label ${
                  props.percent > 0 ? "step-label-active" : "inactive"
                }`}
              >
                Company Information
              </div>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className="step-container">
              <div
                className={`step-number ${
                  props.percent >= 35 ? "active" : "inactive"
                }`}
              >
                2
              </div>
              <div
                className={`step-label ${
                  props.percent >= 35 ? "step-label-active" : "inactive"
                }`}
              >
                Your Expierence
              </div>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className="step-container">
              <div
                className={`step-number ${
                  props.percent >= 65 ? "active" : "inactive"
                }`}
              >
                3
              </div>
              <div
                className={`step-label ${
                  props.percent >= 65 ? "step-label-active" : "inactive"
                }`}
              >
                your Review
              </div>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className="step-container">
              <div
                className={`step-number ${
                  props.percent === 100 ? "active" : "inactive"
                }`}
              >
                4
              </div>
              <div
                className={`step-label ${
                  props.percent === 100 ? "step-label-active" : "inactive"
                }`}
              >
                Done
              </div>
            </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default ReviewProgressBar;