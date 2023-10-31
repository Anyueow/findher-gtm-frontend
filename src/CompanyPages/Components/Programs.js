import React, {useState} from "react";
import "./CSS/Programs.css";
// import people from "../imageAssets/people.png";
import {Row, Col, Toast, Form, Button} from "react-bootstrap";
// import { useSwipeable, Swipeable } from 'react-swipeable';
import Jobmorepopup from "./jobmorepopup"; // for swipe functionality

function Programs(props) {

  // State to keep track of visibility of jobs
  const [seeMore, setSeeMore] = useState(false);

  // Function to toggle visibility
  const toggleColumns = () => {
    setSeeMore(!seeMore);
  };

  // State to keep track of visibility of Resources
  const [seeMoreResources, setSeeMoreResources] = useState(false);

  // Function to toggle visibility
  const toggleColumnsResources = () => {
    setSeeMoreResources(!seeMoreResources);
  };
  // State to keep track of the collapsed status
  const [isCollapsed, setIsCollapsed] = useState(true);

  // The full text that you want to display
  const fullText = "At Sprintex, we envision a world where businesses seamlessly integrate technology into their core processes, fostering growth, efficiency, and success. Our mission is to guide organizations through the evolving digital landscape, ensuring they leverage the most effective and innovative tech solutions to meet their unique challenges and goals.";

  // The text that will be displayed when the content is collapsed
  const displayText = isCollapsed ? `${fullText.substring(0, 150)}...` : fullText;

  // Function to handle the "See More" button click
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // code for job listings expanded
  // State to manage modal visibility
  // const [show, setShow] = useState(false);
  // const [currentJob, setCurrentJob] = useState(null); // To keep track of the selected job

  // Job data could be fetched from an API and stored in state. For simplicity, we're using a static list.

  // State to manage modal visibility and current job
  const [showJobModal, setShowJobModal] = useState(false);
  const [currentJobIndex, setCurrentJobIndex] = useState(null);

  // Mock job data (replace with real data)
  const jobs = [
    {
      title: 'Backend Engineer',
      company: 'Sprintex',
      type: 'Full Time',
      location: 'Remote',
      categories: ['Engineering', '40-60k/month', 'Team collaboration', 'Problem-solving skills', 'Mid-Level (3-7 years exp)', 'Health benefits'],
      responsibilities: [
        'Build and maintain efficient, reusable, and reliable code',
        'Implement performance and quality modules',
        'Help maintain code quality, organization, and automatization',
        'Collaborate with a cross-functional team to define, design, and ship new features',
      ],
      skills: [
        { name: 'Node.js', description: 'Strong proficiency with JavaScript and Node.js development' },
        { name: 'Database Management', description: 'Experience with MongoDB/SQL and database performance tuning' },
        { name: 'API Development', description: 'Experience in building scalable RESTful APIs' },
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Sprintex',
      type: 'Contract',
      location: 'On site',
      categories: ['Engineering', '30-50k/month', 'Creative thinking', 'Attention to detail', 'Junior-Level (1-3 years exp)', 'Travel opportunities'],
      responsibilities: [
        'Develop new user-facing features',
        'Build reusable code and libraries for future use',
        'Ensure the technical feasibility of UI/UX designs',
        'Optimize applications for maximum speed and scalability',
      ],
      skills: [
        { name: 'React', description: 'Solid understanding of React.js and its core principles' },
        { name: 'CSS & HTML', description: 'Proficient understanding of web markup, including HTML5 and CSS3' },
        { name: 'Responsive Design', description: 'Understanding of responsive design and cross-browser compatibility' },
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'Sprintex',
      type: 'Part Time',
      location: 'Remote',
      categories: ['Engineering', '60-80k/month', 'System architecture & administration', 'Strong communication skills', 'Senior-Level (8+ years exp)', 'Flexible work environment'],
      responsibilities: [
        'Design, implement, and maintain application phases',
        'Contribute in all phases of the development lifecycle',
        'Write well-designed, testable, efficient code',
        'Ensure designs are in compliance with specifications',
      ],
      skills: [
        { name: 'CI/CD', description: 'Experience with continuous integration and methodologies' },
        { name: 'Cloud Services', description: 'Working experience in cloud services like AWS, Azure, GCP' },
        { name: 'Containerization', description: 'Knowledge of Docker and Kubernetes' },
      ],
    },

    {
      title: 'UI/UX Designer',
      company: 'Sprintex',
      type: 'Freelance',
      location: 'On site',
      categories: ['Design', '20-25K/month', 'User-centric design', 'Creative & innovative thinking', 'Any level of experience', 'Project-based timelines'],
      responsibilities: [
        'Gather and evaluate user requirements in collaboration with product managers and engineers',
        'Illustrate design ideas using storyboards, process flows, and sitemaps',
        'Design graphic user interface elements, like menus, tabs, and widgets',
        'Develop UI mockups and prototypes that clearly illustrate functionality and aesthetics',
      ],
      skills: [
        { name: 'Design Software', description: 'Proficiency in Sketch, Adobe Suite, Figma, or similar' },
        { name: 'Wireframing', description: 'Experience with wireframing, storyboarding, and creating user flows' },
        { name: 'User Research', description: 'Ability to conduct user research and testing' },
      ],
    }




  ];

  const openJobModal = (index) => {
    setCurrentJobIndex(index); // Set the current job based on the index received
    setShowJobModal(true); // Open the modal
  };

  const closeJobModal = () => {
    setShowJobModal(false);
    setCurrentJobIndex(null); // Clear the current job when closing the modal
  };

  const goToNextJob = () => {
    // Go to the next job (if available)
    if (currentJobIndex < jobs.length - 1) {
      setCurrentJobIndex(currentJobIndex + 1);
    }
  };

  const goToPreviousJob = () => {
    // Go to the previous job (if available)
    if (currentJobIndex > 0) {
      setCurrentJobIndex(currentJobIndex - 1);
    }
  };

  // Helper function to render job cards
  const renderJobCards = (jobsToRender) => {
    return jobsToRender.map((job, index) => (
        <Col md={5} xs={12} key={index} className="seemorebox">
          <h2 className="company-details-sub-title">{job.title}</h2>
          <p className="SubJobtitle">{job.type} • {job.location}</p>
          <Row className="bubblerow">
            {job.categories.slice(0, 2).map((category, catIndex) => (
                <Col key={catIndex} md={12} xs={5} lg={6} className="colbubble">
                  <p className="bubbleHighlight">{category}</p>
                </Col>
            ))}
          </Row>
          <Button variant="outline-primary"
                  className="learnmorebutton" onClick={() => openJobModal(index)}> {/* Pass index here */}
            Learn more
          </Button>

        </Col>
    ));
  };

  const resources = [
    {
      title: 'Hacking Tech Interview',
      categories: ['Article', '5 min read', 'NY times'],
      link: "https://www.findher.work"

    },

    {
      title: 'Hacking Tech Interview',
      categories: ['Article', '5 min read', 'NY times'],
      link: "https://www.findher.work"

    },
    {
      title: 'Hacking Tech Interview',
      categories: ['Article', '5 min read', 'NY times'],
      link: "https://www.findher.work"

    },
  ]
  const renderAppResources = (resourcesToRender) => {
    return resourcesToRender.map((resource, index) => (
        <Col key={index} md={5} xs={12}  className="seemorebox" >
          <h2 className="company-details-sub-title">{resource.title}</h2>
          <Row className="bubblerow">
            {resource.categories.slice(0, 3).map((category, catIndex) => (

                  <p className="bubbleHighlight">{category}</p>

            ))}
          </Row>
          <Button variant="outline-primary"
                  className="learnmorebutton" onClick={() =>
              window.open(resource.link,'_blank')}> {/* Pass index here */}
            Access
          </Button>

        </Col>
    ));
  };

  return (
    <>
      {/* Blur div with pop up*/}
      <div className="check-blur">
                    {!props.isLogedIn && !props.isGuest  && <div className="blur-company-details" id="guest-profile-login-toast-id">
                        <div className="mt-5"><Toast className="guest-profile-login-toast guest-profile-login-toast-program" >
        <Toast.Body className="">
          <br />
          <Row>
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
  <Col className="" style={{justifyContent:"center",
  alignItems:"center", alignContent:"center", display:"flex",
  flexDirection:"column", paddingLeft:"3%", paddingRight:"3%"}}
  > {/* for background */}


    {/* For the rest of the elements
    - Structure:
    Row
      Row
        Col Col */}

      <Row className="ApplyHereBox"
           style={{width:"95.5%", padding:"2%", flexDirection:"row", marginTop:"5%"}}>
        <Row style={{padding:"1%", width:"100%", paddingBottom:'2%'}}>
          <Col xs={8}>
            <h2 className="company-details-sub-title">What They Look For</h2>
          </Col>
          <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end',
            height: '100%' /* or any specific height as per your layout */ }}>
            <Button
                variant="danger"
                style={{ padding: "1%", width: "100px" }}
                onClick={toggleCollapse}
                className="see-more-button"
            >
              {isCollapsed ? "See More" : "See Less"}

            </Button>
          </Col>
        </Row>
        <Col md={5} className="seemorebox" >
          <h2 className="company-details-sub-title">Passion for Technology</h2>
          <p className="company-details-para">
            {displayText}
          </p>
        </Col>

        <Col md={5} className="seemorebox" >
          <h2 className="company-details-sub-title"> Problem  -Solving
            Skills  </h2>
          <p className="company-details-para">
            {displayText}
          </p>
        </Col>
        <Col md={5} className="seemorebox">
          <h2 className="company-details-sub-title">First-Principles Thinker</h2>
          <p className="company-details-para">
            {displayText}
          </p>
        </Col>
      </Row>

    <Row className="ApplyHereBox" style={{ width: "95.5%", padding: "2%" }}>
      <Row style={{ padding: "1%", width: "100%", paddingBottom: '2%' }}>
        <Col>
          <h2 className="company-details-sub-title">Open Jobs</h2>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
          {jobs.length > 3 && ( // Only render the button if there are more than 3 jobs
              <Button
                  variant="danger"
                  style={{ padding: "1%", width: "100px" }}
                  onClick={toggleColumns}
                  className="see-more-button"
              >
                {seeMore ? "See Less" : "See More"}
              </Button>
          )}
        </Col>
      </Row>

      {/* Render the first three job cards */}
      <Row>
        {renderJobCards(jobs.slice(0, seeMore ? jobs.length : 3))}
      </Row>

    </Row>

    <Row className="ApplyHereBox" style={{ width: "95.5%", padding: "2%" }}>
      <Row style={{ padding: "1%", width: "100%", paddingBottom: '2%' }}>
        <Col xs={8}>
          <h2 className="company-details-sub-title">Application Resources</h2>
        </Col>
        <Col xs={4} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
          {resources.length > 3 && ( // Only render the button if there are more than 3 resources
              <Button
                  variant="danger"
                  style={{ padding: "1%", width: "100px" }}
                  onClick={toggleColumnsResources}
                  className="see-more-button"
              >
                {seeMoreResources ? "See Less" : "See More"}
              </Button>
          )}
        </Col>
      </Row>

      {/* Render the first three job cards */}
      <Row>
        {renderAppResources(resources.slice(0, seeMoreResources ? resources.length : 3))}
      </Row>

      {/* If seeMore is true, render the rest of the job cards in a new row */}
      {seeMoreResources && (
          <Row>
            {renderAppResources(resources.slice(3))}
          </Row>
      )}
    </Row>


    {/* Job Details Modal */}
    {showJobModal && currentJobIndex !== null && (
        <Jobmorepopup
            job={jobs[currentJobIndex]}
            onClose={closeJobModal}
            onSwipeLeft={goToPreviousJob}
            onSwipeRight={goToNextJob}
        />
    )}

    </Col>
  </>
  );
}

export default Programs;
