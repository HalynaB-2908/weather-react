import React from "react";
import WeatherIcon from "./WeatherIcon";



export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}°`;
    }
    function getDay() {
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();
        const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return weekDays[day];
    }
  return (
    <div className="forecastItem">
      <div className="fs-4">{getDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="Forecast-Temperature">
        <span>{maxTemperature()}</span> {" "}
        <span>{minTemperature()}</span>
      </div>
    </div>
  );
}
