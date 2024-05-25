import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import Header from "../Navbar/Header";
import Sidebar from "../Navbar/Sidebar";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function FilteredCategoryBasic() {
  const navigate = useNavigate();
  const { slug: categoryUrlParam } = useParams();
 

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Category URL Param:", categoryUrlParam);
    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
    
        const response = await axios.get(`/api/v1/question/allquestion?category=${categoryUrlParam}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
     
        const filterCategory = response.data.filter(data => {
          return data.category === categoryUrlParam;
        });
        console.log(filterCategory);
    
 
        const uniqueSectionNames = new Set();
        const filteredSections = filterCategory.filter(section => { 
          if (!uniqueSectionNames.has(section.sectionName)) {
            uniqueSectionNames.add(section.sectionName);
            return true;
          }
          return false;
        });
    
        setSections(filteredSections);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    
    

    fetchQuestions();
  }, [navigate, categoryUrlParam]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
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
            <h4>{categoryUrlParam} Questions List</h4>
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <button className="deletebutton">Delete All Questions</button>
            </div>
          </div>
          <div className="container11">
            {sections.map((section, index) => (
              <Link to={`/${section.category}/question/${section.sectionName}`} key={index}>
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
  );
}
