import React, { useState } from "react";

const sampleData = [
  { time: "2024-08-25 12:00", temperature: 25, humidity: 60, light: 300 },
  { time: "2024-08-25 12:15", temperature: 26, humidity: 65, light: 320 },
  { time: "2024-08-25 12:30", temperature: 27, humidity: 70, light: 310 },
  { time: "2024-08-25 12:45", temperature: 28, humidity: 75, light: 330 },
  { time: "2024-08-25 13:00", temperature: 29, humidity: 80, light: 340 },
  { time: "2024-08-25 13:15", temperature: 30, humidity: 85, light: 350 },
  // Thêm dữ liệu mẫu khác nếu cần
];

const pageSize = 5;

const DataSensor = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tính toán các chỉ số bắt đầu và kết thúc của trang hiện tại
  const indexOfLastData = currentPage * pageSize;
  const indexOfFirstData = indexOfLastData - pageSize;
  const currentData = sampleData.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(sampleData.length / pageSize);

  // Hàm để tạo các nút phân trang với dấu ba chấm
  const renderPagination = () => {
    let pages = [];
    const range = 2; // Khoảng cách giữa các số trang hiển thị

    for (let i = 1; i <= totalPages; i++) {
      if (totalPages <= 1) return;

      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - range && i <= currentPage + range)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages.map((page, index) => (
      <button
        key={index}
        onClick={() => typeof page === "number" && handlePageChange(page)}
        className={page === currentPage ? "active" : ""}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="data-sensor">
      <h1>Data Sensor Page</h1>
      <p>This page displays data collected from the sensors.</p>
      <table className="data-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Temperature (°C)</th>
            <th>Humidity (%)</th>
            <th>Light (Lux)</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.temperature}</td>
              <td>{entry.humidity}</td>
              <td>{entry.light}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default DataSensor;
