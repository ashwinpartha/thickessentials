import React from 'react'

const LeftSection = () => {
  return (
    <div>
        <div className='flex justify-evenly'>
            <div className='flex flex-col justify-between h-[360px] mt-10 '>
            <div className='h-[81px] w-[81px] bg-black'> img1</div>
            <div className='h-[81px] w-[81px] bg-lime-900'>img2</div>
            <div className='h-[81px] w-[81px] bg-emerald-50'>img3</div>
            <div className='h-[81px] w-[81px] bg-pink-700'>img4</div>
            </div>
            <div className='w-[501px] h-[555px] bg-pink-100 rounded-[8px]'>main
            </div>
        </div>
    </div>
  )
}

export default LeftSection