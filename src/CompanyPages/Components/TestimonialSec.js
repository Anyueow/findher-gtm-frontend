import React from 'react';
import "./CSS/Testimonial.css";
import { Row, Col,Toast, Form, Button} from "react-bootstrap";

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
          <text x="60" y="50" textAnchor="middle" dy=".3em" fontSize="18">
          <tspan dy="0.3em">{`${progress}%`}</tspan>
      <tspan x="60" dy="1.2em">Agree</tspan>
          </text>
      </svg>
  );
};

// const StarRating = ({ rating }) => {
//   const filledStars = "★".repeat(rating);
//   const emptyStars = "☆".repeat(5 - rating);
//
//   return (
//       <p style={{ fontSize: '24px', margin: '0', color: "yellowgreen", borderRadius: "5px" }}>
//           {filledStars}{emptyStars}
//       </p>
//   );
// };

const Testimonial = ({ testimonial }) => {


  return (
      <Col className="testimonial-content">
          <p className="company-details-para px-4" style={{fontStyle:"italic"}}>
              {testimonial.comment}
          </p>

          <p className="tinyBub">{testimonial.type}</p>

      </Col>
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
      type: "Growth",
      comment: "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
      rating: 5,
  },
];

function TestimonialSec(props) {
  return (
    <div className="" style={{paddingLeft:"5%"}}>
                    <div className="check-blur">
                    {!props.isLogedIn && !props.isGuest  && <div className="blur-company-details" id="guest-profile-login-toast-id">
                        <div className="mt-5"><Toast className="guest-profile-login-toast"
                                                     style={{marginTop:"9%"}}>
        <Toast.Body className="" >
          <br />
          <Row >
                  <Form
                    onSubmit={props.handleSubmit}
                    className="form-wrapper-guest-profile"
                  >
                    <p>To view more, enter your <span>details</span> below</p>
                    <br/>
                    <Row className="form-grp-name">
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="firstName" 
                            type="text"
                            placeholder="First Name"
                            value={props.guestProfile.firstName}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={props.guestProfile.lastName}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <br/>
                    <Row className="form-grp-name">
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="email" 
                            type="email"
                            placeholder="Email"
                            value={props.guestProfile.email}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col xs="6" className="pe-0">
                        <Form.Group className="">
                          <Form.Control
                            name="phoneNumber"
                            placeholder="Phone"
                            type="text"
                            value={props.guestProfile.phoneNumber}
                            onChange={props.handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <br/>
                    <Form.Group className="form-grp ps-2">
                      <Form.Control
                        name="linkedinProfile" 
                        placeholder="LinkedIn Profile (optional)"
                        type="text"
                        value={props.guestProfile.linkedinProfile}
                        onChange={props.handleInputChange}
                      />
                    </Form.Group>
                     <br/>
                        <Form.Group className="submitGuest">
                          <Button
                            className=""
                            style={{ marginBottom: "3%" }}
                            type="submit"
                          >
                           Submit
                          </Button>
                        </Form.Group>
                  </Form>
                </Row>
        </Toast.Body>
      </Toast>
      </div>
                    </div>}
                    </div>
    <Row className="my-5 px-0 testimonialSec-container" style={{width:"95%"}} >

    <Row className='d-flex'>
    <h2 className="some-title mt-3 ms-5 text-left ">
        How their female employees feel about working here:</h2>

     <Col  className="GraphCard" xs={10} md={5} lg={3}>
            <Col className='my-3'>
                <p className="company-details-para mb-4"
                   style={{fontStyle:"italic"}}> <i> “My co-workers were friendly and I feel included and welcome
                    in my team”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={80} circleColor="#ffb9c6" percentageColor="#ee2c5b"/>
            </Col>
     </Col>
        <Col    className="GraphCard" xs={10} md={5} lg={3}>
            <Col className='my-3'>
                <p className="company-details-para mb-4" style={{fontStyle:"italic"}}> <i>
                    “My managers and are supportive and create healthy work environments”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={95} circleColor ="#CCF8FE" percentageColor="#02A0FC" />

            </Col>
        </Col>

        <Col    className="GraphCard" xs={10} md={5} lg={3} >
            <Col className='my-3'>
                <p className="company-details-para mb-4 my-3"
                   style={{fontStyle:"italic"}}> <i> “I am surrounded by several female co-workers and managers”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={90} circleColor="#FFF8D3" percentageColor="#FFD029"/>

            </Col>
        </Col>



    </Row>


 </Row>

    {/* Second div */}

    {/* <Row className="section ms-3 mb-5"  style={{width:"95%"}}> */}
                    <Row className="infoBox-rating-sec d-flex justify-content-center mb-4"
                         style={{width:"95%"}}>
                        <h4 className="some-title mt-3 ms-5 text-left "
                        style={{marginBottom:"3%"}}>
                            What they have to say:</h4>

                        {testimonials.map((testimonial, index) => (
                            <Col md={6} xs={11}  style={{marginBottom:"3%"}}>
                            <Testimonial key={index} testimonial={testimonial} />
                            </Col>
                        ))}
                    </Row>

                 {/* </Row> */}
 </div>
  )
}

export default TestimonialSec
