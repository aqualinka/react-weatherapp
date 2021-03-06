import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastForDay from "./ForecastForDay";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);

   useEffect(()=>{
       setLoaded(false)
   },[props.coordinates]);

    function handleResponse(response){
     setForecast(response.data.daily);
        setLoaded(true);
    }
function load(){
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=728f15542e17d610b9afb1e420062506&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}
   if(loaded){
    return (
        <div className="WeatherForecast py-2">
            <div className="row ">
                {forecast.map(function(dailyForecast, index){
                    if(index < 6 && index > 0){
                        return (
                    <div className="col text-center" key={index}>
                        <ForecastForDay data={dailyForecast} />
                    </div>)} else{
                        return null;
                    }
                })}
              
            </div>
        </div>
    );
   } else {
    load(); 
    return null;
}

   
}