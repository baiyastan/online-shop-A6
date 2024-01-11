import React from 'react'
import { Link } from 'react-router-dom'

import cart from "../../assets/svg/cart.svg"
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishList.svg"
import "./Header.css"

function Header() {
  return (
    <header className='header'>
      <nav className='nav container'>
        <div className='nav-bar'>
          <div className='logo'>
              <Link to="/">Exclusive</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">Abount</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className='nav-bar-cart'>
          <div className='search'>
            <input type='text' placeholder='What are you looking for?' />
            <img src={search} alt='search' />
          </div>
          <div className='nav-bar-icon'>
            <Link to="/wishlist">
              <img src={wishlist} alt='wishlist' />
            </Link>
            <Link to="/cart">
              <img src={cart} alt='cart' />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header