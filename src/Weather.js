import React from "react";
import "./index.css";

export default function Weather() {
    return (
      <div className="Search rounded border">
        <div className="row p-3">
          <div className="col-9">
            <input type="search" className="form-control" placeholder="Type a city..."/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
          </div>
        </div>
      </div>
    );
}