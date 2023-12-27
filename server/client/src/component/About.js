import React, { useEffect, useState } from 'react'
import ripukesh from "../image/ripukesh.png"
import { Link, useNavigate } from 'react-router-dom'

function About() {
  const nav = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data)
      if (res.status !== 200) {
        console.log("ERROR")
      }
    } catch (err) {
      console.log('err', err);
      nav('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
  }, [])

  return (
    <>
      <div className='container emp-profile '>
        <form method='GET' style={{ width: "900px", margin: 'auto', marginTop: "3em", padding: "1em", background: "#DFE3E5", boxShadow: "3px 3px #AFC9D6" }}>
          <div className="row" style={{ width: "90%", border: "", margin: "auto", marginTop: "2em" }}>
            <div className="col-md-4" style={{ width: "", border: "", textAlign: "center" }}>
              <div className="profile-image" style={{ border: "" }}>
                <img style={{ width: "85%" }} src={userData.name === "Ripu" ? ripukesh : ripukesh} alt="ripukesh" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className='profile-rating mt-3 mb-5'>RANKINGS : <span>1/10</span></p>
                <ul className='nav nav-tabs' role='tablist' style={{ border: "" }}>
                  <li className='nav-item'><a className='nav-link action' id='home-tab' data-toggle="tab" role='tab' href="#home">About</a></li>
                  <li className='nav-item'><a className='nav-link action' id='profile-tab' data-toggle="tab" role='tab' href="#profile">Timeline</a></li>
                </ul>
              </div>
            </div>
            <div className='col-md-2'>
              <input type="button" className='profile-edit-btn' value="edit profile" />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <div className='profile_work' style={{ paddingLeft: "3.5em", margin: "1em" }}>
                <p> WORK LINK </p>
                <Link to="https://www.youtube.com/channel/UCGJEdXVateEPmCloPdlcEfw" target='_ripukesh' style={{ textDecoration: "none", color: "black" }}>Youtube</Link> <br />
                <Link to="https://www.instagram.com/ripukesh___sharma?igshid=NGVhN2U2NjQ0Yg==" style={{ textDecoration: "none", color: "black" }}>Instagram</Link> <br />
                <Link to="https://www.instagram.com/ripukesh___sharma?igshid=NGVhN2U2NjQ0Yg==" style={{ textDecoration: "none", color: "black" }}>Facebook</Link> <br />
                <Link to="https://github.com/Ripukesh870" style={{ textDecoration: "none", color: "black" }}>WebsiteGitHubMern Dev</Link> <br />
                <Link to="https://github.com/Ripukesh870" style={{ textDecoration: "none", color: "black" }}>Web developer</Link> <br />
                <Link to="https://github.com/Ripukesh870" style={{ textDecoration: "none", color: "black" }}>Figma</Link><br />
                <Link to="https://github.com/Ripukesh870" style={{ textDecoration: "none", color: "black" }}></Link> <br />
              </div>
            </div>
            <div className='col-md-8 pl-5 about info'>
              <div className='tab-content profile-tab' id="myTabContent">
                <div className="tab-pane fade show active" id="home" role='tabpanel' aria-labelledby='' style={{ marginTop: "1em" }}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Phone No </label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <p>{userData.work}</p>
                    </div>
                  </div>

                </div>
                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab' style={{ marginTop: "1em" }}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Experence </label>
                    </div>
                    <div className='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div><div className='row'>
                    <div className='col-md-6'>
                      <label>Hourly Rate</label>
                    </div>
                    <div className='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>total project </label>
                    </div>
                    <div className='col-md-6'>
                      <p>230</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>english Label</label>
                    </div>
                    <div className='col-md-6'>
                      <p>expert</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Avaliablilty</label>
                    </div>
                    <div className='col-md-6'>
                      <p>6 month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About