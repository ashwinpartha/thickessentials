import React from 'react'
import RightSection from './RightSection'
const MainSection = () => {
  return (
    
    <div className="flex w-full h-3/4 max-h-3/4 border border-blue-500 mt-10">
      <div className="flex-1 min-h-full max-w-1/2 border border-red-500  p-2">
        <h1>images</h1>
      </div>
      <div className="flex-1  min-h-full max-w-1/2 flex-wrap border border-green-500 items-start">
        <RightSection/>
      </div>
    </div>
 
  )
}

export default MainSection