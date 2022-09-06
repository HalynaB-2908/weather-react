import React from "react";
import "./index.css";

export default function Weather() {
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
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt=""
                className="w-50 ms-4 mt-3"
              />
              <span className="fs-4">23°C</span>
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
}