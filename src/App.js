import React from "react";
import "./App.css";
import Weather from "./Weather";
import { GoMarkGithub } from "react-icons/go";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Arrecife"/>
        <div className="coder text-center">        
          <a href="https://github.com/aqualinka/react-weatherapp" target="_blank" rel="noreferrer">open-source on
          {" "}<GoMarkGithub />{" "}
           </a>by Michaela Kovacova hosted on <a href="https://weatherreactappp.netlify.app/" target="_blank"rel="noreferrer">Netlify</a>
        </div>
      </div>
    </div>
  );
}


