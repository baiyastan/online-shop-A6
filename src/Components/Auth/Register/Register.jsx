import React from 'react'
import { Link } from 'react-router-dom'

import cartPhone from "../../../assets/image/cartPhone.png"
import Button from '../../UI/Button/Button'
import "../Auth.css"

function Register() {
  return (
    <div className='register'>
      <img src={cartPhone} alt='cartPhone' />
      <div className='register-content'>
        <div className='register-header'>
          <h4>Create an account</h4>
          <p>Enter your details below</p>
        </div>
        <div className='register-form'>
          <input type='text' placeholder='name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <div className='button-container'>
            <button className='create-accout'>Create Account</button>
            <Button title="Create Account"/>
            <button className='create-accout-google'>
              <img src='' alt='google icon' />
              <p>Sign Up with Google</p>
            </button>
            <div className='login-link'>
              <p>Already have account?</p>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register