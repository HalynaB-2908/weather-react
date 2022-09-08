import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="row rounded border Values ms-5 mt-3 p-3">
      <div className="col-3 text-center ">
        <div className="fs-4">Fri</div>
        <WeatherIcon code="01d" size={36} />
        <div className="Forecast-Temperature">
          <span>22°</span> <span>16°</span>
        </div>
      </div>
      <div className="col-3 text-center">
        <div className="fs-4">Sat</div>
        <WeatherIcon code="04d" size={36} />
        <div className="Forecast-Temperature">
          <span>22°</span> <span>16°</span>
        </div>
      </div>
      <div className="col-3 text-center">
        <div className="fs-4">Sun</div>
        <WeatherIcon code="11d" size={36} />
        <div className="Forecast-Temperature">
          <span>22°</span> <span>16°</span>
        </div>
      </div>
      <div className="col-3 text-center">
        <div className="fs-4">Mon</div>
        <WeatherIcon code="02d" size={36} />
        <div className="Forecast-Temperature">
          <span>22°</span> <span>16°</span>
        </div>
      </div>
    </div>
  );
}
