import React, { useContext, useState } from 'react';
import Loginpic from '../image/login.svg';
import '../css/login.css';
import DraftsIcon from '@mui/icons-material/Drafts';
import LockIcon from '@mui/icons-material/Lock';
import {NavLink, useNavigate} from "react-router-dom"
import { UserContext } from '../App';
function Login() {

const {state,dispatch} = useContext(UserContext);

  const nav=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/signin',{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const data = res.json();
    if(res.status === 400 || !data){
      window.alert("invalid credential");
    } else {
      dispatch({type:"USER",payload:true});
      window.alert("login successfull")
      nav("/");
    }
  }

  return (
    <>
      <div className='L_Top_Container'>
        <div className="container L_con">
          <img src={Loginpic} alt="login" />
        </div>
        <div className="container l-container mt-3">
          <div className='l_inner_container' >
            <h3>Log in</h3>
            <form method="POST">
              <div className='l_div l_name' style={{border:"2px solid blue"}}>
              <span><DraftsIcon className='l_icon'/></span>
                {/* <input className='l_input' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail'/> */}
                <input
                  className='l_input'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='enter your E-mail'
                  autoComplete='username' 
                />
              </div>
              <div className='l_div l_email' style={{border:"2px solid blue"}}>
              <span className='l_span'><LockIcon className='l_icon'/></span>
                {/* <input className='l_input' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' /> */}
                <input
                  className='l_input'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  autoComplete='current-password'
                />
              </div>
              <div>
                <div className='l_checkbox'>
                <div>
                <input type="checkbox" />
                  <label htmlFor="">Remember me</label>
                </div>
                  <button style={{border:"none"}}>Forget password</button>
                </div>
              </div>
              <div>
                <button className='l_btn' onClick={loginUser}>Log In</button> <br />
                <span className='l_span'>don't have an accout? </span> <NavLink to='/signup' className='l_register' style={{border:"none"}}>Register</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login





