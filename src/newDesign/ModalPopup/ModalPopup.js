import React from 'react'
import './ModalPopup.css'
import CloseIcon from '@mui/icons-material/Close';
function ModalPopup(props) {
    const {setOpenPopup,setBlur} =props;
  return (
    <div className="modalCont" id="modalPopup2">
        <div className="closeModal">
            <CloseIcon onClick={()=> {
                setOpenPopup(0);
                setBlur(0)
            }}/>
        </div>
        <div className="thankspp">
            <p>Thanks for signing up!</p>
        </div>
        <div className="thanksbody">
            <p>You’re on the list and you will soon start receiving emails about relevant opportunities and trends to support you at work!</p>
        </div>
    </div>
  )
}

export default ModalPopup
