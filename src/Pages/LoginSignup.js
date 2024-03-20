import React from 'react';
import './CSS/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>Sign Up</h1>
        <div className='login-signup-fields'>
          <input type='text' placeholder='Your username here'></input>
          <input type='email'placeholder='Email address' />
          <input type='password' placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login-signup-login'>Already have an account? <span>Login Here</span></p>
        <div className='login-signup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
