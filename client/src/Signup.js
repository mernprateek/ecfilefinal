import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const API_BASE_URL = 'http://localhost:5000';

const Signup= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobileNumber', mobileNumber);
    formData.append('image', image);

    try {
      const response = await axios.post(`${API_BASE_URL}/signup`, formData, {
        
      });

      if (response.status === 201) {
        alert('Signup successful. Please check your email for verification.');
        navigate("/signin");
      } else {
        alert('Signup failed');
      }
    } catch (err) {
      console.error('Error signing up', err);
      alert('Signup failed');
    }
  };

  return (
    <div>
      <Nav/>
      <h2 style={{display:"flex",justifyContent:"center"}}>Signup</h2>
      <form onSubmit={handleSignup} class="signup-form">
      <div class="form-group">


        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div class="form-group">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div class="form-group">
        <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
        </div>
        <div class="form-group">
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        </div>
        <div class="form-group">
        <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
