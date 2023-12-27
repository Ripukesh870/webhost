import React, { useState, useEffect } from 'react'

function Home() {
  const [userName, setUserName] = useState('')
  const [show,setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log('err', err);
    }
  }
  useEffect(() => {
    userHomePage();
  }, [])

  return (
    <>
      <div className="home_page text-align-item-center" style={{display:"flex"}}>
        <div style={{background:"#C2E3F2",width:"50vw",height:"92.7vh",textOverflow:""}}>
          <div className='home_div container' style={{textAlign:"center",margin:"35vh 0px 0px 49vh ",overflow:"visible"}}>
              <p style={{fontSize:"30px",color:"blue",fontWeight:"bold"}} >Welcome</p>
              <h1>{userName}</h1>
              <h2>{ show ?"happy, to see u back":"We Are The MERN Developer"}</h2>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
