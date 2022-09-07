import React from "react";

export default function WeatherDetails(props) {
    return (
      <div className="row rounded border Values ms-5 mt-3 text-center p-3">
        <div className="col-4">
          <h5>Precipitation</h5>
          <span>15%</span>
        </div>
        <div className="col-4">
          <h5>Humidity</h5>
          <p>{props.data.humidity}%</p>
        </div>
        <div className="col-4">
          <h5>Wind</h5>
          <div>{Math.round(props.data.wind)}km/h</div>
        </div>
      </div>
    );
}