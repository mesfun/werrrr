"use client"

import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';




const page = () => {

const { id} = useParams();
const [data, setData] = useState([])
useEffect(()=> {
  axios.get('http://localhost:5000/users/'+ id)
  .then(res => setData(res.data))
  .catch(err => console.log(err))
},[])

function handleSubmit(event) {
  event.preventDefault()
  axios.put('http://localhost:5000/users/'+ id, data)
  .then(res => {
    
    window.location.href = "/"; 
  })
}

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
    <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="name">  id</label>
            <input type="text" disabled name='name' value={data.id} className='form-control'
            
             />
        </div>
        <div>
            <label htmlFor="name"> Name</label>
            <input type="text" name='name' value={data.name} className='form-control'
            onChange={e => setData({...data, name: e.target.value})}
             />
        </div>
        <div>
            <label htmlFor="email"> email</label>
            <input type="email" name='email' value={data.email} className='form-control' 
            onChange={e => setData({...data, email: e.target.value})}
           />
        </div><br></br>
        <button className='btn btn-info'> update </button>
        </form>

    </div>
</div>
  )
}

export default page