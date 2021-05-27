import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastForDay(props){

    function minTemperature(){
       let minTemp = Math.round(props.data.temp.min);
   return `${minTemp}º`;
    }
    function maxTemperature(){
        let maxTemp =Math.round(props.data.temp.max);
        return `${maxTemp}º`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
      }
      return (
        <div className="ForecastForDay">
          <div className="WeatherForecast-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </div>
        </div>
      );
}