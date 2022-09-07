import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherDetails from "./WeatherDetails";
import { Oval } from "react-loader-spinner";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      precipitation: response.data.main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function weatherSearch() {
    const apiKey = "2a6e140dffa5532ccd19daa46590a3bb";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    weatherSearch();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div className="Search rounded border ms-5 mt-5">
          <form onSubmit={handleSubmit}>
            <div className="row p-3">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type a city..."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-secondary"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    weatherSearch();
    return (
      <div className="m-5">
        <Oval
          height={200}
          width={200}
          color="#8f8787"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#fff"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
