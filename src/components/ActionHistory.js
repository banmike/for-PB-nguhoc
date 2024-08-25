import React, { useState } from "react";

const sampleActions = [
  { time: "2024-08-25 12:00", action: "Turned on Fan" },
  { time: "2024-08-25 12:05", action: "Turned off Fan" },
  { time: "2024-08-25 12:10", action: "Turned on Light" },
  { time: "2024-08-25 12:15", action: "Turned off Light" },
  { time: "2024-08-25 12:20", action: "Turned on AC" },
  { time: "2024-08-25 12:25", action: "Turned off AC" },
  // Thêm dữ liệu mẫu khác nếu cần
];

const pageSize = 3;

const ActionHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Tính toán các chỉ số bắt đầu và kết thúc của trang hiện tại
  const indexOfLastAction = currentPage * pageSize;
  const indexOfFirstAction = indexOfLastAction - pageSize;
  const currentActions = sampleActions.slice(
    indexOfFirstAction,
    indexOfLastAction
  );
  const totalPages = Math.ceil(sampleActions.length / pageSize);

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
    <div className="action-history">
      <h1>Action History Page</h1>
      <p>This page displays the history of actions taken on the dashboard.</p>
      <table className="action-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentActions.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default ActionHistory;
