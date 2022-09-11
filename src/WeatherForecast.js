import React, { useState } from "react";
import axios from "axios";

import { Oval } from "react-loader-spinner";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row rounded border Values ms-5 mt-3 p-3">
        {forecast.map((dailyForecast, index) => {
          if(index < 4) {
          return (
            <div className="col-3 text-center" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "2a6e140dffa5532ccd19daa46590a3bb";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&&units=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
