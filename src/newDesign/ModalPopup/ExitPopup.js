import React from "react";
import './ExitPopup.css'
import { useNavigate } from 'react-router-dom';
function ExitPopup(props) {
    const {setClose}=props;
    const navigate = useNavigate();
  return (
    <div>
      <div className="exitcont">
        <div className="exith1">
          <p>Are you sure you want to exit?</p>
        </div>
        <div className="exith2">
          <p>You will loose your progress</p>
        </div>
        <div className="exitbtns">
          <button className="exitbtn exitcancel" onClick={()=>setClose(false)} >Cancel</button>
          <button className="exitbtn exityes" onClick={()=>{navigate('/reviews_login')}} >Yes,Exit</button>
        </div>
      </div>
    </div>
  );
}

export default ExitPopup;
