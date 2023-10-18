import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FirstPage from "./components/Reviews/FirstPage";
import SecondPage from "./components/Reviews/SecondPage";
import ThirdPage from "./components/Reviews/ThirdPage";
import FourthPage from "./components/Reviews/FourthPage";
import FifthPage from "./components/Reviews/FifthPage";
import SixthPage from "./components/Reviews/SixthPage";
import SeventhPage from "./components/Reviews/SeventhPage";

import Profile from "./components/Profile/Profile";

import { NavbarProvider } from "./components/NavbarContext";
import Login from "./components/Reviews/login";
import BizReg from "./components/Businesses/b2b_first";
import EmailSignIn from "./components/Businesses/EmailSignIn";
import PhoneSignIn from "./components/Businesses/PhoneSignIn";
import DetailsOneB2B from "./components/Businesses/DetailsOneB2B";
import DetailsTwoB2B from "./components/Businesses/DetailsTwoB2B";
import EndPage from "./components/Businesses/endPage";

import HeroFinal from "./newDesign/Hero/Hero";
import SectOneF from "./newDesign/SectionOne/SectionOne";
import SectTwoF from "./newDesign/SectionTwo/SectionTwo";
import SectThreeF from "./newDesign/SectionThree/SectionThree";
import TestF from "./newDesign/Testimonial/Testimonial";
import SectionFour from "./newDesign/SectionFour/SectionFour";
import FaqSection from "./newDesign/FaqSection/FaqSection";
import SectionSix from "./newDesign/SectionSix/SectionSix";
import { SectionSeven } from "./newDesign/SectionSeven/SectionSeven";
import Sample from "./CompanyPages/sample";
import ProfileNavbarGuest from "./components/Profile/ProfileNavbarGuest";
import ProfileCreationInternal from "./components/Businesses/profileCreationInternal";
import CompanyPageSample from "./CompanyPages/companyPageSample";

function NewDesign() {
  const [blur, setBlur] = useState(0);
  return (
    <>
      <div className={blur ? "blur-background " : ""}>
        <HeroFinal />
        <SectOneF />
        <SectTwoF />
        <SectThreeF />
        <SectionFour />
        <TestF />
        <FaqSection />
        <SectionSix />
      </div>
      <SectionSeven setBlur={setBlur} />
      <Footer />
    </>
  );
}

function App() {
  //const location = useLocation();

  const [load, updateLoad] = useState(true);

  // useEffect(() => {
  //   if (typeof window.gtag === 'function') {
  //     window.gtag('config', 'G-7BB5S2LQC2', {
  //       'page_path': location.pathname + location.search
  //     });
  //   }
  // }, [location]);

  // Second useEffect for the timer
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  // const [LogedIn,setLogedin]=useState(false);
  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  //   if(token) setLogedin(true);
  //   console.log(token,"tokennn");
  // },[])

  //const location = useLocation();

  return (
    <NavbarProvider value="5%">
      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<NewDesign />} />
            <Route
              path="/reviews_login"
              element={
                <>
                  <FirstPage /> <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login /> <Footer />
                </>
              }
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/landingPage" element={<NewDesign />} />
            <Route path="/reviews_one" element={<SecondPage />} />
            <Route path="/reviews_two" element={<ThirdPage />} />
            <Route path="/reviews_three" element={<FourthPage />} />
            <Route path="/reviews_four" element={<FifthPage />} />
            <Route path="/reviews_five" element={<SeventhPage />} />
            <Route path="/successUser" element={<SixthPage />} />
            <Route path="/business_register" element={<BizReg />} />
            <Route path="/email_signin" element={<EmailSignIn />} />
            <Route path="/signin-phone" element={<PhoneSignIn />} />
            <Route path="/update_details" element={<DetailsOneB2B />} />
            <Route path="/update_details_two" element={<DetailsTwoB2B />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/successBizz" element={<EndPage />} />
            <Route path="/try" element={<ProfileNavbarGuest />} />
            <Route
              path="/createcompany"
              element={<ProfileCreationInternal />}
            />
            <Route
              path="/compsample"
              element={
                <>
                  {" "}
                  <ProfileNavbarGuest /> <CompanyPageSample />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </NavbarProvider>
  );
}

export default App;
