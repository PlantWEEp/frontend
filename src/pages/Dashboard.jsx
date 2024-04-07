import React, { useState } from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

export default function Dashboard() {
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
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="fi-box">
                      <div>
                        <div>Total Students</div>
                        <div className="d-flex align-items-center gap-3 my-2">
                          <h3>150</h3>Students
                        </div>
                        <Link>
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
                      <div className="box-iocns">
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 32 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.587821"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.66663 5.33333C6.66663 8.27885 9.05444 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05444 0 6.66663 2.38781 6.66663 5.33333ZM20 10.6667C20 12.8758 21.7908 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7908 6.66667 20 8.45753 20 10.6667Z"
                            fill="#8280FF"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.1939 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9987 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3468 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
                            fill="#8280FF"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="fi-box">
                      <div>
                        <div>Total Questions</div>
                        <div className="d-flex align-items-center gap-3 my-2">
                          <h3>675</h3>Questions
                        </div>
                        <Link>
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
                            View Questions Table
                          </div>
                        </Link>
                      </div>
                      <div className="box-iocns-green">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6_13)">
                            <path
                              d="M9.78616 23.2933C8.91828 23.6718 7.90778 23.2751 7.52928 22.4072L7.23853 21.7406C6.56203 20.1895 6.93366 18.376 8.16328 17.2278C9.08816 16.3642 9.32122 14.9755 8.72978 13.8507C8.08222 12.6191 6.60512 12.0461 5.29567 12.5179C3.9103 13.0161 3.13481 14.5119 3.52894 15.9214C3.56459 16.0485 3.85266 16.4548 4.30712 16.6348C4.76056 16.8148 5.27041 16.6719 5.44847 16.2201C5.49284 16.1059 5.52391 15.9837 5.53947 15.8615C5.54728 15.8025 5.55022 15.743 5.54853 15.6838C5.54616 15.5999 5.55022 15.515 5.54853 15.4311C5.54616 15.3719 5.54853 15.3124 5.54616 15.2532C5.53947 15.0732 5.42828 14.955 5.24822 14.9107C5.16897 14.8921 5.11047 14.8314 5.15503 14.6838C5.17059 14.6009 5.17059 14.516 5.17059 14.4321C5.17059 13.5642 5.86566 12.8519 6.72141 12.6145C8.48178 12.0965 10.2288 12.8695 10.7407 14.617C10.9592 15.2447 11.0859 15.8937 11.1247 16.5456C11.1331 16.7603 11.1755 16.9707 11.2595 17.1706C11.3808 17.4323 11.5672 17.6495 11.7914 17.8054C11.9207 17.8844 11.9895 18.0256 11.9895 18.1684C11.9895 18.2745 11.9844 18.3806 11.9778 18.4867C11.9632 18.67 11.8466 18.8066 11.6939 18.8563C11.6341 18.8721 11.5699 18.8795 11.5057 18.8795C11.4264 18.8795 11.3472 18.8721 11.2689 18.8563C11.2384 18.8495 11.2074 18.8438 11.1769 18.8438C11.0416 18.8332 10.9109 18.8406 10.7847 18.8657C10.3906 18.9434 10.0716 19.1938 9.87247 19.5433C9.39153 20.364 9.49053 21.326 10.0299 22.0702C10.3738 22.5408 10.594 23.0709 10.678 23.6417C10.7147 23.8498 10.6821 24.0709 10.588 24.2417C10.4885 24.4234 10.2894 24.5484 10.0595 24.5794C9.83091 24.6113 9.58734 24.5467 9.42078 24.4054C9.30572 24.3041 9.25997 24.1463 9.29397 23.992C9.31503 23.9013 9.35378 23.8134 9.40616 23.7353C9.48241 23.623 9.55122 23.5256 9.67247 23.4615C9.71684 23.4372 9.754 23.4009 9.78616 23.2933ZM9.78616 23.2933C8.91828 23.6718 7.90778 23.2751 7.52928 22.4072L7.23853 21.7406C6.56203 20.1895 6.93366 18.376 8.16328 17.2278C9.08816 16.3642 9.32122 14.9755 8.72978 13.8507C8.08222 12.6191 6.60512 12.0461 5.29567 12.5179C3.9103 13.0161 3.13481 14.5119 3.52894 15.9214C3.56459 16.0485 3.85266 16.4548 4.30712 16.6348C4.76056 16.8148 5.27041 16.6719 5.44847 16.2201C5.49284 16.1059 5.52391 15.9837 5.53947 15.8615C5.54728 15.8025 5.55022 15.743 5.54853 15.6838C5.54616 15.5999 5.55022 15.515 5.54853 15.4311C5.54616 15.3719 5.54853 15.3124 5.54616 15.2532C5.53947 15.0732 5.42828 14.955 5.24822 14.9107C5.16897 14.8921 5.11047 14.8314 5.15503 14.6838C5.17059 14.6009 5.17059 14.516 5.17059 14.4321C5.17059 13.5642 5.86566 12.8519 6.72141 12.6145C8.48178 12.0965 10.2288 12.8695 10.7407 14.617C10.9592 15.2447 11.0859 15.8937 11.1247 16.5456C11.1331 16.7603 11.1755 16.9707 11.2595 17.1706C11.3808 17.4323 11.5672 17.6495 11.7914 17.8054C11.9207 17.8844 11.9895 18.0256 11.9895 18.1684C11.9895 18.2745 11.9844 18.3806 11.9778 18.4867C11.9632 18.67 11.8466 18.8066 11.6939 18.8563C11.6341 18.8721 11.5699 18.8795 11.5057 18.8795C11.4264 18.8795 11.3472 18.8721 11.2689 18.8563C11.2384 18.8495 11.2074 18.8438 11.1769 18.8438C11.0416 18.8332 10.9109 18.8406 10.7847 18.8657C10.3906 18.9434 10.0716 19.1938 9.87247 19.5433C9.39153 20.364 9.49053 21.326 10.0299 22.0702C10.3738 22.5408 10.594 23.0709 10.678 23.6417C10.7147 23.8498 10.6821 24.0709 10.588 24.2417C10.4885 24.4234 10.2894 24.5484 10.0595 24.5794C9.83091 24.6113 9.58734 24.5467 9.42078 24.4054C9.30572 24.3041 9.25997 24.1463 9.29397 23.992C9.31503 23.9013 9.35378 23.8134 9.40616 23.7353C9.48241 23.623 9.55122 23.5256 9.67247 23.4615C9.71684 23.4372 9.754 23.4009 9.78616 23.2933Z"
                              fill="#8280FF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_13">
                              <rect
                                width="29.3127"
                                height="29.3463"
                                fill="white"
                                transform="translate(1.30566 1.33325)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container11">
              <div class="headersearch">
                <h5 class="std">Total Registered Students</h5>
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
              <table class="table">
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
                        <div class="actionWapper">
                        <Link class="actionEdit" to={`/students/${student.id}`}>
                        <FaRegEdit />
                        </Link>
                        <Link
                          class="actionEdit"
                          to={`/students/edit/${student.id}`}
                        >
                          <FaRegEye />
                        </Link>
                        <button class="actionEdit">
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
