import React, { useState } from 'react';

const FaqQuestions = () => {
  const faqData = [
    { question: 'Can this product works for both men and women?', answer: 'Answer 1' },
     { question: 'Age recommendations for the product usage?', answer: 'Answer 2' },
     { question: 'What are the product specifications?', answer: 'Answer 2' },
    
    // Add more questions and answers as needed
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div >
      {faqData.map((item, index) => (
        <div key={index} >
            <div className='flex justify-between w-[1236px]'>
            <p className="font-[500] text:[333333]">
            
            {item.question}
            </p>
          <button onClick={() => handleToggle(index)} >
            <p className='text-3xl'>+</p>
            </button>
            </div>
          
          {openIndex === index && (
            <div className="answer">
              {item.answer}
            </div>
          )}
          <hr className='my-2 color-[#C4C4C4]'></hr>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestions;
