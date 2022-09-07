import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahreheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
     event.preventDefault();
     setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div>
        {Math.round(props.celsius)}
        <span className="unit">
          °C
          <span className="unitDivider">|</span>
          <a href="/" className="m-1" onClick={showFahreheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
    <div>
      {Math.round(fahrenheit())}
      <span className="unit">
        <a href="/" className="m-1" onClick={showCelsius}>
          °C
        </a>
        <span className="unitDivider">|</span>
        °F
      </span>
    </div>
    );
  }
}
