import React, { useState } from 'react';

const IncrementButton = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    if (counter !== 1) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <div className='flex bg-[#EBEBEB] border-[#C4C4C4] w-36 rounded-full h-14 items-center'>
      <div className='flex pl-0.5'>
        <button className='pl-6 pr-3 text-2xl' onClick={increment}>
          +
        </button>
        <div className='flex items-center justify-center w-10'>
          <p className='text-xl'>{counter}</p>
        </div>
        <button className='px-3 text-2xl' onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default IncrementButton;
