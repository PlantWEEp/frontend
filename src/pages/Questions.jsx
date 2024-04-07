import React, { useState } from 'react';
import Header from '../component/Navbar/Header';
import Sidebar from '../component/Navbar/Sidebar';
import './style.css';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

export default function Questions() {

  const [searchTerm, setSearchTerm] = useState("");

  const studentsData = [
    {
      id: 1,
      firstName: "Mark",
      emailid: "abc@gmail.com",
      UPITransactionId: "123456789012",
    },
    {
      id: 2,
      firstName: "Jacob",
      emailid: "yjhd@gmail.com",
      UPITransactionId: "3453589012",
    },
    {
      id: 3,
      firstName: "Larry",
      emailid: "nvbn@gmail.com",
      UPITransactionId: "2345435789012",
    },
  ];

  const filteredStudents = studentsData.filter(
    (student) =>
      student.firstName
        .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
      student.UPITransactionId.trim()
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
              <h4>List of Questions</h4>
              <button class="Addbutton">Add New Questions</button>
              <button class="deletebutton">Delete All Questions</button>
            </div>
            <div className="container11">
              
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

