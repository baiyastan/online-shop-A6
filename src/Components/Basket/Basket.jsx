import React from 'react'

import q1 from "../../assets/svg/q1.svg"
import q2 from "../../assets/svg/q2.svg"

import "./Basket.css"

function Basket() {
  return (
    <div className='basket container'>
        <div className='basket-top'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img className='cart-image' src='' alt=''/>
                            <span>title</span>
                        </td>
                        <td>650$</td>
                        <td className='box'>
                            <div className='quantity'>
                                <p>01</p>
                                <div className='quantity-count'>
                                    <img src={q1} alt='q1'/>
                                    <img src={q2} alt='q1' />
                                </div>
                            </div>
                        </td>
                        <td>1300$</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='basket-main'></div>
    </div>
  )
}

export default Basket