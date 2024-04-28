import React, { useEffect, useState } from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Loading from "../component/helper/Loading";
import Error from "../component/helper/Error";

export default function Questionsection() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          "http://localhost:5173/api/v1/question/allquestion",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setQuestions(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (error) {
    return <Error error={error} />;
  }

  // Filter questions based on category
  const hardQuestions = questions.filter((question) => question.category === "hard");
  const mediumQuestions = questions.filter((question) => question.category === "medium");
  const difficultQuestions = questions.filter((question) => question.category === "difficult");

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
            {/* Render hard questions */}
            <h5>Hard Questions:</h5>
            {hardQuestions.map((question, index) => (
              <div className="container11" key={index}>
                <Link to={`/question/${question.id}`}>
                  <div className="contentSection">
                    <div>
                      <h6>{question.text}</h6>
                    </div>
                    <div className="d-flex gap-3">
                      <FaStar />
                      <MdDelete />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* Render medium questions */}
            <h5>Medium Questions:</h5>
            {mediumQuestions.map((question, index) => (
              <div className="container11" key={index}>
                <Link to={`/question/${question.id}`}>
                  <div className="contentSection">
                    <div>
                      <h6>{question.text}</h6>
                    </div>
                    <div className="d-flex gap-3">
                      <FaStar />
                      <MdDelete />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            {/* Render difficult questions */}
            <h5>Difficult Questions:</h5>
            {difficultQuestions.map((question, index) => (
              <div className="container11" key={index}>
                <Link to={`/question/${question.id}`}>
                  <div className="contentSection">
                    <div>
                      <h6>{question.text}</h6>
                    </div>
                    <div className="d-flex gap-3">
                      <FaStar />
                      <MdDelete />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
