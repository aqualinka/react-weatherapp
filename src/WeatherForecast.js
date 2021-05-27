import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastForDay from "./ForecastForDay";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);

    function handleResponse(response){
        setLoaded(true);
        setForecast(response.data.daily);
    }

   if(loaded){
    return (
        <div className="WeatherForecast py-2">
            <div classname="row">
                <div className="col text-center">
                    <ForecastForDay data={forecast[0]}/>
                </div>
            </div>
        </div>
    );
   } else {
   
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=728f15542e17d610b9afb1e420062506&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}

   
}