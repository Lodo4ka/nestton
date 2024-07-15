import React, { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What is DEX?',
    answer:
      'A DEX, or Decentralized Exchange, is a type of cryptocurrency exchange that operates without a central authority. It allows direct peer-to-peer cryptocurrency transactions to take place online securely and without the need for an intermediary.',
  },
  {
    question: 'What is a sniper bot?',
    answer:
      "A sniper bot is an automated trading program designed to execute trades at high speed when certain market conditions are met. In the context of cryptocurrency trading, it's often used to buy tokens immediately after they're listed on an exchange.",
  },
  {
    question: 'Why do I need to create a new wallet?',
    answer:
      'Creating a new wallet ensures better security for your assets. It allows you to separate your trading funds from your long-term holdings, and can help protect your identity and main assets in case of a security breach on the trading platform.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-16 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-10 text-white">Answers</h2>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-5 px-7 py-6 mt-5 text-lg font-semibold leading-5 text-white rounded-2xl bg-zinc-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full"
        >
          <div className="flex-auto my-auto">{item.question}</div>
          <button
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/829e1bc7cfcb1ce98b83529b9dfdcd12491b6dd1d2b49e6fee71455e102466d7?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt={openIndex === index ? 'Collapse' : 'Expand'}
              width={24}
              height={24}
              className="shrink-0 w-6 aspect-square"
            />
          </button>
          {openIndex === index && (
            <div
              id={`faq-answer-${index}`}
              className="w-full mt-4 text-base font-normal"
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQSection;
