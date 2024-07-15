import React from 'react';
import SwapInterface from './SwapInterface';
import FastTransactionBanner from './FastTransactionBanner';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col items-center px-16 pt-8 pb-20 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1436px] max-md:max-w-full">
        <div className="flex gap-5 px-px mt-14 w-full text-white whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <h1 className="text-2xl font-semibold leading-7">Swap</h1>
          <div className="flex flex-1 gap-1 self-start text-xs font-medium tracking-wide uppercase">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff681b0ad4f1211275f6d2e17cd4cf0d308fbcecd7a8fc1ce6d2ba25c0bce299?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c90f04ac85a40db0e2c77952db2e1c0309cc976c09a88a56b4713838277beb7?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto">SWAP</div>
          </div>
        </div>
        <SwapInterface />
        <FastTransactionBanner />
      </div>
    </main>
  );
};

export default MainContent;
