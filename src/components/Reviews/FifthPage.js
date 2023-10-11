import React, {useState} from 'react';
import {Button, Container, Form, Row} from 'react-bootstrap';
import "./reviewStyles.css";
import {useNavigate} from "react-router-dom";
import NavbarContext from "../NavbarContext";
import ReactTooltip from "react-tooltip";
import ReviewProgressBar from "./ReviewProgressBar";
import {DropdownBox} from './DropdownBox'
import { usePageTimeTracker } from '../../ReusableFunctions/usePageTimeTracker';
import { useCsrfToken } from '../../CsrfTokenProvider';
const isSafariOrMac = () => {
    const ua = window.navigator.userAgent;
    return /^((?!chrome|android).)*safari/i.test(ua);
}



const FifthPage = () => {

  const csrfToken = useCsrfToken();

  const thirdPageTime= usePageTimeTracker();
  const [questionOne, setQuestionOne] = useState({
    question: "",
    answer: "",
    wordsCount:false
  });
  const [questionTwo, setQuestionTwo] = useState({
    question: "",
    answer: "",
    wordsCount:false
  });

    // within your component
    const navigate = useNavigate();
    const navbarHeight = React.useContext(NavbarContext);

    const companyName =  localStorage.getItem('companyName'); // Placeholder for company name

    const containerStyle = isSafariOrMac()
                           ? {minHeight: "100vh", paddingTop: navbarHeight}
                           : {minHeight: "130vh"};


    const handleSubmit = async (e) => {
        e.preventDefault();

        const questionOneWords = questionOne.answer.split(/\s+/).filter((word) => word !== "");
        if (questionOneWords.length < 50) {
          setQuestionOne((prevState) => ({
            ...prevState,
            wordsCount: true
          }));
          console.error('Question One answer does not have at least 50 words.');
          return;
        }
        else{
          setQuestionOne((prevState) => ({
            ...prevState,
            wordsCount: false
          }));
        }
      
        // Check the word count of questionTwo's answer
        const questionTwoWords = questionTwo.answer.split(/\s+/).filter((word) => word !== "");
        if (questionTwoWords.length < 50) {
          setQuestionTwo((prevState) => ({
            ...prevState,
            wordsCount: true
          }));
          console.error('Question Two answer does not have at least 50 words.');
          return;
        }
        else{
          setQuestionTwo((prevState) => ({
            ...prevState,
            wordsCount: false
          }));
        }
      

        // Get the reviewId and token from local storage
        const reviewId = localStorage.getItem('reviewId');
        const token = localStorage.getItem('token');
        if (!reviewId || !token) {
            console.error('No reviewId or token found. Please log in.');
            return;
        }

        const payload = {
            reviewId,
            questionOne,
            questionTwo,
            thirdPageTime
        };

    

        try {
            const response = await fetch(process.env.REACT_APP_URL+'updateReviewDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    "X-CSRF-Token" : csrfToken,
                },
                credentials: "include",
                body: JSON.stringify(payload),
            });
  
            if (response.ok) {
                const result = await response.json();
                console.log(result);

                // Navigate to the next page if needed
                navigate('/reviews_five');
            } else {
                const errorMessage = await response.text();
                console.error(errorMessage);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

  const questionSetOne = [
    "Can you share an example of a flexible work arrangement you've experienced at this company?",
    "Tell us about a time when the company took constructive action based on employee feedback.",
    "Describe an occasion where the company supported employees during challenging times or personal situations.",
    "Share an instance when the company demonstrated its commitment to diversity and inclusion.",
    "Tell us about the non-financial benefits that this company provides.",
    "What is your favorite workplace tradition?",
    "How does the company accommodate employees' work-life balance needs?",
    "Share an instance when you witnessed the company promoting mentorship or professional guidance.",
    "What steps does the company take to ensure a safe and inclusive work environment?",
    "Tell us about a situation where the company demonstrated a commitment to the community or prioritizing employee’s needs.",
    "How does the company create opportunities for career advancement and networking?",
    "Describe a memorable moment where you felt supported and valued by your team or colleagues."
  ];
  
  const questionSettwo =  [
    "Can you think of an occasion when the company did not accommodate your flexibility requests?",
    "Has there ever been a time when you felt the company did not take appropriate action in response to an issue raised by employees?",
    "Have you ever felt discriminated against because of your gender?",
    "Are women fairly represented in your team?",
    "Have you ever felt like you weren’t fairly compensated for your work?",
    "Can you recall an instance where you felt you experienced a lack of support from your co-workers and management?",
    "How often do you feel you face challenges in achieving work-life balance at this workplace?",
    "Can you think of an instance when your managers made a decision that negatively affected employee morale or motivation?",
    "Have you or your female colleagues ever felt uncomfortable due to the behavior of male employees, feeling that the workplace did not sufficiently prioritize your safety?",
    "Do you think that this company lacks women in leadership positions?",
    "Do you feel that the company's appraisal system doesn't adequately reflect the efforts and contributions of its employees?",
    "Has there ever been a time when you felt the company did not prioritize employee well-being adequately?"
  ];

    return (
      <div>
        <ReviewProgressBar percent={50} />
        <Container className="sub" style={containerStyle}>
          <Row className="reviews-box fifth-review-row">
            <h1 className="review-five-head px-3">
              Tell us your experience at <span style={{ color: "#ee2c5b" }}>{companyName}</span>
            </h1>
            <h5 className="review-four-head-h5 px-3" style={{ marginBottom: "3%" }}>
            We'd love to hear your stories and testimonials!
            </h5>
            <Form onSubmit={handleSubmit}>
              <DropdownBox questions={questionSetOne} value={questionOne} reponse={setQuestionOne}/>  
              <DropdownBox questions={questionSettwo} value={questionTwo} reponse={setQuestionTwo}/>  
              <Row className='d-flex justify-content-center'>

                <Button
                  type="submit"
                  className="button-sub-review button-review-five"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="By submitting, you consent to us utilizing
                 your feedback anonymously to gather and
                 display workplace insights."
                >
                  Next
                </Button>
              </Row>
              <button className="right-review-arrow desktop-view" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle cx="25" cy="25" r="25" fill="#F6B5A8" />
              <path
                d="M23 17L31 24.5L23 32"
                stroke="#EE2C5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="left-review-arrow desktop-view" 
          onClick={()=>navigate('/reviews_three')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                transform="matrix(-1 0 0 1 50 0)"
                fill="#F6B5A8"
              />
              <path
                d="M27 17L19 24.5L27 32"
                stroke="#EE2C5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
            </Form>
            <ReactTooltip id="FifthSubmit" place="right" effect="solid" />
          </Row>

        </Container>
      </div>
    );
};

export default FifthPage;
