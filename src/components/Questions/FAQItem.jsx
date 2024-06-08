import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>

    <style>
{`
.faq-item {
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f9f9f9; /* Fondo gris muy claro */
}

.faq-question {
  cursor: pointer;
  font-weight: bold;
}

.faq-answer {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #ddd;
}
`}
    </style>

    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>

    </>
  );
};

export default FAQItem;
