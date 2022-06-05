import React, { useState } from 'react' 
import Login from '../login/Login'
import {Routes,Route } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
const SignUp=()=> {

  const[username,SetUsername]=useState("");
  const[password,SetPassword]=useState("");
  const[email,SetEmail]=useState("")

  const  register  = async ()=>{
    if(username.length > 0 && password.length>0 && email.length>0){
    await axios.post("http://localhost:5000/register",{username:username,password:password,email:email})
    .then(res=>{
      console.log(res);  
    })
  }
  }

    return (
      <div className='allkeeper'>
      <form  className='boxkeep'>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            onChange={(e)=>{
              SetUsername(e.target.value)
              // console.log(e.target.value);
            }}
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label>E-mail address</label>
          <input
            type="email"
            onChange={(e)=>{
              SetEmail(e.target.value)
              // console.log(e.target.value);
            }}
            className="form-control"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            onChange={(e)=>{
              SetPassword(e.target.value)
              // console.log(e.target.value);
            }}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button onClick={register} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to='/login'> sign in? </Link>
  
            <Routes>  
              <Route path='/login' element={<Login/>}> sign in? </Route>
            </Routes>
  
        </p>
      </form>
      </div>
    )
  
}

export default SignUp