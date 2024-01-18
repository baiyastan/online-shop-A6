import axios from "axios"
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import cartPhone from "../../../assets/image/cartPhone.png"
import googleIcon from "../../../assets/svg/google.svg"
import Button from '../../UI/Button/Button'
import "../Auth.css"

function Register() {
  const [user, setUser] = useState({
    email: "", 
    name: "", 
    password: "", 
    avatar: "https://i.imgur.com/5mPmJYO.jpeg",
  })

  const handleChange = (event) => {
    console.log(event)
    const {name, value} = event.target;
    setUser({...user, [name]: value})
  }

  return (
    <div className='register'>
      <img src={cartPhone} alt='cartPhone' />
      <div className='register-content'>
        <div className='register-header'>
          <h4>Create an account</h4>
          <p>Enter your details below</p>
        </div>
        <div className='register-form'>
          <div className='inputs'>
            <input 
              onChange={handleChange} 
              value={user.name} 
              type='text' 
              placeholder='name' 
              name="name"
              />
            <input 
              onChange={handleChange} 
              type='email' 
              placeholder='Email' 
              value={user.email}
              name="email"
              />
            <input  
              onChange={handleChange} 
              type='password' 
              placeholder='Password'
              value={user.password}
              name="password"
               />
          </div>
          <div className='button-container'>
            <Button title="Create Account" pd={122}/>
            <button className='create-accout-google'>
              <img src={googleIcon} alt='google icon' />
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