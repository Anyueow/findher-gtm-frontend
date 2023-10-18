import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarProvider } from "./components/NavbarContext";
import RoutesPage from "./RoutesPage";



function App() {

  const [load, updateLoad] = useState(true);
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
          <RoutesPage/>
        </div>
      </Router>
    </NavbarProvider>
  );
}

export default App;

  //const location = useLocation();
// useEffect(() => {
  //   if (typeof window.gtag === 'function') {
  //     window.gtag('config', 'G-7BB5S2LQC2', {
  //       'page_path': location.pathname + location.search
  //     });
  //   }
  // }, [location]);
   // const [LogedIn,setLogedin]=useState(false);
  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  //   if(token) setLogedin(true);
  //   console.log(token,"tokennn");
  // },[])

  //const location = useLocation();