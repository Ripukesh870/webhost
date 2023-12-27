import React from 'react'
import {NavLink} from 'react-router-dom'
import "../css/Error.css"
function ErrorPage() {
  return (
    <>
        <div className='container' id='notfound'>
           <div className='notfound'>
                <div className='notfound-404'>
                    <h1>404</h1>
                </div>
                <h2>We are sorry, page not found!</h2>
                <p>The page you are looking for might have been removed had its name changed or is <br /> temporarily unavailable.</p> <br />
                <NavLink to="/" className="Ebutton">Back to Homepage</NavLink>
           </div>
        </div>
    </>
  )
}

export default ErrorPage
