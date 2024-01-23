import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

import cartPhone from "../../../assets/image/cartPhone.png"
import Button from '../../UI/Button/Button'
import "../Auth.css"

const API = "https://api.escuelajs.co/api/v1/auth/login"
const API_USER_INFO = "https://api.escuelajs.co/api/v1/auth/profile"

function Login() {
  const [user, setUser] = useState({email:"", password: ""})
  const [info, setInfo] =useState({})

  const handleChange = (event) => {
    console.log(event)
    const {name, value} = event.target;
    setUser({...user, [name]: value})
  }

  const handleLogin = async () => {
    try{
      const data  = await axios.post(API, user)

      console.log(data)
      localStorage.setItem("accessToken", data.data.access_token)

      const userInfo = await axios.get(API_USER_INFO, {
        headers: {
          Authorization: `Bearer ${data.data.access_token}`
        }
      })

      setInfo(userInfo.data)
      console.log(userInfo)

    }catch (error) {
      console.log(error)
    }
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
        <div className='login-buttons'>
          <Button title="Log In" pd={48} onclick={handleLogin}/>
          <Link>Forget Password?</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login