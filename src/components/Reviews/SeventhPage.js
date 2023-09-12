import React from 'react'
import './SeventhPage.css'
import ReviewProgressBar from "./ReviewProgressBar";
import { Container} from "react-bootstrap";

function SeventhPage() {
  return (
    <div>
        <ReviewProgressBar percent={75} />
         <Container className="container-seven" style={{ marginTop: "20px" }}>

         </Container>
    </div>
  )
}

export default SeventhPage
