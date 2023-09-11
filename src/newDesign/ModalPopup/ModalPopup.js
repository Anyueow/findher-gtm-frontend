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
            <p>Your're on the list and you'll soon start receiving emails about new templates and discounts</p>
        </div>
    </div>
  )
}

export default ModalPopup
