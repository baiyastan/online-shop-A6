import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import AccounLogo from "../../assets/svg/accountLogo.svg"
import AccountImg from "../../assets/svg/accountSvg.svg"
import cart from "../../assets/svg/cart.svg"
import search from "../../assets/svg/search.svg"
import wishlist from "../../assets/svg/wishList.svg"
import "./Header.css"

function Header() {
  const {t, i18n} = useTranslation()
  const [openPopup, setOpenPopup] = useState(false)

  let token = localStorage.getItem("accessToken")

  console.log(token)

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
            <div className='account'>
              <img onClick={() => setOpenPopup(!openPopup)} className='account-avatar' src={AccountImg} alt=''/>

              {
                openPopup && <div className='account-menu'>
                <div className='drop-menu'>
                  <div className='drop-item'>
                    <img src={AccounLogo} alt='account logo' />
                    <Link onClick={() => setOpenPopup(!openPopup)} to="/account">Manage My Account</Link>
                  </div>
                  <div className='drop-item'>
                    <img src={AccounLogo} alt='account logo' />
                    <Link>My Order</Link>
                  </div>
                  <div className='drop-item'>
                    <img src={AccounLogo} alt='account logo' />
                    <Link>My Cancellations</Link>
                  </div>
                  <div className='drop-item'>
                    <img src={AccounLogo} alt='account logo' />
                    <Link>My Reviews</Link>
                  </div>
                  <div className='drop-item'>
                    <img src={AccounLogo} alt='account logo' />
                    <Link>Logout</Link>
                  </div>
                </div>
              </div>
              }

              
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header