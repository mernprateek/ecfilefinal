import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Signin from './Signin';
import Dashboard from './Dashboard';
import Home from './Home';
import "./App.css";
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" >
      <Route path="/" element={<Signup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
    
      </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App