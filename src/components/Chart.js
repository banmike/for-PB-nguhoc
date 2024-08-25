import React from "react";

const Chart = ({ temp, humidity, light }) => {
  return (
    <div className="chart">
      <h2>Chart</h2>
      <div className="chart-bar">
        <div className="bar" style={{ height: `${temp}%` }}>
          <span>Temp: {temp}°C</span>
        </div>
      </div>
      <div className="chart-bar">
        <div className="bar" style={{ height: `${humidity}%` }}>
          <span>Humidity: {humidity}%</span>
        </div>
      </div>
      <div className="chart-bar">
        <div className="bar" style={{ height: `${light}%` }}>
          <span>Light: {light} Lux</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
