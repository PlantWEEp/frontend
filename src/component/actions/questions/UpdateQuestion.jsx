import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios"; 
import Loading from "../../helper/Loading";
import Error from "../../helper/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Header from "../../Navbar/Header";
import Sidebar from "../../Navbar/Sidebar";

function UpdateQuestion() {
  const navigate = useNavigate();
  const location = useLocation();
  const { section } = location.state || {};

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [questionData, setQuestionData] = useState(section || {});

  useEffect(() => {
    if (!section) {
      navigate("/question/");
    }
  }, [section, navigate]);

  const updateQuestion = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const response = await axios.put(`/api/v1/question/${section._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); 
      toast.success('Question updated successfully!');
    } catch (error) {
      console.error("Error updating user data:", error.message);
      setError(error.message);
      toast.error('Error updating question');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChoiceChange = (index, e) => {
    const newChoices = [...questionData.choices];
    newChoices[index].value = e.target.value;
    setQuestionData((prevData) => ({
      ...prevData,
      choices: newChoices,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateQuestion(questionData);
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
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        className="form-select"
                        name="category"
                        value={questionData.category}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="basic">Basic</option>
                        <option value="advance">Advance</option>
                        <option value="higher">Higher</option>
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
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="sectionName">
                  <input
                    type="text"
                    name="description"
                    placeholder="Please add the description" 
                    value={questionData.description}
                    onChange={handleChange}
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
                    Update
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

export default UpdateQuestion;
