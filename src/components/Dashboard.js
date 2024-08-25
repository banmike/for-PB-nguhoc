import React, { useState, useEffect } from "react";
import { FaTemperatureHigh, FaWater, FaSun } from "react-icons/fa"; // Import các icon từ react-icons
import Chart from "./Chart"; // Sử dụng component Chart mới
import ToggleButtons from "./ToggleButtons";

const Dashboard = () => {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTemp(Math.floor(Math.random() * 100));
      setHumidity(Math.floor(Math.random() * 100));
      setLight(Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="info-box">
        <FaTemperatureHigh className="info-icon" />
        <span>Temp</span>
        <span>{temp}°C</span>
      </div>
      <div className="info-box">
        <FaWater className="info-icon" />
        <span>Humidity</span>
        <span>{humidity}%</span>
      </div>
      <div className="info-box">
        <FaSun className="info-icon" />
        <span>Light</span>
        <span>{light} Lux</span>
      </div>
      <Chart temp={temp} humidity={humidity} light={light} />
      <ToggleButtons />
    </div>
  );
};

export default Dashboard;
