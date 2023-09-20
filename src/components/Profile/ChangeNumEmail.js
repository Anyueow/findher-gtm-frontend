import React from "react";
import "./CSS/ChangeNumEmail.css";
import { Button, Toast } from "react-bootstrap";
import { useState } from "react";
import OtpInput from "react-otp-input";

function ChangeNumEmail(props) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState();
  const [showOtp, setShowOtp] = useState(false);

  async function OtpRequest(){
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch("https://findher-backend.onrender.com/profile/number/otp/request",
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Include this line
        body:  JSON.stringify({phoneNumber,email:props.email}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setShowOtp(true);
      } else {
        console.log("dammit these errors");
        // Handle the error response
        console.log(response)
        const data = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend
      }
    } catch (error) {
      console.log(error);
      console.error("Error Name:", error.name);
      console.error("Error Message:", error.message);
      console.error("Stack Trace:", error.stack);
    }
  }

  async function SaveChanges(){
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch("https://findher-backend.onrender.com/profile/number/change",
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Include this line
        body:  JSON.stringify({otp}),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        window.location.reload();
      } else {
        console.log("dammit these errors");
        // Handle the error response
        console.log(response)
        const data = await response.json();
        console.error(`Error: ${response.status} ${response.statusText}`);
        console.error(data.message); // Print the error message from the backend
      }
    } catch (error) {
      console.log(error);
      console.error("Error Name:", error.name);
      console.error("Error Message:", error.message);
      console.error("Stack Trace:", error.stack);
    }
  }

  return (
    <div className="changeNumEmail-div">
      <Toast className="numemailchange-profile-toast ">
        <Toast.Body className="">
          <button
            type="button"
            className="btn-close float-right"
            onClick={() => props.setshowNumEmail(!props.showNumEmail)}
          ></button>
          <br />
          <p className="px-2 mt-1 mb-0">Re-enter new phone number</p>
          <input
            required
            placeholder="enter here"
            className="px-2 mb-2"
            name="phone"
            disabled={showOtp}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {showOtp && (
            <div>
              <p className="px-2 mt-1 mb-1">Enter OTP</p>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span className="otp-space"> </span>}
                renderInput={(props) => <input {...props} />}
                isInputNum={true}
                containerStyle="otp-container"
              />
               <br />
          <br />
                      <Button
            type="button"
            className="btn-get-otp"
            onClick={SaveChanges}
          >
          Save changes
          </Button>
            </div>
          )}
          <br />
          <br />
          {!showOtp && (
          <Button
            type="button"
            className="btn-get-otp"
            onClick={OtpRequest}
          >
            Get OTP
          </Button>)}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default ChangeNumEmail;
