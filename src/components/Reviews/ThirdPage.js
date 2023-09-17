import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebookF, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedinIn, FaLink } from 'react-icons/fa';


import "./reviewStyles.css";


export const ThirdPage = () => {

    const handleShare = (platform) => {
        let url = window.location.origin + '/reviews'; // Construct the URL to share

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'email':
                window.open(`mailto:?subject=Check this out!&body=${url}`);
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${url}`, '_blank');
                break;
            case 'instagram':
                // Note: Instagram doesn't have direct link sharing. You would need to integrate with their API for more advanced features.
                console.log('Instagram does not support direct link sharing.');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
                break;
            case 'copyLink':
                navigator.clipboard.writeText(url);
                alert("Link copied to clipboard!");
                break;
            default:
                break;
        }
    };

    return (
        <Container id="reviews" className="sub review-third-container">


<Row className="reviews-box" >

                <h1 className="head-name" style={{fontSize:"3rem", marginBottom:"2rem"}} >
                    No worries!
                </h1>
            <h2 style={{fontSize:"2rem", marginBottom:"9rem"}}>
                You can join our waitlist even if you have
                never worked anywhere before.  All you
                need to do is share this with someone who has. </h2>

            <Row className="flex-lg-fill review-third-logo">
                <Col className="ico" xs="2" onClick={() => handleShare('facebook')}><FaFacebookF className="social-icon" /></Col>
                <Col className="ico" xs="2" onClick={() => handleShare('email')}><FaEnvelope className="social-icon" /></Col>
                <Col className="ico" xs="2" onClick={() => handleShare('whatsapp')}><FaWhatsapp className="social-icon"/></Col>
                <Col className="ico" xs="2" onClick={() => handleShare('instagram')}><FaInstagram className="social-icon"/></Col>
                <Col className="ico" xs="2" onClick={() => handleShare('linkedin')}><FaLinkedinIn className="social-icon"/></Col>
                <Col className="ico" xs="2" onClick={() => handleShare('copyLink')}><FaLink className="social-icon"/></Col>
            </Row>

</Row>
        </Container>
    );
};

export default ThirdPage;
