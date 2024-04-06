import React from 'react'
import "./Login.css";

export default function Login() {
    return (
        <div class="login-container">
            <div class="left-side"></div>
            <div class="right-side">
                <div class="center-box">
                    <h4 class="heading">Login to My Tution App</h4>
                    <h6 class="heading2">Please enter your email and password to continue</h6>
                    <div class="input-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" placeholder="abc@gmail.com" />
                    </div>
                    <div class="input-group">
                        <label htmlFor="password">Password:</label>
                        <span class="forgot-password">Forgot password?</span>
                        <input type="password" id="password" placeholder="" />
                    </div>
                    <div class="input-group">
                        <button class="signin-button">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
