import React from 'react'
import { Link } from 'react-router-dom'

import "./Account.css"

function Account() {
  return (
    <section className='container'>
      <div className='top-account'>
        <div className='child-1'>
          <Link to="/">Home /</Link>
          <span>My Account</span>
        </div>
        <div className='child-2'>
          <p>Welcome! <span className='child-item'>Aibek</span></p>
        </div>
      </div>
      <div className='main-account'>
        <div className='profile'>
          <div className='profile-item'>
            <h4>Manage My Account</h4>
            <div className='option-account'>
              <p className='option-text'>My Profile</p>
              <p>Address Book</p>
              <p>My Payment Options</p>
            </div>
          </div>

          <div className='profile-item'>
            <h4>My Orders</h4>
            <div className='option-account'>
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
          </div>

          <div className='profile-item'>
            <h4>My WishList</h4>
            <div className='option-account'> </div>
          </div>
        </div>
        <form className='form-inputs'></form>
      </div>
    </section>
  )
}

export default Account