import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Howl, Howler } from "howler";

const root = ReactDOM.createRoot(document.getElementById("root"));
Howler.autoUnlock = false; // Necessary to enable sound on some mobile devices
Howler.volume(1.0); // Adjust the global volume, if necessary

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
