import React, {useState} from 'react';
import "./CSS/Testimonial.css";
import { Row, Col, Container} from "react-bootstrap";

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
              <button className="tiny my-2" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? "See Less" : "See More"}
              </button>
          )}
          <p className="tinyBub">{testimonial.type}</p>
          <StarRating rating={testimonial.rating} />
      </div>
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

function TestimonialSec() {
  return (
    <>
    <Row className="ms-3 my-4" style={{width:"95%"}} >
    <Container className="infoBox">
    <Row className='d-flex justify-content-around'>
    <h2 className="header-card">
        What women who work here have to say:</h2>
     <Col  className="GraphCard" xs={3}>
            <Col className='my-3'>
                <p className="parahCen mb-4"> <i> “My co-workers were friendly and I feel included and welcome
                    in my team”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={80} circleColor="#ffb9c6" percentageColor="#ee2c5b"/>
            </Col>
     </Col>
        <Col    className="GraphCard" xs={3}>
            <Col className='my-3'>
                <p className="parahCen mb-4"> <i> “My co-workers were friendly and I feel included and welcome
                    in my team”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={95} circleColor ="#CCF8FE" percentageColor="#02A0FC" />

            </Col>
        </Col>

        <Col    className="GraphCard" xs={3} >
            <Col className='my-3'>
                <p className="parahCen mb-4 my-3"> <i> “My co-workers were friendly and I feel included and welcome
                    in my team”
                </i></p></Col>

            <Col className='d-flex justify-content-center mt-3 mb-5'>
                <CircularProgress progress={90} circleColor="#FFF8D3" percentageColor="#FFD029"/>

            </Col>
        </Col>



    </Row>
</Container>

 </Row>

    {/* Second div */}

    <Row className="section ms-3 mb-5"  style={{width:"95%"}}>
                    <Container className="infoBox" style={{width:"80%"}}>
                        {testimonials.map((testimonial, index) => (
                            <Testimonial key={index} testimonial={testimonial} />
                        ))}
                    </Container>

                 </Row>
 </>
  )
}

export default TestimonialSec
