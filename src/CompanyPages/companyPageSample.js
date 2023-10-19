import React, { useState } from "react";
import {  Row, Col } from "react-bootstrap";
import "./companyPage.css";
import logo from "./images-4.jpeg";
import loc from "./imageAssets/map.svg";
import industry from "./imageAssets/suitcase.svg";
import employee from "./imageAssets/people.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useCsrfToken } from "../CsrfTokenProvider";
// import { ToastContainer, toast } from "react-toastify";
import Overview from './Components/Overview';
import TestimonialSec from './Components/TestimonialSec';
import Programs from './Components/Programs';
import "react-toastify/dist/ReactToastify.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

// const CircularProgress = ({ progress, circleColor, percentageColor }) => {
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference - (progress / 100) * circumference;

//   return (
//     <svg width="120" height="120">
//       <circle
//         cx="60"
//         cy="60"
//         r={radius}
//         stroke={circleColor}
//         strokeWidth="20"
//         fill={circleColor}
//       />
//       <circle
//         cx="60"
//         cy="60"
//         r={radius}
//         stroke={percentageColor}
//         strokeWidth="20"
//         fill="none"
//         strokeDasharray={circumference}
//         strokeDashoffset={offset}
//       />
//       <text x="60" y="50" textAnchor="middle" dy=".3em" fontSize="20">
//         <tspan dy="0.3em">{`${progress}%`}</tspan>
//         <tspan x="60" dy="1.2em">
//           Agree
//         </tspan>
//       </text>
//     </svg>
//   );
// };

// const testimonials = [
//   {
//     type: "Flexibility",
//     comment:
//       "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
//     rating: 4,
//   },
//   {
//     type: "Diversity",
//     comment:
//       "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
//     rating: 5,
//   },
//   {
//     type: "Security",
//     comment:
//       "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
//     rating: 5,
//   },
//   {
//     type: "TechCorp",
//     comment:
//       "Working at TechCorp has been a fantastic experience. The team is supportive, and there are numerous opportunities for professional development.",
//     rating: 5,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const filledStars = "★".repeat(rating);
//   const emptyStars = "☆".repeat(5 - rating);

//   return (
//     <p
//       style={{
//         fontSize: "24px",
//         margin: "0",
//         color: "yellowgreen",
//         borderRadius: "5px",
//       }}
//     >
//       {filledStars}
//       {emptyStars}
//     </p>
//   );
// };

// const Testimonial = ({ testimonial }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const truncatedComment = testimonial.comment.slice(0, 100);
//   const shouldTruncate = testimonial.comment.length > 100;

//   return (
//     <div className="testimonial-content">
//       <p className="testiText">
//         {isExpanded || !shouldTruncate
//           ? testimonial.comment
//           : `${truncatedComment}...`}
//       </p>
//       {shouldTruncate && (
//         <button className="tiny" onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? "See Less" : "See More"}
//         </button>
//       )}
//       <p className="tinyBub">{testimonial.type}</p>
//       <StarRating rating={testimonial.rating} />
//     </div>
//   );
// };

const Navigation = (props) => {
  return (
    <div className="navigation-div  mx-0 my-0" style={{ width: "60vw" }}>
      <div className="navigation mx-0 my-0">
        <ul className="mx-0">
          <li>
            <a href="#about" className={`${ props.navbarvalue ==='overview' ? 'navigationActive' : ''}`}
            onClick={()=>props.setNavbarvalue('overview')}
            >Overview</a>
          </li>
          <li>
            <a href="#testimonial" className={`${ props.navbarvalue ==='testimonial' ? 'navigationActive' : ''}`}
            onClick={()=>props.setNavbarvalue('testimonial')}
            >Testimonials</a>
          </li>
          <li>
            <a href="#programs" className={`${ props.navbarvalue ==='programs' ? 'navigationActive' : ''}`}
             onClick={()=>props.setNavbarvalue('programs')}
            >For Women</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const CompanyProfileHeader = () => {
//   const csrfToken = useCsrfToken();

//   const [isLogedIn, setIsLogedIn] = useState(false);
//   const [isGuest, setIsGuest] = useState(false);
  const [navbarvalue, setNavbarvalue] = useState('overview')

//   useEffect(() => {
//     const isGuestValue = localStorage.getItem("isGuest");
//     if (isGuestValue === "true") {
//       setIsGuest(true);
//     } else {
//       setIsGuest(false);
//     }
//   }, []);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) setIsLogedIn(true);
//     console.log(token, "tokennn");
//   }, []);

//   const [showMore, setShowMore] = useState({
//     why: false,
//     look: false,
//     like: false,
//     only: false,
//   });

//   const [guestProfile, setGuestProfile] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     linkedinProfile: "",
//   });

//   const handleInputChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setGuestProfile({ ...guestProfile, [name]: value });
//   };

//   const handleShowMore = (name) => {
//     if (!isLogedIn && !isGuest) {
//       const element = document.getElementById("guest-profile-login-toast-id");
//       element.scrollIntoView({ behavior: "smooth" });
//       return;
//     }
//     setShowMore({ ...showMore, [name]: !showMore[name] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, phoneNumber, firstName, lastName, linkedinProfile } =
//       guestProfile;

//     if (!email && !phoneNumber && !firstName && !lastName) {
//       return;
//     }
//     console.log(guestProfile);
//     try {
//       const response = await fetch(process.env.REACT_APP_URL + "guestProfile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "X-CSRF-Token": csrfToken,
//         },
//         credentials: "include", // Include this line
//         body: JSON.stringify({
//           email: email,
//           phoneNumber: phoneNumber,
//           firstName: firstName,
//           lastName: lastName,
//           linkedinProfile: linkedinProfile,
//         }),
//       });

//       console.log("its been sent");

//       if (response.ok) {
//         const data = await response.json();
//         setIsGuest(true);
//         localStorage.setItem("isGuest", "true");
//         console.log(data); // Print the response data to the console for debugging purp
//       } else {
//         console.log("dammit these errors");
//         // Handle the error response
//         const data = await response.json();
//         toast.error(data.message, {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//         console.error(`Error: ${response.status} ${response.statusText}`);
//         console.error(data.message); // Print the error message from the backend
//       }
//     } catch (error) {
//       console.log(error);
//       console.error("Error Name:", error.name);
//       console.error("Error Message:", error.message);
//       console.error("Stack Trace:", error.stack);
//     }
//   };

  return (
    // <Container className=" mt-5">
      <Row className="mt-4 pt-5">
        <Col md="3">
          <Row className="company-page-left-row">
            <Col md="12" className="d-flex align-items-center justify-content-center">
              <div className="company-logo">
                <img alt="Company Logo" src={logo} />
              </div>
            </Col>
            <Col md="12" className="company-details-info">
              <h1 className="">Spring Tech Inc</h1>
              <div className="info-row d-flex align-items-center my-2">
                <img className="icon" alt="Location Icon" src={loc} />
                <p className="sub-text  mx-2">Mumbai, India</p>
              </div>
              <div className="info-row d-flex align-items-center my-2">
                <img className="icon" alt="Industry Icon" src={industry} />
                <p className="sub-text mx-2">Information Technology</p>
              </div>
              <div className="info-row d-flex align-items-center my-2">
                <img className="icon" alt="Employee Icon" src={employee} />
                <a className="sub-text  mx-2">https://findher.work/</a>
              </div>
            </Col>
            <Col md="12" className="mt-4">
              <div className="company-page-photo" style={{ overflowX: "hidden", marginTop:"0%" }}>
              <h1 className="">Photos</h1>
              <Swiper
          className="company-detaisl-swiper-container"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          spaceBetween={40}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 100,
            modifier: 1,
          }}
        >
          <SwiperSlide>
          <img alt="Company Logo" src={logo} />
          </SwiperSlide>
          <SwiperSlide>
          <img alt="Company Logo" src={logo} />
          </SwiperSlide>
          <SwiperSlide>
          <img alt="Company Logo" src={logo} />
          </SwiperSlide>
          <SwiperSlide>
          <img alt="Company Logo" src={logo} />
          </SwiperSlide>

          {/* Add more testimonials as needed */}
        </Swiper>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
        <Row className="company-page-right-row px-0">
          <Col className="px-0">
            <Navigation navbarvalue={navbarvalue} setNavbarvalue={setNavbarvalue}/></Col>
          {navbarvalue === 'overview' && (
           <Overview />
            )}
            {navbarvalue === 'testimonial' && (
           <TestimonialSec />
            )}
            {navbarvalue === 'programs' && (
           <Programs />
            )}
        </Row>
        </Col>
        {/* <ToastContainer/> */}
      </Row>
    // </Container>
  );
};

export default CompanyProfileHeader;
