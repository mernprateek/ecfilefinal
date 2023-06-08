import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

const API_BASE_URL = 'http://localhost:5000';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users', err);
    }
  };

  const handleImageDownload = (imagePath) => {
    const link = document.createElement('a');
    link.href = `${API_BASE_URL}/${imagePath}`;
    link.download = 'image.jpg';
    link.click();
  };

  return (
    <div>
      <Nav/>
      <h1 style={{display:"flex",justifyContent:"center"}}>Admin panel </h1>
      <div class="admin-panel">
  <table class="user-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Profile Picture</th>

      </tr>
    </thead>
    <tbody>
    {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobileNumber}</td>
              <td style={{display:"block",justifyContent:"center"}}>
                <img src={`${API_BASE_URL}/${user.image}`} style={{height:"100px",width:"100px"}}/>
                <button onClick={() => handleImageDownload(user.image)} style={{display:"flex",justifyContent:"center"}}>Download Image</button>
              </td>
            </tr>
          ))}
      
      
     
    </tbody>
  </table>
</div>

          
    
    </div>
  );
};

export default Dashboard;
