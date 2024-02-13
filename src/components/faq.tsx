import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQ = () => {
  const faqData = [
    {
      question: 'When do i pay?',
      answer: 'this is a test',
    },
    {
      question: 'What is included?',
      answer: 'this is a test',
    },
    // Add more FAQ items as needed
  ];

  const FAQItem = ({ index, question, answer, openIndex, setOpenIndex }:{index:any, question:any, answer:any, openIndex:any, setOpenIndex:any}) => {
    const isOpen = index === openIndex;

    const toggleAccordion = () => {
      setOpenIndex(isOpen ? null : index);
    };

    return (
      <div style={{background: "linear-gradient(326deg, rgba(0,0,94,1) 0%, rgba(0,0,49,1) 49%, rgba(0,0,72,1) 100%)"}} onClick={toggleAccordion} className="faq-item border-[1px] cursor-pointer border-gray-800 text-white p-[30px] rounded-[14px]">
        <div className={`question ${isOpen ? 'open' : ''}`}>
            <div className='flex items-center justify-between'>
            <h1 className='text-[20px] font-[500]'>{question}</h1>
            {isOpen ? <X />:<Plus />}
            </div>
          
        </div>

        {isOpen && <div className="answer mt-[20px] text-[18px] font-[400]">{answer}</div>}

      </div>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
        <h1 className='text-center text-[50px] text-white mb-[50px]'>FAQ</h1>
    <div className="faq-container w-[50%] mx-auto flex flex-col gap-[30px]">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ))}
    </div>
    </div>
  );
};

export default FAQ;
