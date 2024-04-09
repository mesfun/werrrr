"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
  
export default function Home() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  const url = 'https://api.jsonsilo.com/public/d1166487-7a88-4c53-9be7-94d20dbd04d4';
    const headers = {
        'Content-Type': 'application/json'
    };

    axios.get(url, { headers: headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('There was an error with the request:', error);
    });
  }, []);


const Filter = (event) => {
  setUsers(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
}


  const deleteUser = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h1>User Management</h1>
      <input type="text" className="form-control" onChange={Filter} placeholder="Search"/>
      <div className='text-end'><Link href = "/create" className = "btn btn-primary">Create </Link></div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <Link href = {`/Delete/${user.id}`} className = "btn btn-sm btn-primary"> Update </Link>
                  <button className="btn btn-sm ms-2 btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
