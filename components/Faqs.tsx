"use client"

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  { question: "How does gTahidi AI ensure the accuracy of lesson plans and content?", answer: "..." },
  { question: "How does gTahidi AI differ from ChatGPT?", answer: "..." },
  // ... add other FAQs here
];

const AccordionItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2">
      <button
        className="flex justify-between items-center w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{faq.question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="p-4">{faq.answer}</div>}
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FAQSection;
