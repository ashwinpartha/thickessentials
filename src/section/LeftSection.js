import React from 'react'
import {bg} from '../assets/images'

const LeftSection = () => {
  return (
    <div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-between h-[360px] mt-10 '>
            <div className='h-[81px] w-[81px] bg-black'> 
            <img src={bg}/></div>
            <div className='h-[81px] w-[81px] bg-lime-900'>
            <img src={bg}/>
            </div>
            <div className='h-[81px] w-[81px] bg-emerald-50'>
            <img src={bg}/>
            </div>
            <div className='h-[81px] w-[81px] bg-pink-700'>
            <img src={bg}/>
            </div>
            </div>
            <div className='w-[501px] h-[555px] bg-pink-100 rounded-[8px]'>
              <img src={bg}/>
            </div>
        </div>
    </div>
  )
}

export default LeftSection