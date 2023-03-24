import React, {useState} from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import Success from './Success';
import './global.css'



const Login = () => {
    let navigate=useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");            
   
    let handleSignIn=(e)=>{
e.preventDefault()
let userL=username
console.log(userL);
let passL=password 
console.log(passL);
let userS=localStorage.getItem("usern")
console.log(userS);
let passS=localStorage.getItem("passw")
if(userL===userS&&passL===passS){
return(
 
    navigate("/Success")
)
}
else{
    return(
        <>
         <h1>WRONG!!</h1>
        <Navigate replace to="/login" />
       
        </>)
}

    }

    return (
    <div>
        <h1>Login Page</h1>
    <form onSubmit={handleSignIn}>
    <label htmlFor="username" rules={[{
          required: true,
          message: 'Please input your username!',
        }]}>Username</label>
        <br />
     <input type="text" id="username"  placeholder='enter username' onChange={(e) => setUsername(e.target.value)}/>
     <br />
     <label htmlFor="password" rules={[{
          required: true,
          message: 'Please input your password!',
        }]}>Password</label>
        <br />
     <input type="password" id="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)}/>
     <br />
      <button>Login</button>
     </form>
        </div>
      );
    };
    export default Login