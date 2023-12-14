import React from 'react'

const HistorySection = () => {
  return (
    <div className='w-full h-[464px] flex items-center flex-col bg-[#F5F5F5]'> 
    <h1 className='pt-5'>How we started?</h1>
    <div className='bg-white w-[584px] h-[236px] mt-2 rounded-xl border-[#C4C4C4] flex justify-center items-center'>
    <div className='w-[470px] h-[180px] bg-black rounded-[999px]'></div>
    </div>
    <p className='w-[640px] h-[60px] mt-3 text-xs pl-6 leading-5'>For example, the blind march towards beauty products with 'Natural' claims is really concerning. There is a misconception that 100% natural is safe & effective and anything that sounds like a chemical is unsafe. This is completely wrong.</p>
    <p className='w-[629px] text-xl pl-9 mt-7 h-[56px]'>"Everything is a chemical – water is a chemical – therefore, chemical-free products don’t exist."</p>
    </div>
  )
}

export default HistorySection;