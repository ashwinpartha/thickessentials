import React from 'react'
import FaqQuestions from '../components/FaqQuestions'
const FaqSection = () => {
  return (
    <div className='mt-6 bg-white pt-7 pb-40 mx-20'>
    <p className='text-xl font-[700]'>We are here to clarify your doubts!</p>
    <p className='text-sm pt-3 font-[400]'>Most Frequently Asked Questions</p>
    <div className='mt-5'>
    <FaqQuestions/>
    </div>
    

    </div>
  )
}

export default FaqSection