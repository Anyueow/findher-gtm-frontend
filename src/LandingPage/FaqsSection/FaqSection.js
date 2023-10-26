import React from "react";
import "./FaqSection.css";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";

function FaqSection() {
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
            <Accordion.Header className="faqbodyHeader">Who is FindHer for?</Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                FindHer is designed for professional women of all backgrounds
                who are working or looking for job opportunities in India.
                Currently our focus is on urban cities, but we hope to expand
                that over time. Whether you're a recent graduate, a mid-career
                professional, or seeking to re-enter the workforce, FindHer is
                built for you.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              What kind of information will I find?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                You'll gain exclusive access to a wealth of information that you
                won't find anywhere else on the internet. On FindHer, you’ll
                find insider insights into workplaces across India, including
                details on workplace culture, work-life balance, growth
                opportunities, inclusivity, and much more. You'll discover real
                stories and experiences shared by women who've worked at these
                companies so you don’t have to make a leap into the unknown when
                choosing your next job.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="faqItems">
            <Accordion.Header className="faqbodyHeader">
              Are reviews collected anonymously?
            </Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                Yes, absolutely. Your privacy and data security are our top
                priorities. We understand the importance of anonymity,
                especially when discussing workplace experiences. Hence all
                reviews shared on FindHer are entirely anonymous and we take
                utmost measures to protect your identity.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="faqItems">
            <Accordion.Header className="faqbodyHeader">How do I join the waitlist?</Accordion.Header>
            <Accordion.Body>
              <p className="faqbodyPP">
                Just click the "Join Now" button, and you'll be directed to a
                quick survey where you can anonymously share your review about
                any workplace you've been a part of. As soon as your press
                submit, you’ll join our waitlist and be among the first to
                access exclusive information on companies.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="faqItems">
            <Accordion.Header className="faqbodyHeader">What is FindHer’s mission?</Accordion.Header>
            <Accordion.Body className="innerBodyfaq">
              <p className="faqbodyPP">
                FindHer aims to revolutionize how women find jobs in India. We
                want to empower women by providing transparent and personalized
                insights into workplaces, helping them make informed career
                choices. Our goal is to bridge the gender gap in the workforce
                and create a more inclusive and empowering professional
                landscape for women.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </motion.div>
  );
}

export default FaqSection;
