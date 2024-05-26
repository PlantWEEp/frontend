import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import Header from "../Navbar/Header";
import Sidebar from "../Navbar/Sidebar";
import { FaLongArrowAltRight } from "react-icons/fa";
import noquestions from  "../../assets/no-questions.svg"

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

        const response = await axios.get(
          `/api/v1/question/allquestion?category=${categoryUrlParam}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const filterCategory = response.data.filter((data) => {
          return data.category === categoryUrlParam;
        });
        console.log(filterCategory);

        const uniqueSectionNames = new Set();
        const filteredSections = filterCategory.filter((section) => {
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
            <h4 className="text-capitalize">
              {categoryUrlParam} Questions List
            </h4>
            <div className="d-flex flex-wrap gap-3 align-items-center"></div>
          </div>
          <div className="container11">
            {sections.length === 0 ? (
              <>
               <div className="noQuestions">
               <p>
                <div className="imageNodata">
               <img src={noquestions} alt="No Questions" />
                </div>
                 <h5 className="my-4"> Currently there are no questions added in the {categoryUrlParam} category</h5>
                </p>
                <div className="twobtn">
                <Link className="Addbutton" to="/admin/addquestions">Add Questions</Link>
                <Link className="goback" to="/admin/category">Go Back</Link>
                  </div>
               </div>
              </>
            ) : (
              sections.map((section, index) => (
                <Link
                  to={`/question/${
                    section.category
                  }/${section.sectionName.replace(/\s+/g, "-")}`}
                  key={index}
                >
                  <div className="contentSection">
                    <div>
                      <h6>{section.sectionName}</h6>
                    </div>
                    <div className="d-flex gap-3">
                      <FaLongArrowAltRight />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
