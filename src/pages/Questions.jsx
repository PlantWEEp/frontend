import React, { useEffect, useState } from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Questions() {
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
                <Link to="/admin/addquestions" className="Addbutton">
                  Add New Questions
                </Link>
                <button className="deletebutton">Delete All Questions</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
