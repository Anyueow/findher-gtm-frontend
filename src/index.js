import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  {CsrfTokenProvider}  from './CsrfTokenProvider';

ReactDOM.render(
  <React.StrictMode>
    <CsrfTokenProvider>
    <App />
    </CsrfTokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measur  sfing performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
