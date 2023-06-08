import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Nav from './Nav';

const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend API URL

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setotp] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
      otp
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, loginData);

      // Handle success, e.g., store tokens in state or browser storage
      console.log('Login successful', response.data);
      navigate("/Dashboard");
    } catch (err) {
      // Handle error, e.g., display error message
      console.error('Login failed', err);
    }
  };

  return (
    <div>
      <Nav/>
      <h2 style={{display:"flex",justifyContent:"center"}}>Login</h2>
      <form onSubmit={handleLogin} class="signup-form">
      <div class="form-group">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
       </div>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <div class="form-group" style={{marginTop:"20px"}}>
        <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setotp(e.target.value)} required />
        </div>
        <div class="form-group">
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
