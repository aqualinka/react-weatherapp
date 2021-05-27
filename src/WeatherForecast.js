import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastForDay from "./ForecastForDay";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);

    function handleResponse(response){
     setForecast(response.data.daily);
        setLoaded(true);
    }

   if(loaded){
    return (
        <div className="WeatherForecast py-2">
            <div classname="row">
                {forecast.map(function(dailyForecast, index){
                    if(index<5){
                        return (
<div className="col text-center" key={index}>
  <ForecastForDay data={dailyForecast} />
</div>)}
                })}
              
            </div>
        </div>
    );
   } else {
   
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=728f15542e17d610b9afb1e420062506&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}

   
}