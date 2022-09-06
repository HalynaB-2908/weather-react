import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <div className="Search rounded border ms-5 mt-5">
          <div className="row p-3">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Type a city..."
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                autoFocus="on"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
                className="w-50 ms-4 mt-3"
              />
              <span className="fs-4">{Math.round(temperature)}°C</span>
            </div>
            <div className="col-6">
              <h1 className="mt-3">New York</h1>
              <p>
                Tuesday 8:00
                <br />
                partly cloudy
              </p>
            </div>
          </div>
        </div>
        <div className="row rounded border Values ms-5 mt-3 text-center p-3">
          <div className="col-4">
            <h5>Precipitation</h5>
            <span>15%</span>
          </div>
          <div className="col-4">
            <h5>Humidity</h5>
            <p>55%</p>
          </div>
          <div className="col-4">
            <h5>Wind</h5>
            <p>15km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "2a6e140dffa5532ccd19daa46590a3bb";
    let units = "metric";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..."
  }
}
