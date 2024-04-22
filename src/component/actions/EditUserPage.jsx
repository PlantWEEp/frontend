import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import Sidebar from "../Navbar/Sidebar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./Style.css";

function EditUserPage() {
  const editUser = z.object({
    email: z.string().email(),
    name: z.string(),
    phone: z.string().length(10, "Must be 10 digits"),
    UPItransactionid: z.string().length(12, "Must be 12 digits"),
    designation: z.string(),
    bankname: z.string(),
  });
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(editUser),
  });

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
    <>
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
              {userData && (
                <div>
                  <h4>Edit User: {userData.name}</h4>
                  <form
                    className="row editUser"
                    onSubmit={handleSubmit((data) => {
                      updateUser(data);
                    })}
                  >
                    <div className="col-md-6">
                      <div>
                        <div>
                          <label>Name:</label>
                          <input
                            type="text"
                            name="name"
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                name: e.target.value,
                              })
                            }
                            defaultValue={userData.name}
                            {...register("name")}
                          />
                        </div>
                        <div>
                          <label>Email:</label>
                          <input
                            type="email"
                            name="email"
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              })
                            }
                            defaultValue={userData.email}
                            {...register("email")}
                          />
                          {errors.email && (
                            <div className="error-message">
                              {errors.email.message}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="inputClass">
                        <label>Phone:</label>
                        <input
                          type="Number"
                          name="phone"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              phone: +e.target.value,
                            })
                          }
                          defaultValue={userData.phone}
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
                        <label>Bankname:</label>
                        <input
                          type="text"
                          name="bankname"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              bankname: e.target.value,
                            })
                          }
                          defaultValue={userData.bankname}
                          {...register("bankname")}
                        />
                      </div>
                      <div>
                        <label>Designation:</label>
                        <input
                          type="text"
                          name="designation"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              designation: e.target.value,
                            })
                          }
                          defaultValue={userData.designation}
                          {...register("designation")}
                        />
                      </div>
                      <div>
                        <label>UPI Transaction Id:</label>
                        <input
                          type="text"
                          name="UPItransactionid"
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              UPItransactionid: e.target.value,
                            })
                          }
                          defaultValue={userData.UPItransactionid}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUserPage;
