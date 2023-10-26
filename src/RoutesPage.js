import React, { useState } from 'react'
import FirstPage from "./components/Reviews/FirstPage";
import SecondPage from "./components/Reviews/SecondPage";
import ThirdPage from "./components/Reviews/ThirdPage";
import FourthPage from "./components/Reviews/FourthPage";
import FifthPage from "./components/Reviews/FifthPage";
import SixthPage from "./components/Reviews/SixthPage";
import SeventhPage from "./components/Reviews/SeventhPage";
import Profile from "./components/Profile/Profile";
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
import Footer from "./components/Footer";
import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./LandingPage/MainPage";
import ForBusiness from "./LandingPage/forBusiness";
import ForWomen from "./LandingPage/forwomen";
import NavbarnewUser from "./LandingPage/Navbar/NavbarnewUser";
import NavbarnewMain from "./LandingPage/Navbar/NavbarnewMain";

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

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<> <NavbarnewMain/> <MainPage /> </>} />
        <Route path="/forbusiness" element={<> <NavbarnewUser /> <ForBusiness /> <Footer /> </>} />
        <Route path="/forwomen" element={<> <NavbarnewUser /> <ForWomen /> <Footer /> </>} />

        <Route path="/oldnav" element={<><Navbar /><NewDesign /></>} />
      <Route path="/reviews_login" element={<><Navbar /> <FirstPage /> <Footer /></>}/>
      <Route path="/login" element={<> <Navbar /><Login /> <Footer />  </>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/landingPage" element={<><Navbar /><NewDesign /></>} />
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
      <Route path="/createcompany" element={<ProfileCreationInternal />} />
      <Route path="/compsample" element={<> <ProfileNavbarGuest /> <CompanyPageSample /><Footer /> </>} />

    </Routes>
  )
}

export default RoutesPage
