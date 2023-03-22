import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Qoute from "./Qoutegenerator/Qoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Qoute />
  </React.StrictMode>
);
