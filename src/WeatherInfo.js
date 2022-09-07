import React from "react";
import CurrentDate from "./CurrentDate.js";

export default function WeatherInfo(props) {
    return (
      <div className="row">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="w-50 ms-4 mt-3"
          />
          <span className="fs-4">{Math.round(props.data.temperature)}°C</span>
        </div>
        <div className="col-6">
          <h1 className="mt-3">{props.data.city}</h1>
          <p>
            <CurrentDate date={props.data.date} />
            <span className="text-capitalize">{props.data.description}</span>
          </p>
        </div>
      </div>
    );
}