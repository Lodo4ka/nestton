import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex gap-5 px-7 py-6 mt-5 text-lg font-semibold leading-5 text-white rounded-2xl bg-zinc-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex-auto my-auto">{question}</div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/829e1bc7cfcb1ce98b83529b9dfdcd12491b6dd1d2b49e6fee71455e102466d7?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
        alt="Toggle FAQ"
        width={24}
        height={24}
        className={`shrink-0 w-6 aspect-square transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    'What is DEX?',
    'What is a sniper bot?',
    'Why do I need to create a new wallet?',
  ];

  return (
    <section className="mt-16 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-10 text-white">Answers</h2>
      {faqItems.map((question, index) => (
        <FAQItem key={index} question={question} />
      ))}
    </section>
  );
};

export default FAQ;
