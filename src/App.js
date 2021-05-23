import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Arrecife"/>
        <div className="coder text-center">        
          <a href="https://github.com/aqualinka/react-weatherapp" target="_blank" rel="noreferrer">open-source-code </a>by Michaela Kovacova and hosted on <a href="https://happy-wing-013044.netlify.app" target="_blank"rel="noreferrer">Netlify</a>
        </div>
      </div>
    </div>
  );
}


