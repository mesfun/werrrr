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
     axios.get('https://github.com/mesfun/werrrr/blob/main/db.json:5000/users')
      .then(response => {
        setData(response.data)
        setUsers(response.data);
      })
      .finally(() => setLoading(false));
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
