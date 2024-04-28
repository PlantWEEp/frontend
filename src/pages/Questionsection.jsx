import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import "./style.css";
import Loading from "../component/helper/Loading";
import Error from "../component/helper/Error";

export default function Questionsection() {
  const navigate = useNavigate();

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  
  const categories = [
    { name: "Basic", url: "/admin/category/basic" },
    { name: "Advance", url: "/admin/category/advance" },
    { name: "Higher", url: "/admin/category/higher" },
  ];
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
              <h4>List of Questions</h4>
              <div className="d-flex flex-wrap gap-3 align-items-center">
                <button  className="Addbutton" to="/admin/addquestions">Add Questions</button>
                <button className="deletebutton">Delete All Questions</button>
              </div>
            </div>
            {/* Render each question */}
            <div className="container11">
              {categories.map((category, index) => (
                <Link to={category.url} key={index}>
                  <div className="contentSection">
                    <div>
                      <h6>{category.name}</h6>
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
