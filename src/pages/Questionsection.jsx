import React from 'react';
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Questionsection() {

  const category = [
    { name: "Basic", url: "/" },
    { name: "Advance", url: "/" },
    { name: "Higher", url: "/" },
  ];

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
            {/* Render each question */}
            {category.map((category, index) => (
              <div className="container11" key={index}>
                <Link to="">
                  <div className="contentSection">
                    <div>
                      <h6>{category.name}</h6>
                    </div>
                    <div className="d-flex gap-3">
                    <FaLongArrowAltRight />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
