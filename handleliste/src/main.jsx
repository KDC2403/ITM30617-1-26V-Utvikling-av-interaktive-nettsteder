/*IMPORT AV REACT, KLIENT, APPEN og STYLESHEET med CSS*/
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";

/*HOVEDAPPEN I PROSJEKT, OPPSETT AV APPEN OG RENDERING TIL HTML OG NETTLESER*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);