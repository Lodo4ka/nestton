import React from 'react';

const SwapHeader: React.FC = () => {
  return (
    <div className="flex gap-5 justify-between px-px w-full">
      <div className="flex gap-5 my-auto text-base font-medium text-center text-white whitespace-nowrap">
        <div className="text-indigo-400">Swap</div>
        <div className="my-auto">Limit</div>
        <div className="flex gap-1.5">
          <div className="grow">Sniper</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf9766d3e118f6ceb8d47be521ee28622f46e7c3b187dc4261b8742116967eee?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt=""
            className="shrink-0 w-4 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-3.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52295b4e1cc2ca706c09920b4b09b2b6537dd10662126b6642bd36f9d1690a24?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          alt="Setting icon"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f6864720de417a22434f781eeb71dc846963d4d866b702e0913df9b60bfffe?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          alt="Refresh icon"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f479a0d1df68816e8d9ac1a0b0dd56c18fa18f3230482f42db06e4593660af8?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          alt="More options icon"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
    </div>
  );
};

export default SwapHeader;
