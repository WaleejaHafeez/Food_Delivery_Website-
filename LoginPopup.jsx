import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowlogin}) => {
    const[currentstate,setCurrentstate]=useState("Login")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentstate}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />

            </div>
            <div className="login-popup-inputs">
                {currentstate === "Login" ? (
            <>
              <input type="email" placeholder="Your Email" required />
              <input type="password" placeholder="Your Password" required />
            </>
          ) : (
            <>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="password" placeholder="Your Password" required />
            </>
          )}
               
            </div>
          <button>
  {currentstate === "Signup" ? "Create Account" : "Login"}
</button>
<div className="login-popup-condition">
    <input type="checkbox"  required/>
    <p>Accept our Term & Conditions</p>
</div>
{currentstate === "Login" ? (
  <p>
    Create a New Account? 
    <span onClick={() => setCurrentstate("Signup")}> Click Here</span>
  </p>
) : (
  <p>
    Already Have an account? 
    <span onClick={() => setCurrentstate("Login")}> Login Here</span>
  </p>
)}


        </form>
      
    </div>
  )
}

export default LoginPopup
