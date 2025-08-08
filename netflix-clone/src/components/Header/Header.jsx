import React from "react";
import { FaSearch, FaBell, FaChevronDown, FaUserCircle } from "react-icons/fa";
import "./header.css";

function Header() {
  return (
    <div
      className="navbar bg-dark px-4 d-flex justify-content-between align-items-center"
      style={{ height: "60px" }}
    >
      {/* Left Side */}
      <div className="d-flex align-items-center gap-4">
        <span className="fw-bold text-danger fs-4">Netflix</span>
        <ul className="d-flex list-unstyled mb-0 gap-3">
          <li className="text-white">Home</li>
          <li className="text-white">TV Shows</li>
          <li className="text-white">Movies</li>
          <li className="text-white">Latest</li>
          <li className="text-white">My List</li>
          <li className="text-white">Browse by Language</li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-3">
        <FaSearch size={20} className="text-white cursor-pointer" />
        <FaBell size={20} className="text-white cursor-pointer" />
        <FaChevronDown size={20} className="text-white cursor-pointer" />
        <FaUserCircle size={24} className="text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default Header;
