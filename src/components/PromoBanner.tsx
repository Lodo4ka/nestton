import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="flex gap-5 p-5 mt-6 max-w-full text-base font-medium text-red-500 rounded-2xl border border-solid border-rose-500 border-opacity-10 w-[414px]">
      <div className="flex-auto">
        Buy the <span className="font-bold text-red-500">fast</span>{' '}
        transactions feature and get your profits even faster!
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a1ac3a67eade2510db1cffa55faed411b1562ffaf2dd90652d1ca8b7e9070f0?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
    </div>
  );
};

export default PromoBanner;
