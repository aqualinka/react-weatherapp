import React from "react";
import "./WeatherTemperature.css"

export default function WeatherTemperature(props){

    return  (<div className="m-2">
        <span className="temp">{props.celsius}</span>
        <span className="unit" >ºC</span>
        <a href="/" className="fahrenheit">F</a>
        </div>);
}