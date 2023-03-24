import React,{useState} from 'react'
import Login from './Login'
import {Navigate, useNavigate } from 'react-router-dom';
import './global.css'



const App = () => {
    let [user, setUser]=useState("")
    let [password, setPass]=useState("")
    let navigate=useNavigate()

    let handleSignUp=(e)=>{
    e.preventDefault()
    localStorage.setItem("usern", user)
    localStorage.setItem("passw", password)
    console.log({user,password})
    navigate("/Login")
    }
  return (
    <div>
    <h1>Sign-Up to become Awesome!!!!!</h1>
    <form action="" onSubmit={handleSignUp}>
        <label htmlFor="username" className='signUpLabels' rules={[{
          required: true,
          message: 'Please input your username!',
        }]}>Username</label>
        <br />
        <div className='inputBox'>
        <input type="text" id='username' placeholder='enter username' onChange={(e)=>{setUser(e.target.value)}} /></div>
        <br />
        
        <label htmlFor="password" className='signUpLabels' rules={[{
          required: true,
          message: 'Please input your password!',
        }]}>Password</label>
        
        <br />
        <div className='inputBox'>
        <input type="password" id='password' placeholder='enter password' onChange={(e)=>{setPass(e.target.value)}}/></div>
        <br />
        <button>Sign-Up</button>
    </form>
    </div>
  )
}

export default App