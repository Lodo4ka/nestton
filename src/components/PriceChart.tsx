import React from 'react';

const PriceChart: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden relative flex-col px-7 pt-7 pb-16 min-h-[605px] max-md:px-5 max-md:mt-6 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4bcd631fdc0ee1ef4fae57a5d3d3b01e758f9f5015f143ef53c32e8430fe63d?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          alt="Price chart background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col">
            <div className="flex gap-4 text-white whitespace-nowrap">
              <div className="grow my-auto text-3xl">$1.01</div>
              <div className="flex gap-1.5 p-1.5 text-sm font-medium border border-solid bg-emerald-400 bg-opacity-20 border-emerald-400 border-opacity-20 rounded-[42px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6825ab8b5589e94a3f01f24570e06dc784d2f7c069c5b03e6b40da60fe7fc38a?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt="USDT icon"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="my-auto">USDT</div>
              </div>
            </div>
            <div className="flex gap-2 mt-3 text-base">
              <div className="grow text-green-400">+0.01%</div>
              <div className="flex-auto text-white">Last hour</div>
            </div>
          </div>
          <div className="flex gap-3.5 justify-between self-start text-sm text-white whitespace-nowrap">
            <button className="flex gap-1.5 py-2.5 pr-2.5 pl-3 font-medium border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]">
              <div>TON/USDT</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8ef3cf8859f2dc953baab4654f7795cfdc99f7e5c5c6f57413df2d13b10111?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
            </button>
            <button className="justify-center p-2.5 text-center border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]">
              1H
            </button>
            <button className="justify-center p-2.5 text-center border border-solid bg-zinc-700 bg-opacity-0 border-zinc-700 border-opacity-0 rounded-[42px]">
              1D
            </button>
            <button className="justify-center px-2 py-2.5 text-center border border-solid bg-zinc-700 bg-opacity-0 border-zinc-700 border-opacity-0 rounded-[42px]">
              1W
            </button>
            <button className="justify-center px-2 py-2.5 text-center border border-solid bg-zinc-700 bg-opacity-0 border-zinc-700 border-opacity-0 rounded-[42px]">
              1M
            </button>
            <button className="justify-center p-2.5 text-center border border-solid bg-zinc-700 bg-opacity-0 border-zinc-700 border-opacity-0 rounded-[42px]">
              1Y
            </button>
          </div>
        </div>
        <div className="flex relative flex-col items-start px-3 py-4 mt-24 ml-52 max-w-full text-white rounded-2xl bg-zinc-700 w-[119px] max-md:pr-5 max-md:mt-10 max-md:ml-2.5">
          <div className="text-base">$1.01</div>
          <div className="mt-2 text-sm">Jun 1, 3:12AM</div>
        </div>
        <div className="relative shrink-0 mt-2 ml-64 bg-green-400 rounded-full border-solid border-[7px] border-green-400 border-opacity-20 h-[21px] stroke-[7px] w-[21px] max-md:ml-2.5" />
        <div className="flex relative gap-5 self-center mt-64 text-sm text-center text-white max-md:flex-wrap max-md:mt-10">
          {[
            '1:00 AM',
            '2:00 AM',
            '3:00 AM',
            '4:00 AM',
            '5:00 AM',
            '6:00 AM',
            '7:00 AM',
            '8:00 AM',
            '9:00 AM',
          ].map((time, index) => (
            <div key={index}>{time}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceChart;
