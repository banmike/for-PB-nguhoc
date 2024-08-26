import React, { useState, useEffect } from "react";
import { FaTemperatureHigh, FaWater, FaSun } from "react-icons/fa"; // Import các icon từ react-icons
import Chart from "./Chart"; // Sử dụng component Chart mới
import ToggleButtons from "./ToggleButtons";
import LineChart from "./ChartLine";

const Dashboard = () => {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [light, setLight] = useState(0);

  useEffect(() => {
    // Tạo giá trị ngẫu nhiên chỉ một lần khi component được mount
    setTemp(Math.floor(Math.random() * 100));
    setHumidity(Math.floor(Math.random() * 100));
    setLight(Math.floor(Math.random() * 100));
  }, []); // Dependency array rỗng đảm bảo useEffect chỉ chạy một lần khi component mount

  // Hàm để tính toán độ sáng dựa trên giá trị
  const getLightness = (value) => {
    return 90 - (value / 100) * 50; // Giá trị càng cao, màu càng đậm (độ sáng càng thấp)
  };

  return (
    <div className="main-right">
      <div className="dashboard">
        <div className="dashboard-sidebar">
          <div
            className="info-box"
            style={{
              backgroundColor: `hsl(0, 100%, ${getLightness(temp)}%)`, // Màu đỏ cho Temperature
            }}
          >
            <FaTemperatureHigh className="info-icon" />
            <span>Temp</span>
            <span>{temp}°C</span>
          </div>
          <div
            className="info-box"
            style={{
              backgroundColor: `hsl(120, 100%, ${getLightness(humidity)}%)`, // Màu xanh cho Humidity
            }}
          >
            <FaWater className="info-icon" />
            <span>Humidity</span>
            <span>{humidity}%</span>
          </div>
          <div
            className="info-box"
            style={{
              backgroundColor: `hsl(60, 100%, ${getLightness(light)}%)`, // Màu vàng cho Light
            }}
          >
            <FaSun className="info-icon" />
            <span>Light</span>
            <span>{light} Lux</span>
          </div>
        </div>
        <div className="chart-line">
          <LineChart />
        </div>
      </div>
      <ToggleButtons />
    </div>
  );
};

export default Dashboard;
