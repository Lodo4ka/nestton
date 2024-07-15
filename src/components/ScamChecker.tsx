import React from 'react';

const ScamChecker: React.FC = () => {
  return (
    <div className="flex flex-col grow pb-9 w-full bg-zinc-900 rounded-[32px] max-md:mt-6">
      <div className="flex flex-col self-end px-2.5 pb-2.5 max-w-full rounded-full border border-white border-solid w-[114px]">
        <div className="flex flex-col items-start px-3 pb-3 rounded-full border border-white border-solid">
          <div className="flex flex-col items-start px-3 pb-3 rounded-full border border-white border-solid">
            <div className="flex flex-col items-start px-3 pb-3 rounded-full border border-white border-solid">
              <div className="shrink-0 rounded-full border border-white border-solid h-[62px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-7 mt-6 text-white max-md:pl-5">
        <h3 className="text-2xl font-medium leading-8">SCAM checker</h3>
        <p className="mt-4 text-sm leading-4">
          Help the TON community, fill out the form for analyzing suspicious
          projects and presales, and we will issue a verdict
        </p>
      </div>
    </div>
  );
};

export default ScamChecker;
