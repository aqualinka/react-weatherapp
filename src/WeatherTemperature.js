import React, { useState} from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props){
   const [units,setUnits] = useState("celsius");
   
    function showFahrenheit(event){
       event.preventDefault();
       setUnits("fahrenheit");
    }
      
   function showCelsius(event){
    event.preventDefault();
    setUnits("celsius");
    }

   if(units === "celsius"){
    return  (
        <div className="m-2">
             <span className="temp">{Math.round(props.celsius)}</span>
             <span className="unit" >ºC</span>
             <a href="/" className="fahrenheit" onClick={showFahrenheit} >ºF</a>
         </div>);
   } else {
    return  (
        <div className="m-2">
             <span className="temp">{Math.round(props.celsius*9/5+32)}</span>
             <span className="unit" >ºF</span>
             <a href="/" className="fahrenheit" onClick={showCelsius} >ºC</a>
         </div>);
   }
   
 
  
}