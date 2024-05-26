import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Header from "../Navbar/Header";
import Sidebar from "../Navbar/Sidebar";
import Loading from "../helper/Loading";
import Error from "../helper/Error";
import Accordion from "react-bootstrap/Accordion";
import "./style.css";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { FaRegEdit } from "react-icons/fa";

function Questionslist() {
  const navigate = useNavigate();
  const { category: categoryUrlParam, sectionName: sectionUrlParam } = useParams();

  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Category URL Param:", categoryUrlParam);
    console.log("Section URL Param:", sectionUrlParam);

    const fetchQuestions = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get(
          `/api/v1/question/allquestion?category=${categoryUrlParam}&sectionName=${sectionUrlParam}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data);

        const filteredQuestions = response.data.filter((question) => {
          return question.sectionName === sectionUrlParam;
        });

        console.log(filteredQuestions);

        setSections(filteredQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [navigate, categoryUrlParam, sectionUrlParam]);

  const handleDelete = (sectionID) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .delete(`/api/v1/question/${sectionID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => { 
        const updatedSections = sections.filter(
          (section) => section._id !== sectionID
        ); 
        setSections(updatedSections);
        toast.success('Question deleted successfully!');
      })
      .catch((error) => { 
        toast.error('Error deleting question -- ' , error);
      });
  };

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
              <h4 className="text-capitalize">
                {categoryUrlParam} Questions List
              </h4>
              <div className="d-flex flex-wrap gap-3 align-items-center"></div>
            </div>
            <div className="container">
              <div className="container11">
                {sections.length === 0 ? (
                  <p>No questions</p>
                ) : (
                  <Accordion defaultActiveKey="0">
                    {sections.map((section, index) => (
                      <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                          <div className="wapperAccordion">
                            <div>
                              {index + 1} - {section.question}
                            </div>
                            <div className="deleteAccordion">
                              <button
                                onClick={() => handleDelete(section._id)}
                                className="actionDelete"
                              >
                                <MdDelete />
                              </button>
                              <Link
                                className="actionEditqq"
                                to={`/admin/question/edit/${section._id}`}
                                state={{ section }}
                              >
                                <FaRegEdit />
                              </Link>
                            </div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="description">{section.description}</div>
                          <ul className="ListChoice">
                            {section.choices.map((choice) => (
                              <li
                                key={choice._id.$oid}
                                className={
                                  choice.isCorrect
                                    ? "correct-choice"
                                    : "incorrect-choice"
                                }
                              >
                                {choice.value}
                              </li>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Questionslist;
