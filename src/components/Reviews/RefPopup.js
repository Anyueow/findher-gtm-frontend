import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form} from "react-bootstrap";
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
      setPopopen(0);
    }
    else setWarn(true);
  }
  useEffect(()=>{
    if(input==="") setWarn(false);
  },[input])
  return (
    <div className="refBox">
      <div className="refCont">
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
        <Button
          onClick={popupclose}
          className="JoinButton-hero refBtn"
        >
          Submit
        </Button>
        {warn && <p style={{color:"red",fontWeight:"normal",position:"relative"}}>Invalid Referral Code!</p>}
      </div>
    </div>
  );
}

export default RefPopup;
