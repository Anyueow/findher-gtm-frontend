import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Toast} from "react-bootstrap";
function RefPopup(props) {
  const { setPopopen,setRefcode } = props;
  const [input, setInput] = useState("");
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  const Referral=["abc100","find100"];
  const [warn,setWarn]=useState(false);
  const popupclose=()=>{
    if(Referral.includes(input)){
      setRefcode(input)
      setPopopen(false);
    }
    else setWarn(true);
  }
  useEffect(()=>{
    if(input==="") setWarn(false);
  },[input])
  return (
     <div className="changeNumEmail-div"> 
     <Toast className="numemailchange-profile-toast ">
        <Toast.Body className="">
        <button
            type="button"
            className="btn-close float-right"
            onClick={() => {props.setPopopen(!props.setPopopen) ; props.setRefcode(!props.setRefcode); setWarn(false) }}
          ></button>
        <p>Enter Your Referral Code</p>
        <Form.Group className="refInput">
          {/* <Form.Label>First Name</Form.Label> */}
          <Form.Control
            name="referralCode" // Added name attribute
            type="text"
            value={input}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <br/>
        <Button
          onClick={popupclose}
          className="JoinButton-hero refBtn"
        >
          Submit
        </Button>
        {warn && <p style={{color:"red",fontWeight:"normal",position:"relative"}}>Invalid Referral Code!</p>}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default RefPopup;
