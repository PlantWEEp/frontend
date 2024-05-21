import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { IoCopyOutline } from "react-icons/io5";

export default function Dashboard() {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [studentCount, setStudentCount] = useState(0);  
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", "Bearer", token);
    if (!token) {
      navigate("/login");
      return;
    }
    setLoading(true);
  
    // get students data
    axios
      .get(`/api/v1/student/get-student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Admin profile response:", response.data);
        setStudentsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setError(error.message);
        setLoading(false);
      });
  
    // get student count
    axios
      .get(`/api/v1/question/questionCount`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Student count response:", response.data);
        setStudentCount(response.data.count); // Assuming response.data is an object with a 'count' property
      })
      .catch((error) => {
        console.error("Error fetching student count:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);  
      });
  }, []);  
  
  const sliceStudent = studentsData.slice(0, 10);

  //copy clipboard
  const handleCopy = (password) => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (
    <>
      <div className="top-bar">
        <Header />
      </div>
      <div className="sider-bar">
        <Sidebar />
      </div>
      <div className="primarycontainer">
        <div className="containerWapper">
          <div className="row">
            {/* total students  */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="fi-box">
                    <div>
                      <div>Total Questions</div>
                      <div className="d-flex align-items-center gap-3 my-2">
                        <h3>{studentCount}</h3>Questions
                      </div>
                      <Link to="/admin/category">
                        <div className="d-flex gap-2 viewBtn">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                              fill="#00B69B"
                            />
                          </svg>
                          View Students Table
                        </div>
                      </Link>
                    </div>
                    <div className="box-iocns">{/* Your SVG code */}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* total question  */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="fi-box">
                    <div>
                      <div>Total Students</div>
                      <div className="d-flex align-items-center gap-3 my-2">
                        <h3>{studentsData.length}</h3>Students
                      </div>
                      <Link to="/admin/students">
                        <div className="d-flex gap-2 viewBtn">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                              fill="#00B69B"
                            />
                          </svg>
                          View Students Table
                        </div>
                      </Link>
                    </div>
                    <div className="box-iocns"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container11">
            <div className="headersearch">
              <h5 className="std">Total Registered Students</h5>
            </div>
            <div className="tableWapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Designation</th>
                    <th>Password</th>
                    <th>Bank Name</th>
                    <th>UPI Transaction Id</th>
                  </tr>
                </thead>
                <tbody>
                  {sliceStudent.map((user, index) => (
                    <tr key={index}> 
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.designation}</td>
                      <td>
                        <div className="copyWrapper">
                          {user.password}
                          <span
                            onClick={() => handleCopy(user.password, index)}
                            className="copyBtn"
                          >
                            {copied === index ? "Copy" : <IoCopyOutline />}
                          </span>
                        </div>
                      </td>
                      <td>{user.bankname}</td>
                      <td>{user.UPItransactionid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
