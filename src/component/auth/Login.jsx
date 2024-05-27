import React, { useEffect, useState } from "react";
import "./Login.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios"; 
import { useNavigate} from "react-router-dom"; 

const adminLoginz = z.object({
  email: z.string().email(),
  password: z.string(),
});
export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit, 
    formState: { errors },
    reset, 
  } = useForm({
    resolver: zodResolver(adminLoginz),
  });
  useEffect(() => { 
    const token = localStorage.getItem("token");
  
    if (token && token.startsWith('Bearer ')) { 
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);
  
  

  const submitData = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/v1/admin/login', data);
      const jwt = response.data.token;
      if (!jwt) {
        throw new Error('No JWT token received from server');
      }
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`; 
      localStorage.setItem("token", jwt);
      console.log("jwt", jwt);
      setLoading(false);
      navigate("/");
      reset();  
    } catch (error) {
      console.error('Login failed:', error.message || error);
      setLoading(false); 
    }
  };
  


  return (
    <div className="container-fiuld blue-white">
      <div className="row">
        <div className="col-md-6 blue-bg"></div>
        <div className="col-md-6 ">
          <div className="d-flex justify-content-center align-items-center right-div">
            <div className="center-box">
              <h4 className="heading">Login to My Tution App</h4>
              <h6 className="heading2">
                Please enter your email and password to continue
              </h6>
              <form onSubmit={handleSubmit(submitData)}>  
                <div className="input-group">
                  <label htmlFor="email">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="abc@gmail.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="error-message">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="input-group">
                  <div className="labeldiv">
                    <label htmlFor="password">Password:</label>
                    <span className="forgot-password">Forgot password?</span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    placeholder=""
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="error-message">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div className="input-group">
                  <button type="submit" className="signin-button" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
