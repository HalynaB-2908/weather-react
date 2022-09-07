import React from "react";
import CurrentDate from "./CurrentDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="row">
      <div className="col-2">
        <WeatherIcon code={props.data.icon} />
      </div>
      <div className="col-4 mt-3 fs-1">
        <WeatherTemperature celsius={props.data.temperature}/>
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
