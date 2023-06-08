import React from 'react'
import { useNavigate } from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    const handleButtonsignup = () => {
        navigate("/Signup");
      };
      const handleButtonsignin = () => {
        navigate("/Signin");
      };
  return (
    <nav class="navbar">
    <a class="logo">Logo</a>
    
    <div class="auth-buttons">
      <a class="signup-btn"  onClick={handleButtonsignup}>Sign Up</a>
      <a class="signin-btn"  onClick={handleButtonsignin}>Sign In</a>
    </div>
  </nav>
  
  )
}

export default Nav