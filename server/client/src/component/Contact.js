import React, { useState, useEffect } from 'react'
import contactImg from '../image/contactus.webp'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom'
import "../css/contact.css";


function Contact() {
  const nav = useNavigate();
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });

  const userContact = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone })

      if (res.status !== 200) {
        console.log("ERROR")
      }
    } catch (err) {
      console.log('err', err);
    }
  }

  useEffect(() => {
    userContact();
  }, [])

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value })
  }


  // send the data to backend 
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });
    const data = await res.json();
    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }

  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className='c_container1 mt-5' style={{ width: "49%" }}>
          <img src={contactImg} alt="" />
        </div>
        <div className='c_container2 mt-5'>
          <div className='c_i_container'>
            <h3>Contact Us</h3>
            <form method="POST">
              <div style={{ display: 'flex' }}>
                <div className='C_input'>
                  <div>
                    <input
                      className='C_standard-basic'
                      name='name'
                      type='text'
                      placeholder="Name"
                      value={userData.name}
                      onChange={handleInput}
                      autoComplete='username'  // Use 'username' for email or 'off' if not applicable
                    />
                  </div>
                  <div>
                    <input
                      className='C_standard-basic'
                      name='email'
                      type='email'
                      placeholder='Email'
                      value={userData.email}
                      onChange={handleInput}
                      autoComplete='username'
                    />
                  </div>
                  <div>
                    <input
                      className='C_standard-basic'
                      name='phone'
                      type='number'
                      placeholder='Phone No :'
                      value={userData.phone}
                      onChange={handleInput}
                      autoComplete='username'
                    />
                  </div>
                  <div>
                    <textarea className='C_standard-basic' id="message" name="message" rows="4" value={userData.message} onChange={handleInput} placeholder="Type your message here..." required></textarea>
                  </div>
                  <br /><br />
                </div>
                <div className='c_contact'>
                  <div>
                    <h4>Contact</h4>
                    <p>ripukesh1000@gmail.com</p>
                  </div>
                  <div>
                    <h4>Adress</h4>
                    <p>vill :- jehanabad, bihar</p>
                  </div>
                </div>
              </div>
              <div className='c_buttonBox' style={{ display: "flex", justifyContent: "space-around" }}>
                <dir className='c_btn'><button onClick={contactForm}>Contact Us</button></dir>
                <div className='c_logo'>
                  <FacebookIcon className='c_i_logo' /><InstagramIcon className='c_i_logo' /><TwitterIcon className='c_i_logo' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
