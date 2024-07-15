import React from 'react';

const SwapForm: React.FC = () => {
  return (
    <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow px-6 py-5 mx-auto w-full rounded-3xl border border-solid bg-zinc-800 bg-opacity-50 border-zinc-700 border-opacity-60 max-md:px-5 max-md:mt-6">
        <div className="flex gap-5 justify-between px-px w-full">
          <div className="flex gap-5 my-auto text-base font-medium text-center text-white whitespace-nowrap">
            <div className="text-indigo-400">Swap</div>
            <div className="my-auto">Limit</div>
            <div className="flex gap-1.5">
              <div className="grow">Sniper</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d70eb04be2011a23735edae820729574fb1580412da43b15d1acc0743848615?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt=""
                className="shrink-0 w-4 aspect-square"
              />
            </div>
          </div>
          <div className="flex gap-3.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/52295b4e1cc2ca706c09920b4b09b2b6537dd10662126b6642bd36f9d1690a24?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8f6864720de417a22434f781eeb71dc846963d4d866b702e0913df9b60bfffe?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f479a0d1df68816e8d9ac1a0b0dd56c18fa18f3230482f42db06e4593660af8?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
        <hr className="shrink-0 mt-4 h-px bg-white border border-white border-solid" />
        <div className="flex gap-5 mt-7 text-sm">
          <label htmlFor="sellAmount" className="text-white">
            Sell
          </label>
          <div className="flex-auto text-white text-opacity-50">
            Balance: 1754.02355
          </div>
        </div>
        <div className="flex gap-2 mt-4 whitespace-nowrap">
          <div className="flex flex-col grow shrink-0 text-white basis-0 w-fit">
            <div className="flex gap-5 w-full text-sm">
              <div className="flex flex-1 gap-1.5 items-center py-1.5 pr-2 pl-1.5 font-medium border border-solid bg-sky-500 bg-opacity-20 border-sky-500 border-opacity-20 rounded-[42px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b1c287783f4aade9a62967c0faad380f91e4cf83abbe8b0d89cc388e7894dec?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt="TON"
                  className="shrink-0 self-stretch w-6 aspect-square"
                />
                <div className="self-stretch my-auto">TON</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8ef3cf8859f2dc953baab4654f7795cfdc99f7e5c5c6f57413df2d13b10111?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt=""
                  className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
                />
              </div>
              <div className="flex flex-1 gap-2">
                <button
                  type="button"
                  className="justify-center px-2 py-2.5 border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]"
                >
                  MAX
                </button>
                <button
                  type="button"
                  className="justify-center px-2 py-2.5 border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]"
                >
                  75%
                </button>
              </div>
            </div>
            <input
              type="text"
              id="sellAmount"
              value="100.2525112"
              className="mt-6 text-3xl bg-transparent border-none"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86ac4ffc4775de0b9274e59941926d4b196db842c42d03ed987f171bfe71e77?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="self-end mt-4 mr-14 aspect-square w-[42px] max-md:mr-2.5"
            />
          </div>
          <div className="flex flex-col self-start text-sm">
            <div className="flex gap-2 text-white">
              <button
                type="button"
                className="justify-center px-2 py-2.5 border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]"
              >
                50%
              </button>
              <button
                type="button"
                className="justify-center px-2 py-2.5 border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60 rounded-[42px]"
              >
                25%
              </button>
            </div>
            <div className="self-end mt-7 text-white text-opacity-50">
              $675.00
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-2.5 text-sm">
          <label htmlFor="buyAmount" className="text-white">
            Buy
          </label>
          <div className="flex-auto text-white text-opacity-50">
            Balance: 2051.02
          </div>
        </div>
        <div className="flex gap-1.5 items-center self-start py-1.5 pr-2 pl-1.5 mt-3.5 text-sm font-medium text-white whitespace-nowrap border border-solid bg-emerald-400 bg-opacity-20 border-emerald-400 border-opacity-20 rounded-[42px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6825ab8b5589e94a3f01f24570e06dc784d2f7c069c5b03e6b40da60fe7fc38a?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="USDT"
            className="shrink-0 self-stretch w-6 aspect-square"
          />
          <div className="self-stretch my-auto">USDT</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8ef3cf8859f2dc953baab4654f7795cfdc99f7e5c5c6f57413df2d13b10111?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt=""
            className="shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-3 mt-4 whitespace-nowrap">
          <div className="flex flex-1 gap-5 justify-between px-4 py-4 rounded-2xl border border-indigo-400 border-solid bg-zinc-700 bg-opacity-70">
            <div className="flex flex-col">
              <div className="text-lg font-medium text-white">142.964</div>
              <div className="mt-2 text-sm text-white text-opacity-50">
                $140
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b77f564219fdf2462d106ba971feea582c251f8f70202c273e876cb7232e95a4?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 my-auto w-6 aspect-square"
            />
          </div>
          <div className="flex flex-1 gap-5 justify-between p-4 rounded-2xl border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60">
            <div className="flex flex-col">
              <div className="text-lg font-medium text-white">146.250</div>
              <div className="mt-2 text-sm text-white text-opacity-50">
                $141
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f6d785e2cf95ba3eda3fa54616cd0918e524b0f9dc48a99c3f86ee7f5f250b5?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 my-auto aspect-square w-[22px]"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-3 w-full rounded-2xl border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60">
          <div className="flex flex-col">
            <div className="text-lg font-medium text-white">146.100</div>
            <div className="flex gap-3 mt-2 text-sm text-white text-opacity-50">
              <div>$141</div>
              <div className="flex-auto">TON &gt; KINGY &gt; USDT</div>
            </div>
          </div>
          <div className="flex gap-1.5 my-auto text-base font-medium text-white whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b77f564219fdf2462d106ba971feea582c251f8f70202c273e876cb7232e95a4?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Multihop</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between px-5 py-4 mt-3 w-full whitespace-nowrap rounded-2xl border border-solid bg-zinc-700 bg-opacity-70 border-zinc-700 border-opacity-60">
          <div className="flex flex-col">
            <div className="text-lg font-medium text-white">146.100</div>
            <div className="mt-2 text-sm text-white text-opacity-50">$141</div>
          </div>
          <div className="flex gap-3.5 items-center my-auto text-sm text-white text-opacity-50">
            <div className="flex gap-1 self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96cb2af4c3ba7fc0b91485cf9775a7475da7c240bd2032b7ce73fdcc954667e0?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
              <div className="my-auto">1%</div>
            </div>
            <div className="flex gap-1 self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64b12f4530244acc03b2c1bdec4b66e5fdeb6077a9d3947f62cae16f572e176b?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
              <div className="my-auto">99%</div>
            </div>
            <div className="flex gap-1.5 self-stretch text-base font-medium text-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d04b70bd0e27f612620d504b1dc8e9aa844d9f3a0f6bb6de196f729365cbeba?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Split</div>
            </div>
          </div>
        </div>
        <hr className="shrink-0 mt-6 h-px bg-white border border-white border-solid" />
        <div className="flex gap-5 justify-between mt-3.5 text-sm text-white">
          <div className="flex flex-col self-start font-medium">
            <div>You receive (incl.fee)</div>
            <div className="mt-5">Cashback</div>
            <div className="mt-5">More</div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">$672.946124</div>
            <div className="mt-5 font-medium text-right">50 NOTGEM</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b6dd731e3a625230dc7fb8827d89571006eb2db955f7b19e07e26054d0ba6ec?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt=""
              className="self-end mt-4 aspect-square w-[18px]"
            />
          </div>
        </div>
        <hr className="shrink-0 mt-3 h-px bg-white border border-white border-solid" />
        <button
          type="submit"
          className="justify-center items-center py-2.5 pr-3 pl-4 mt-6 text-base font-medium text-center text-white whitespace-nowrap bg-indigo-400 border border-solid border-indigo-400 border-opacity-20 rounded-[55px] max-md:px-5"
        >
          Swap
        </button>
      </form>
    </div>
  );
};

export default SwapForm;
