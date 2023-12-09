import React from 'react'
import { cart } from '../assets/images'
import { logo } from '../assets/images'
const Header = () => {
  return (
    <div className='flex justify-between sticky'>
        <img className='h-12 w-24'  src={logo} alt='img'></img>
        <img className='h-6 w-6' src={cart} alt='cart' onClick={()=>{console.log("cart pressed");}}></img>
    </div>
  )
}

export default Header