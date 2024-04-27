
import React, { useState } from 'react';
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

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
                
                <button className="deletebutton">Delete All Questions</button>
              </div>
            </div>
            {/* section title, star icon, and delete button */}
            <div className="container11">
              <Link patth="">
              <div className="contentSection">
                <div>
                  <h6>Section 1 (total 20 questions)</h6>
                </div>
                <div className='d-flex gap-3'>
                <FaStar />
                  <MdDelete />
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
