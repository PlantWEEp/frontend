import React, { useEffect, useState } from "react";
import Header from "../../Navbar/Header";
import Sidebar from "../../Navbar/Sidebar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../../helper/Error";
import Loading from "../../helper/Loading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Style.css";

function EditUserPage() {
  const editUserSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    phone: z.string().regex(/^\d{10}$/, "Must be 10 digits"),
    UPItransactionid: z.string().regex(/^\d{12}$/, "Must be 12 digits"),
    designation: z.string(),
    bankname: z.string(),
  });
  
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(editUserSchema),
  });

  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        const data = response.data;
        setValue('email', data.email);
        setValue('name', data.name);
        setValue('phone', data.phone);
        setValue('UPItransactionid', data.UPItransactionid);
        setValue('designation', data.designation);
        setValue('bankname', data.bankname);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId, navigate, setValue]);

  const cancelUpdate = () => {
    navigate(`/admin/students`);
  };

  const updateUser = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const response = await axios.put(`/api/v1/student/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      navigate(`/admin/students`);
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
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
        <div className="containerWrapper">
          <div className="container11">
            <h4>Edit User</h4>
            <form className="row editUser" onSubmit={handleSubmit(updateUser)}>
              <div className="col-md-6">
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    {...register("name")}
                  />
                  {errors.name && (
                    <div className="error-message">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="error-message">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="inputClass">
                  <label>Phone:</label>
                  <input
                    type="text"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <div className="error-message">
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <label>Bank Name:</label>
                  <input
                    type="text"
                    {...register("bankname")}
                  />
                  {errors.bankname && (
                    <div className="error-message">
                      {errors.bankname.message}
                    </div>
                  )}
                </div>
                <div>
                  <label>Designation:</label>
                  <input
                    type="text"
                    {...register("designation")}
                  />
                  {errors.designation && (
                    <div className="error-message">
                      {errors.designation.message}
                    </div>
                  )}
                </div>
                <div>
                  <label>UPI Transaction Id:</label>
                  <input
                    type="text"
                    {...register("UPItransactionid")}
                  />
                  {errors.UPItransactionid && (
                    <div className="error-message">
                      {errors.UPItransactionid.message}
                    </div>
                  )}
                </div>
                <div className="btnn d-flex gap-3 wrap">
                  <button
                    type="button"
                    onClick={cancelUpdate}
                    className="editCancel"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="editUserbtn">
                    Update Student
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;
