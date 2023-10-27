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
            <Accordion.Header className="faqbodyHeader">
              Are there any costs associated with creating a business profile on FindHer?

            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                No, there are no costs involved in creating a business
                profile on FindHer currently. Our platform is committed to
                supporting gender diversity and inclusion efforts in the workplace,
                and we plan to provide this service free of charge to businesses who
                sign up with us pre-launch.

                {" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              Can I customize my business profile to reflect our
              company's unique values and offerings?


            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">

                Absolutely! FindHer allows you to personalize your business
                profile to showcase what makes your company special. You can
                highlight your diversity and inclusion initiatives, share your
                mission, provide insights into your company culture, and so on.



              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              Are the reviews and feedback on FindHer anonymous?

            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                Yes, all reviews and feedback on FindHer are anonymous to
                encourage open and honest responses.
                This anonymity fosters a safe and candid environment
                for employees to share their experiences.



              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faqItems">
            <Accordion.Header className="faqbodyHeader">How To Join Us?

            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                It’s easy! Just book a 15-mins chat with us <a className="linkeda"
                  href={"https://calendly.com/asurana/chat-with-anjali"}>
                HERE.</a>
                <br/>
                Here’s what we’ll do together on the call:  <br/><br/>
                1. Set up your business profile.
                You can fill out <a  className="linkeda"
                  href={"https://airtable.com/appJdzJTA9Zpk9g5s/shrsUgbalS94PFJKe"}>this
                concise survey</a> before we speak, or dictate the answers to our team and we’ll handle the rest.
                <br/><br/>
                2. Distribute <a className="linkeda"
                  href={"https://airtable.com/appjIP09WZUbZDGkJ/shrToqsZoA0HpUarF"}>
                this feedback form to your female employees. </a>
                After responses have been submitted,
                we’ll you send a one-page report with actionable insights within 24 hours.
                We’ll also spotlight the best on your FindHer profile.  <br/><br/>
                3. Share <a  className="linkeda"
                  href={"https://airtable.com/appBBO9mI77GbcHsf/shrLHRnY3jZAoelIw"}>
                your job openings here, </a>
                and we’ll help you get them filled out with our database of top female talent.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faqItems">
            <Accordion.Header className="faqbodyHeader">Who Are We?

            </Accordion.Header>
            <Accordion.Body className="innerBodyfaq">
              <p className="faqbodyPP">
                Anjali and Ananya are students at
                Stanford and Northeastern University.
                They are driven by a shared vision of creating
                a more inclusive job market for women in India.

                <br/><br/>
                With a deep understanding of the unique challenges faced
                by women in their careers, they are bridging the gap
                between talented women professionals and businesses
                eager to harness their potential.
                <br/><br/>
                They love chatting about everything ranging startups to hiring, so:
                Connect with <a  className="linkeda"
                                 href={"https://www.linkedin.com/in/anjalisurana/"}>Anjali</a> or <a  className="linkeda"
                       href={"https://www.linkedin.com/in/anyushah/"}>Ananya</a> on
                LinkedIn.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </motion.div>
  );
}

export default FaqSectionBusiness;
