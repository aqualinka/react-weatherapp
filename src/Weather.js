import React from "react";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "arrecife",
    temperature: 22,
    date: "tuesday 10:00",
    description: "clear sky",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 7,
    feel: 21
  };
  return (
    <div className="Weather">
      <div className=" container mt-2 weather-app-container">
        <div className="header text-center pb-2">
          Hello! Today´s {weatherData.date}
        </div>
        <Search />
        <div className="row pb-2">
          <div className="col text-center">
            <h1 className="heading">{weatherData.city}</h1>
            <div className="weather-temperature">
              <img src={weatherData.imgUrl} alt={weatherData.description} />
              <span className="temp">{weatherData.temperature}ºC</span>
            </div>
          </div>
        </div>

        <div className="row pb-2">
          <div className="col d-flex justify-content-evenly">
            <ul>
              <li>{weatherData.description}</li>
              <li>feel {weatherData.feel}ºC</li>
            </ul>
          </div>
          <div className="col d-flex justify-content-evenly">
            <ul>
              <li>humidity {weatherData.humidity}%</li>
              <li>wind {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
