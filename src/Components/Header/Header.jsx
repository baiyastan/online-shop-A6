import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import cart from "../../assets/svg/cart.svg"
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishList.svg"
import "./Header.css"

function Header() {
  const {t, i18n} = useTranslation()

  const handleChangeLanguage = (event) =>{
    const selectLng = event.target.value;
    i18n.changeLanguage(selectLng)
  }

  return (
    <>
    <div className='top-header'>
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <select onChange={handleChangeLanguage} defaultValue={i18n.language}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
        <option value="ky">Kgz</option>
      </select>
    </div>
    <header className='header'>
      <nav className='navs container'>
        <div className='navs-bar'>
          <div className='logo'>
              <Link to="/">{t('exclusive')}</Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className='navs-bar-cart'>
          <div className='search'>
            <input type='text' placeholder='What are you looking for?' />
            <img src={search} alt='search' />
          </div>
          <div className='navs-bar-icon'>
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
    </>
  )
}

export default Header