import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Home";
import SectionOne from "./components/SectionOne/Home2";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
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
import { NavbarProvider } from './components/NavbarContext';
import SectionThree from "./components/SectionThree/SectionThree";
import Testimonial from "./components/Testimonial/Testimonial";
import Login from "./components/Reviews/login";
import BizReg from "./components/Businesses/b2b_first";
import EmailSignIn from "./components/Businesses/EmailSignIn";
import PhoneSignIn from "./components/Businesses/PhoneSignIn";
import DetailsOneB2B from "./components/Businesses/DetailsOneB2B";
import DetailsTwoB2B from "./components/Businesses/DetailsTwoB2B";
import EndPage from "./components/Businesses/endPage";
import SecTwo2mob from "./components/SectionTwo/SecTwo2mob";

import HeroFinal from "./newDesign/Hero/Hero";
import SectOneF from "./newDesign/SectionOne/SectionOne";
import SectTwoF from "./newDesign/SectionTwo/SectionTwo";
import SectThreeF from "./finalDesign/SectionThree/SectionThree";
import TestF from "./finalDesign/Testimonial/Testimonial";

function MainContent() {




  return (
      <>
        <Hero />
        <SectionOne />
          <SectionTwo/>
          <SecTwo2mob/>
        <SectionThree />
        <Testimonial />


      </>
  );
}

function NewDesign() {
  return (
      <>
      <HeroFinal />
  <SectOneF />
  <SectTwoF />
  <SectThreeF />
  <TestF />
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
  return (
      <NavbarProvider value="5%">

      <Router>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<MainContent />} />
              <Route path="/reviews_login" element={<FirstPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/reviews_one" element={<SecondPage />}/>
              <Route path="/reviews_two" element={<ThirdPage />}/>
              <Route path="/reviews_three" element={<FourthPage />}/>
              <Route path="/reviews_four" element={<FifthPage />}/>
              <Route path="/successUser" element={<SixthPage />}/>
              <Route path="/business_register" element={<BizReg />} />
              <Route path="/email_signin" element={<EmailSignIn />} />
              <Route path="/signin-phone" element={<PhoneSignIn />} />
            <Route path="/update_details" element={<DetailsOneB2B />} />
            <Route path="/update_details_two" element={<DetailsTwoB2B />} />
            <Route path="/successBizz" element={<EndPage />} />
            <Route path="/new" element={<NewDesign />} />




          </Routes>
          <Footer />
        </div>
      </Router>
      </NavbarProvider>
  );
}


export default App;
