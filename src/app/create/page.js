'use client'
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

  
const page = () => {
    const [inputData, setInputData ] = useState({name:'' ,email:''});
 
    function handleSubmit(event) {

     
    event.preventDefault() 
    
    axios.post('https://werrrr.onrender.com/users/', inputData)
    .then (res => {
       
        window.location.href = "/"; 
        
    }).catch(err => console.log(err));
  }

  return (





    
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='w-50 border bg-light p-5'>
            <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name"> Name</label>
                <input type="text" name='name' className='form-control'
                onChange={e=> setInputData({...inputData,name:e.target.value})} />
            </div>
            <div className='mb-3'>
                <label htmlFor="email"> email</label>
                <input type="email" name='email' className='form-control' 
                onChange={e=> setInputData({...inputData,email:e.target.value})} />
            </div><br></br>
            <button className='btn btn-danger'> Submit </button>
            </form>

        </div>
    </div>
  )
}

export default page
