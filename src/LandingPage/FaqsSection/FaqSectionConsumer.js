import React from "react";
import "./FaqSection.css";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";

function FaqSectionBusiness() {
  const containerVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 1, delay: 2 },
  };

  return (
    <motion.div
      id="faq"
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="job-search-section faq-container">

            <h2 className="tinytitle">Got a question?</h2>

      </div>
      <div className="faqBox faq-container">
        <Accordion className="faqInner" style={{ borderRadius: "21px" }}>
          <Accordion.Item eventKey="0" className="faqItems">
            <Accordion.Header className="faqbodyHeader">What is FindHer, and how does it work?</Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                FindHer is a job search platform designed to empower women in their career journeys.
                We leverage AI technology to match you with job opportunities that
                align with your skills, goals, and preferences. Whether you're exploring workplaces,
                searching for jobs, or seeking career growth resources, FindHer is your go-to destination.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              Is FindHer only for job searches?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                While job searching is a significant part of FindHer,
                our platform offers more than just listings. You can access
                comprehensive company information  on our platform - including work culture,
                policies, support programs specifically designed for women, etc -
                ensuring you know what it's like to work somewhere before you apply.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              Is FindHer free to use for job seekers?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                Yes, FindHer is free for women job seekers. .
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              How can I get started on FindHer?</Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                It's simple! Just fill out  <a className="linkeda"

                                              href={"https://airtable.com/appbWBtB4y2MRltIZ/shrHIGlMWk2nDbrO6"}>
                this form,</a> and we'll start sending you the perfect job opportunities in your inbox.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faqItems">
            <Accordion.Header className="faqbodyHeader">What if I have more questions or need assistance?
            </Accordion.Header>
            <Accordion.Body className="innerBodyfaq">
              <p className="faqbodyPP">
                Feel free to reach out to us at
                <a href="mailto:info@findher.work"
                   className="linkeda"
                   target="_blank" rel="noopener noreferrer">
                  info@findher.work
                </a>.
                We're here to help you make the most of your FindHer experience.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faqItems">
            <Accordion.Header className="faqbodyHeader">Is FindHer live yet?

            </Accordion.Header>
            <Accordion.Body className="innerBodyfaq">
              <p className="faqbodyPP">
                Yes! Our job matching service is live and operational.
                We're gearing up for the upcoming launch of our company discover and
                profiles page, which is just around the corner.
                Sign-up to stay updated!
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </motion.div>
  );
}

export default FaqSectionBusiness;
