import React from "react";
import avatar from "./avatar.jpg"; // Import ảnh từ thư mục components

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-info">
        <img
          src={avatar} // Sử dụng ảnh đã import
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <p className="profile-name">Name: Nguyễn Lê Quốc Khánh</p>
        <p className="profile-id">Mã sinh viên: B21DCCN454</p>
        <a href="https://github.com/banmike" className="profile-link">
          Visit My Website
        </a>
      </div>
    </div>
  );
};

export default Profile;
