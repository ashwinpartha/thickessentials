import React from 'react'
import RightSection from './RightSection';
import LeftSection from './LeftSection';
const MainSection = () => {
  return (
    
    <div className="flex w-full h-3/4 max-h-3/4 mt-10 p-2 ">
      <div className="flex-1 min-h-full max-w-1/2   p-2">
        <LeftSection/>
      </div>
      <div className="flex-1  min-h-full max-w-1/2 flex-wrap  items-start">
        <RightSection/>
      </div>
      <div className=''>

      </div>
    </div>
 
  )
}

export default MainSection