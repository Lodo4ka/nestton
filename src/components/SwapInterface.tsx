import React from 'react';
import SwapHeader from './SwapHeader';
import SwapForm from './SwapForm';
import SwapResult from './SwapResult';

const SwapInterface: React.FC = () => {
  return (
    <section className="flex flex-col self-center px-6 py-5 mt-11 max-w-full rounded-3xl border border-solid bg-zinc-800 bg-opacity-50 border-zinc-700 border-opacity-60 w-[414px] max-md:px-5 max-md:mt-10">
      <SwapHeader />
      <hr className="shrink-0 mt-4 h-px bg-white border border-white border-solid" />
      <SwapForm />
      <hr className="shrink-0 mt-6 h-px bg-white border border-white border-solid" />
      <SwapResult />
      <hr className="shrink-0 mt-3 h-px bg-white border border-white border-solid" />
      <button className="flex gap-1.5 justify-between px-4 py-2.5 mt-6 font-medium text-center text-white whitespace-nowrap bg-indigo-400 border border-solid border-indigo-400 border-opacity-20 rounded-[55px]">
        <span className="text-base">Swap</span>
        <span className="flex flex-col flex-wrap gap-y-2.5 justify-center content-start text-sm">
          <span className="justify-center px-1.5 py-0.5 rounded-md border-b border-solid bg-white bg-opacity-10 border-black border-opacity-20">
            alt+f
          </span>
        </span>
      </button>
    </section>
  );
};

export default SwapInterface;
