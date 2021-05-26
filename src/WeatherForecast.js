import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
            <div classname="row">
                <div className="col text-center">
                    <div classname="forecast-day">monday</div>
                    <WeatherIcon code="09d" size={25}/>
                    <div classname="forecast-temperature">
                        <span classname="forecast-temp-max">16º</span>|
                        <span className="forecast-temp-min">10º</span>
                    </div>
                </div>
            </div>
        </div>
    );
}