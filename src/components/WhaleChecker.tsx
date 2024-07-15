import React from 'react';

const WhaleChecker: React.FC = () => {
  return (
    <div className="flex flex-col grow pb-9 mx-auto w-full bg-zinc-900 rounded-[32px] max-md:mt-6">
      <div className="flex gap-3">
        {[7, 57, 57, 57, 57, 57, 29].map((width, index) => (
          <div
            key={index}
            className={`shrink-0 w-${width} rounded-xl bg-neutral-800 h-[34px]`}
          />
        ))}
      </div>
      <div className="flex gap-3 mt-3">
        {[7, 57, 57, 57, 57, 57, 29].map((width, index) => (
          <div
            key={index}
            className={`shrink-0 ${index === 3 ? 'bg-red-500' : 'bg-neutral-800'} rounded-xl h-[57px] w-[${width}px]`}
          />
        ))}
      </div>
      <div className="flex gap-5 justify-between mt-3">
        <div className="flex gap-0 text-2xl font-medium leading-8 text-white">
          <div className="shrink-0 w-7 rounded-xl bg-neutral-800 h-[57px]" />
          <h3 className="flex-auto self-end mt-8">Whale checker</h3>
        </div>
        <div className="flex gap-3">
          {[57, 57, 29].map((width, index) => (
            <div
              key={index}
              className={`shrink-0 rounded-xl bg-neutral-800 h-[57px] w-[${width}px]`}
            />
          ))}
        </div>
      </div>
      <p className="mt-2.5 mr-10 ml-10 text-sm leading-4 text-white max-md:mx-2.5">
        Be the first to know about all whale transactions, receive notifications
        and adjust your investments
      </p>
    </div>
  );
};

export default WhaleChecker;
