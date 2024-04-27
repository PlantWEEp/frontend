
import React, { useState } from 'react';
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Questionsection() {
  // State to manage star icon click
  const [starClicked, setStarClicked] = useState(false);
  // State to manage search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle star icon click
  const handleStarClick = () => {
    setStarClicked(!starClicked);
  };

  return (
    <>
      <div>
        <div className="top-bar">
          <Header />
        </div>
        <div className="sider-bar">
          <Sidebar />
        </div>
        <div className="primarycontainer">
          <div className="containerWapper">
            <div className="studentdeletebutton">
              <h4>List of Questions</h4>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search Here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="search-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <button className="deletebutton">Delete All Questions</button>
              </div>
            </div>
            {/* Tick box, section title, star icon, and delete button */}
            <div className="container11">
              <div className="headersearch">
                <div>
                  <h2>Section 1 (total 20 questions)</h2>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`star-icon ${starClicked ? 'star-clicked' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={handleStarClick}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <MdDelete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
