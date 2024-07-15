import React from 'react';
import Header from '../components/Header';
import SwapForm from '../components/SwapForm';
import PriceChart from '../components/PriceChart';
import FastTransactionBanner from '../components/FastTransactionBanner';
import Footer from '../components/Footer';

const DashboardSwap: React.FC = () => {
  const menuItems = ['Home', 'Token', 'Pricing', 'Support'];
  return (
    <div className="flex justify-center items-center px-16 py-10 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1436px] max-md:max-w-full">
        <Header menuItems={menuItems} />
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4a6f77e558e65d0413de9c22ea270fc7c889caecca11cf7c87093392843e12c?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-4 aspect-square"
            />
            <div className="my-auto">SWAP</div>
          </div>
        </div>
        <div className="mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <SwapForm />
            <PriceChart />
          </div>
        </div>
        <FastTransactionBanner />
        <Footer />
      </div>
    </div>
  );
};

export default DashboardSwap;
