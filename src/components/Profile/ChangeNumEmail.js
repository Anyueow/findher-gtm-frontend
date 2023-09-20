import React from "react";
import "./CSS/ChangeNumEmail.css";
import { Button, Toast } from "react-bootstrap";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ChangeNumEmail(props) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();
  const [showOtp, setShowOtp] = useState(false);

  async function OtpRequest(){
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }
    try {
      const response = await fetch(`https://findher-backend.onrender.com/profile/${!props?.onChangeContact.phoneNumber ?'number' : 'email'}/otp/request`,
       {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include", // Include this line
        body: JSON.stringify(!props?.onChangeContact.phoneNumber ? { phoneNumber } : { email }),
      });

      console.log(JSON.stringify(!props?.onChangeContact.phoneNumber ? { phoneNumber } : { email }))
      if (response.ok) {
        const data = await response.json();
         toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setShowOtp(true);
      } else {
        console.log("dammit these errors");
        // Handle the error response
        const data = await response.json();
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
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
      const response = await fetch(`https://findher-backend.onrender.com/profile/${!props?.onChangeContact.phoneNumber ?'number' : 'email'}/change`,
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
        toast.success(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        window.location.reload();
      } else {
        console.log("dammit these errors");
        // Handle the error response
        const data = await response.json();
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
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
          <p className="px-2 mt-1 mb-0">{`Re-enter new ${!props?.onChangeContact.phoneNumber ? "phone number" :"email address"} `}</p>
          <input
            required
            placeholder="enter here"
            className="px-2 mb-2"
            disabled={showOtp}
            value={!props.onChangeContact.phoneNumber ? phoneNumber : email}
            onChange={!props.onChangeContact.phoneNumber ?  (e) => setPhoneNumber(e.target.value) : (e) => setEmail(e.target.value) }
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
      <ToastContainer/>
    </div>
  );
}

export default ChangeNumEmail;
