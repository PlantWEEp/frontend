import React, { useState } from 'react';
import Header from '../component/Navbar/Header';
import Sidebar from '../component/Navbar/Sidebar';
import './style.css';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentsData, setStudentsData] = useState([
    {
      id: 1,
      firstName: 'Mark',
      emailid: 'abc@gmail.com',
      UPITransactionId: '123456789012',
    },
    {
      id: 2,
      firstName: 'Jacob',
      emailid: 'yjhd@gmail.com',
      UPITransactionId: '3453589012',
    },
    {
      id: 3,
      firstName: 'Larry',
      emailid: 'nvbn@gmail.com',
      UPITransactionId: '2345435789012',
    },
  ]);

  const handleDeleteAll = () => {
    setStudentsData([]);
  };

  const filteredStudents = studentsData.filter(
    (student) =>
      student.firstName
        .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
      student.UPITransactionId
        .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
      student.emailid
        .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
  );

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
              <button class="deletebutton" onClick={handleDeleteAll}>Delete All Students</button>
            </div>
            <div className="container11">
              <div className="headersearch">
                <h5 className="std">Total Registered Students</h5>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Serial No</th>
                    <th>Actions</th>
                    <th>Student Name</th>
                    <th>Email-Id</th>
                    <th>UPI Transaction Id</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>
                        <div className="actionWapper">
                          <Link className="actionEdit" to={`/students/${student.id}`}>
                            <FaRegEdit />
                          </Link>
                          <Link className="actionEdit" to={`/students/edit/${student.id}`}>
                            <FaRegEye />
                          </Link>
                          <button className="actionEdit">
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                      <td>{student.firstName}</td>
                      <td>{student.emailid}</td>
                      <td>{student.UPITransactionId}</td>
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

export default Students;


