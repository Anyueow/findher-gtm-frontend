import React from "react";
import "./SectionSeven.css";
import { useState } from "react";
import { useEffect } from "react";
import ModalPopup from "../ModalPopup/ModalPopup";
// import axios from 'axios';
import { motion } from "framer-motion";
import { useCsrfToken } from '../../CsrfTokenProvider';

export const SectionSeven = (props) => {
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


  const { setBlur } = props;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [openPopup, setOpenPopup] = useState(0);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const csrfToken = useCsrfToken();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setMessage("Invalid email format");
      return;
    }
    try {
      const response = await fetch(
        "https://findher-backend.onrender.com/newsletter",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token" : csrfToken,
          },
          body: JSON.stringify({ email: email }),
        }
      );
      if (response.status === 200) {
        setOpenPopup(1);
        setBlur(1);
        // setMessage('Email successfully subscribed');
      } else if (response.status === 409) {
        setMessage("Email already subscribed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Request failed. Please try again.");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if (email === "") setMessage("");
  }, [email]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className={openPopup ? "blur-background2" : "sec-seven-container"}>
        <div className="sec-seven-heading">Join the Community</div>
        <p className="sec-seven-para">
          Subscribe to our newsletter to get all the latest updates and news
          from FindHer. We'll keep you up-to-date with the latest job
          opportunities and career advice.
        </p>
        <form className="sec-seven-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="sec-seven-input"
            placeholder="youremail@example.com"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit" className="sec-seven-button">
            Sign Up
          </button>
          {message && <div className="sec-seven-message px-2">{message}</div>}
        </form>
      </div>
      {openPopup ? (
        <ModalPopup setOpenPopup={setOpenPopup} setBlur={setBlur} />
      ):(<div></div>)}
    </motion.div>
  );
};
