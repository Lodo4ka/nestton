import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Sniper: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-16 pt-8 pb-20 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1436px] max-md:max-w-full">
        <Header menuItems={[]} />
        <div className="flex gap-5 px-px mt-14 w-full text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl font-semibold leading-7">Sniper</div>
          <div className="flex flex-1 gap-1 self-start text-xs font-medium tracking-wide uppercase">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff681b0ad4f1211275f6d2e17cd4cf0d308fbcecd7a8fc1ce6d2ba25c0bce299?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              className="shrink-0 w-4 aspect-square"
              alt="Icon 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/59d09c4b09619364f4ef2c65bbbc9f91c96caaf7c21d6761791e2514f3a97e52?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              className="shrink-0 w-4 aspect-square"
              alt="Icon 2"
            />
            <div className="my-auto">SNIPER</div>
          </div>
        </div>
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Sniper;
