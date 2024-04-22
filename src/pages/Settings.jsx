import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Navbar/Header";
import Sidebar from "../component/Navbar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

function Settings() {
   const [adminProfileData, setAdminProfileData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
 
   const navigate = useNavigate();
 
   useEffect(() => {
     const token = localStorage.getItem("token");
     console.log("tokeeen",token);
     if (!token) { 
       navigate('/login');  
       return;
     }
 
     axios.get(`/api/v1/admin/adminprofile`, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
       .then((response) => {
         console.log("Admin profile response:", response.data);
         setAdminProfileData(response.data);
         setLoading(false);
       })
       .catch((error) => {
         console.error("Error fetching admin profile:", error);
         setError(error.message);
         setLoading(false);
       });
   }, [navigate]);
 
   if (loading) {
     return <div>Loading...</div>;
   }
 
   if (error) {
     return <div>Error: {error}</div>;
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
                     <h4>Profile Page</h4>
                  </div>
                  <div className="profileWapper"> 
                     <div className="row pt-3 gap-3 w-100">
                        <div className="col-md-12">
                           <div className="boxPro">Name:  {adminProfileData.name} </div>
                        </div>
                        <div className="col-md-12">
                           <div className="boxPro">Email:  {adminProfileData.email} </div>
                        </div> 
                        <Link to="">Change password</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Settings;
