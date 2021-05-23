import React, { useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Weather.css";

export default function Weather() {
    let [city, setCity] = useState(null);
    let [weather, setWeather] = useState({});
  
    function showWeather(response) {
      console.log(response.data);
      setWeather({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        feel: Math.round(response.data.main.feels_like),
        description: response.data.weather[0].description,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=728f15542e17d610b9afb1e420062506&units=metric`;
      axios.get(apiUrl).then(showWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    return (
      <div className="Weather">
        <div className=" container mt-2 weather-app-container">
          <div className="header text-center pt-2 pb-2">
             Welcome to my Weather App
          </div>

          <div className="mt-2">
            <form className="search-form pb-2"onSubmit={handleSubmit}>
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

          <div className="row pb-2">
            <div className="col text-center">
              <h1 className="heading">{weather.city}</h1>
              <div className="weather-temperature">
                <img src={weather.icon} alt={weather.description} />
                <span className="temp">{weather.temperature}ºC</span>
              </div>
            </div>
          </div>
    
          <div className="row pb-2">
            <div className="col d-flex justify-content-evenly">
              <ul>
                <li>{weather.description}</li>
                <li>feel {weather.feel}ºC</li>
              </ul>
            </div>
            <div className="col d-flex justify-content-evenly">
              <ul>
                <li>humidity {weather.humidity}%</li>
                <li>wind {weather.wind}m/s</li>
              </ul>
            </div>  
          </div>
          <div className="coder text-center">
          
            <a href="https://github.com/aqualinka/react-weatherapp" target="_blank" rel="noreferrer">open-source-code </a>by Michaela Kovacova and hosted on <a href="https://happy-wing-013044.netlify.app" target="_blank"rel="noreferrer">Netlify</a>
          </div>
        </div>
      </div>   
    );
  
  
 
}
