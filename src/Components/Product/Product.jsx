import React from 'react'

import like from "../../assets/svg/wishList.svg"
import view from "../../assets/svg/view.svg"
import Star from '../../assets/svg/star'
import "./Product.css"

function Product({item}) {
  return (
    <div className='product-item'>
        <div className='product-image'>
            <img src={item.image} className='main-image' alt={item.title} />
            <div className='discount'>40%</div>
            <div className='icons'>
                <div className='icon'>
                    <img src={like} alt="like" />
                </div>
                <div className='icon'>
                    <img src={view} alt="view" />
                </div>
            </div>
            <button className='product-btn'>Add to Cart</button>
        </div>
        <div className='product-detail'>
            <p className='product-title'>{item.title}</p>
            <div className='prices'>
                <p className='discount-price'>$123</p>
                <p className='price'>$1000</p>
            </div>
            <div className='stars'>
                {
                    [1,2,3,4,5].map((star, index) => (

                        <Star key={index} fill={star <= 4 ? "#FFAD33": "gray"} />
                    ))
                }
                <p>(88)</p>
            </div>
        </div>
    </div>
  )
}

export default Product