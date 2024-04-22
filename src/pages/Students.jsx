import React, { useEffect, useState } from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";

function Students() {
  const [searchTerm, setSearchTerm] = useState("");
  const [column, setColumn] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [copied, setCopied] = useState(false);
  const [studentsData, setStudentsData] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  //api call
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("tokeeen", "Bearer", token);
    if (!token) {
      navigate("/login");
      return;
    } 
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
  }, [navigate]);

  const handleDeleteAll = () => {
    setStudentsData([]);
  };

  const filteredStudents = studentsData.filter((student) => {
    const searchTermLowerCase = searchTerm.trim().toLowerCase();
    return Object.values(student).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTermLowerCase)
    );
  });

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

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentItems,"currentItems");

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <h4>List of Students</h4>
              <button className="deletebutton" onClick={handleDeleteAll}>
                Delete All Students
              </button>
            </div>
            <div className="container11">
              <div className="headersearch">
                <h5 className="std">Total Registered Students</h5>

                <div className="d-flex gap-3 align-items-center">
                  <select
                    className="selctVl"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                  </select>
                  <div className="search-container">
                    <input
                      type="text"
                      placeholder="Search Here"
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
                </div>
              </div>
              <div className="tableWapper">
                <table>
                  <thead>
                    <tr>
                      <th>Actions</th>
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
                    {currentItems.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <div className="actionWapper">
                            <Link
                              className="actionEdit"
                              to={`/admin/student/edit/${user._id}`}
                            >
                              <FaRegEdit />
                            </Link>
                            <Link
                              className="actionEdit"
                              to={`/students/edit/${user._id}`}
                            >
                              <FaRegEye />
                            </Link>
                            <button className="actionEdit">
                              <MdDelete />
                            </button>
                          </div>
                        </td>
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
              <div className="pagination">
                {Array.from({
                  length: Math.ceil(filteredStudents.length / itemsPerPage),
                }).map((_, index) => (
                  <button
                    className="pageBtn"
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
