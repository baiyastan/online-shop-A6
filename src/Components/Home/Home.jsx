import React from 'react'

import "./Home.css"

function Home() {
  return (
    <div>
        <section className='home container'>
            <div className='home-sidebar'>
                <ul>
                    <li>Woman’s Fashion</li>
                    <li>Men’s Fashion</li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby’s & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </div>
            <div className='home-carousel'></div>
        </section>
    </div>
  )
}

export default Home