
import React, { useState } from 'react';
import Header from '../component/Navbar/Header';
import Sidebar from '../component/Navbar/Sidebar';
import './style.css';
import { Link } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from "react-icons/md";

// Functional component for easy questions
const SetOne = () => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this set of questions?")) {
      // Add delete functionality here
      console.log("Delete button clicked for Set One");
    }
  };

  return (
    <div className="question-set question-setone">
      <h6>Set One: Easy Questions</h6>
      <div className="delete-container">
        <button className="delete-button" onClick={handleDelete}>
          Delete Set
        </button>
        <span className="arrow"><MdOutlineArrowForwardIos /></span>
      </div>
    </div>
  );
};

// Functional component for medium questions
const SetTwo = () => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this set of questions?")) {
      // Add delete functionality here
      console.log("Delete button clicked for Set Two");
    }
  };

  return (
    <div className="question-set question-settwo">
      <h6>Set Two: Medium Questions</h6>
      <div className="delete-container">
        <button className="delete-button" onClick={handleDelete}>
          Delete Set
        </button>
        <span className="arrow"><MdOutlineArrowForwardIos /></span>
      </div>
    </div>
  );
};

// Functional component for difficult questions
const SetThree = () => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this set of questions?")) {
      // Add delete functionality here
      console.log("Delete button clicked for Set Three");
    }
  };

  return (
    <div className="question-set question-setthree">
      <h6>Set Three: Difficult Questions</h6>
      <div className="delete-container">
        <button className="delete-button" onClick={handleDelete}>
          Delete Set
        </button>
        <span className="arrow"><MdOutlineArrowForwardIos /></span>
      </div>
    </div>
  );
};

export default function Questions() {
  const [searchTerm, setSearchTerm] = useState("");

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
              <button className="Addbutton">Add New Questions</button>
              <button className="deletebutton">Delete All Questions</button>
            </div>
            <div className="container11">
              <SetOne />
              <SetTwo />
              <SetThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

