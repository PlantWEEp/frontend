import React, { useEffect, useState } from "react";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar"; 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../component/helper/Loading";
import Error from "../component/helper/Error";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Addquestions() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionData, setQuestionData] = useState({
    sectionName: "",
    question: "",
    choices: [
      { value: "", isCorrect: true },
      { value: "", isCorrect: false },
      { value: "", isCorrect: false },
      { value: "", isCorrect: false }
    ],
    description: "",
    category: ""
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChoiceChange = (index, e) => {
    const { value } = e.target;
    const newChoices = questionData.choices.map((choice, i) =>
      i === index ? { ...choice, value } : choice
    );
    setQuestionData((prevData) => ({
      ...prevData,
      choices: newChoices,
    }));
  };

  const handleCorrectAnswerChange = (e) => {
    const { value } = e.target;
    const newChoices = questionData.choices.map((choice) =>
      choice.value === value
        ? { ...choice, isCorrect: true }
        : { ...choice, isCorrect: false }
    );
    setQuestionData((prevData) => ({
      ...prevData,
      choices: newChoices,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      await axios.post("/api/v1/question/add-questions", questionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Question added successfully!");
      setQuestionData({
        sectionName: "",
        question: "",
        choices: [
          { value: "", isCorrect: true },
          { value: "", isCorrect: false },
          { value: "", isCorrect: false },
          { value: "", isCorrect: false }
        ],
        description: "",
        category: ""
      });
    } catch (error) {
      console.error("Error submitting question:", error);
      setError(error.message);
      toast.error("error : ",error);
    }
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
            <div className="backtoquestionbutton">
              <h4 className="listofquestions">List of Questions</h4>
            </div>
            <div className="container11">
              <form className="row editUser" onSubmit={handleSubmit}>
                <div className="sectionName">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="sectionName"
                        placeholder="Add section name"
                        value={questionData.sectionName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        name="category"
                        value={questionData.category}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Basic">Basic</option>
                        <option value="Advance">Advance</option>
                        <option value="Higher">Higher</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="sectionName">
                  <textarea
                    type="text"
                    name="question"
                    placeholder="Please add the questions here"
                    value={questionData.question}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="sectionName">
                  <input
                    type="text"
                    name="description"
                    placeholder="Please add the description" 
                    value={questionData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="row sectionName">
                  <label className="labelfor">
                    Please enter the options here (Please add correct answer on the first column):
                  </label>
                  {questionData.choices.map((choice, index) => (
                    <div className="col-md-4" key={index}>
                      <input
                      required
                        type="text"
                        placeholder={`Add option ${index + 1}`}
                        value={choice.value}
                        onChange={(e) => handleChoiceChange(index, e)}
                      />
                    </div>
                  ))}
                </div>
                <div className="submitcancelbutton">
                  <button className="submitbutton" type="submit">
                    Submit
                  </button>
                  <Link to="/admin/category" className="cancelbutton">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
