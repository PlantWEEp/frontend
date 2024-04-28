import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import Header from "../Navbar/Header";
import Sidebar from "../Navbar/Sidebar";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function FilteredcategoryBasic() {
  const navigate = useNavigate();
  const { slug } = useParams();
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await axios.get("/api/v1/question/allquestion", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setQuestions(response.data);
        setLoading(false);
        console.log(response.data);

        const duplicateQuestions = findDuplicates(response.data);
        console.log("Duplicate questions:", duplicateQuestions);
        setSections(duplicateQuestions);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);


  
  function findDuplicates(questions) {
    const counts = {};
    const duplicates = [];

    questions.forEach((question) => {
      const questionSectionName = question.sectionName;
      counts[questionSectionName] = (counts[questionSectionName] || 0) + 1;
      if (counts[questionSectionName] === 2) {
        duplicates.push(question);
      }
    });

    return duplicates;
  }

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (error) {
    return <Error error={error} />;
  }

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
              <h4>Basic Questions List </h4>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button className="deletebutton">Delete All Questions</button>
              </div>
            </div>
            <div className="container11">
              {sections.map((section, index) => (
                <Link to={`/blog/post/${section.sectionName}`} key={index}>  
                <div className="contentSection">
                  <div>
                    <h6>{section.sectionName}</h6>
                  </div>
                  <div className="d-flex gap-3">
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
