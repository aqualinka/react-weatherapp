import React, { useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});
  
    function showWeather(response) {
     // console.log(response.data);
      setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt*1000),
        temperature: Math.round(response.data.main.temp),
        feel: Math.round(response.data.main.feels_like),
        description: response.data.weather[0].description,
        wind: Math.round((response.data.wind.speed)*18/5),
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
    function search(){
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=728f15542e17d610b9afb1e420062506&units=metric`;
      axios.get(apiUrl).then(showWeather);
    }
  if(weatherData.ready){
    return (
      <div className="Weather">
        <div className="mt-2 container weather-app-container">
          <div className="header text-center py-2">
             Welcome to Your Weather App
          </div>

          <div className="p-2">
            <form className="search-form"onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input
                    onChange={updateCity}
                      autoFocus={true}
                      id="search-input"
                      type="search"
                      className="form-control"
                      placeholder="type a city.."
                    />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn w-100 button-submit btn-success">
                    search
                  </button>
                </div>
              </div>
            </form>
          </div>

         <WeatherInfo data={weatherData}/>
         
        </div>
      </div>   
    );
  } else{
    search();
    return "Loading...";
  }
    
  
  
 
}
