import React, { useState } from 'react'
import Signpic from '../image/Signpic.svg';
import "../css/signup.css";
import { NavLink, useNavigate } from 'react-router-dom'
function Signup() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });
  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;


    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    })

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("invalid Registration");
    } else {
      window.alert("successfull Registration");
      history("/login");
    }
  }

  return (
    <>
      <div className='S_Top_Container'>
        <div className='container mt-5'>
          <div className="signup-form">
            <h2 className='form-title'>Sign up</h2>
            <form method='POST' className='register-form' id='register-form'>
              <div className="form-group">
                <label htmlFor="name">name<span>*</span> : </label>
                <input className='input' type="text" name='name' autoComplete='off'
                  value={user.name}
                  onChange={handleInput}
                  placeholder='Enter your name'
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email id<span>*</span> : </label>
                <input className='input' type="text" name='email' autoComplete='off'
                  value={user.email}
                  onChange={handleInput}
                  placeholder='Enter Your Email id'
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone no : <span>*</span> : </label>
                <input className='input' type="number" name='phone' autoComplete='off'
                  value={user.phone}
                  onChange={handleInput}
                  placeholder='enter phone no'
                />
              </div>

              <div className="form-group">
                <label htmlFor="work">Work : <span>*</span> : </label>
                <input className='input' type="text" name='work' autoComplete='off'
                  value={user.work}
                  onChange={handleInput}
                  placeholder='enter your work'
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Password<span>*</span> : </label>
                <input className='input' type="password" name='password' autoComplete='off'
                  value={user.password}
                  onChange={handleInput}
                  placeholder='Enter new password'
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpassword">C-Password<span>*</span> : </label>
                <input className='input' type="password" name='cpassword' autoComplete='off'
                  value={user.cpassword}
                  onChange={handleInput}
                  placeholder='Enter conform password'
                />
              </div>

              <div className=''>
                <span className='s'>Already a member?</span> <NavLink to='/login' className='button'>Log in</NavLink>
              </div>
              <input className='submit' type="submit" value="Register" onClick={postData} />
            </form>
          </div>
        </div>
        <div className='S_Image'>
          <img src={Signpic} alt="signup" />
        </div>
      </div>
    </>
  )
}

export default Signup