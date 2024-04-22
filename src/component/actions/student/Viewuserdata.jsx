import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../helper/Loading";
import Error from "../../helper/Error";
import axios from "axios";
import Header from "../../Navbar/Header";
import Sidebar from "../../Navbar/Sidebar";

function Viewuserdata() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //get data  of student api

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await axios.get(`/api/v1/student/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, navigate]);

  const goBack = () => {
    navigate(`/admin/students`);
  };

  if (loading) {
    return (
      <div>
        <Loading loading={loading} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Error error={error} />
      </div>
    );
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
        <div className="containerWrapper"><button type="button" className="goBack" onClick={goBack}>
                Go back
              </button>
          <div className="container11">
            <div className="row">
              <div className="wapperRow"> 
               
              <h4>Edit User: {userData.name}</h4> 
            
              </div>
              <div className="col-md-6">
                <div>
                  <div className="inputClasszxv">
                    <label>Name:</label>
                    {userData.name}
                  </div>
                  <div className="inputClasszxv">
                    <label>Email:</label>
                    {userData.email}
                  </div>
                </div>
                <div className="inputClasszxv">
                  <label>Phone:</label> {userData.phone}
                </div>
              </div>
              <div className="col-md-6">
                <div className="inputClasszxv">
                  <label>Bankname:</label>
                  {userData.bankname}
                </div>
                <div className="inputClasszxv">
                  <label>Designation:</label>
                  {userData.designation}
                </div>
                <div className="inputClasszxv">
                  <label>UPI Transaction Id:</label>
                  {userData.UPItransactionid}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewuserdata;
