import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="row">
                <div className="col text-center">
                    <h1 className="heading">{props.data.city}</h1>
                    <FormattedDate date={props.data.date}/>
                        <div className="weather-temperature d-flex align-items-center justify-content-center">
                            <img src={props.data.icon} alt={props.data.description} />
                            <span className="temp">{props.data.temperature}ºC</span>
                        </div>
                </div>
            </div>
    
          <div className="row pb-2">
            <div className="col d-flex justify-content-evenly">
              <ul>
                <li>{props.data.description}</li>
                <li>feel {props.data.feel}ºC</li>
              </ul>
            </div>
            <div className="col d-flex justify-content-evenly">
              <ul>
                <li>humidity {props.data.humidity}%</li>
                <li>wind {props.data.wind}km/h</li>
              </ul>
            </div>  
          </div>
        </div>
    );
}