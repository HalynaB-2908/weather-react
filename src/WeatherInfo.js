import React from "react";
import CurrentDate from "./CurrentDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-6">
        <WeatherIcon code={props.data.icon} />

        <span className="fs-4">{Math.round(props.data.temperature)}°C</span>
      </div>
      <div className="col-6">
        <h1 className="mt-3">{props.data.city}</h1>
        <div>
          <CurrentDate date={props.data.date} />
          <span className="text-capitalize">{props.data.description}</span>
        </div>
      </div>
    </div>
  );
}
