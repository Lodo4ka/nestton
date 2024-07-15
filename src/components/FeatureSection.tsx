import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="mt-32 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-10 text-indigo-400 max-md:max-w-full">
        What <span className="text-indigo-400">nest</span> offers?
      </h2>
      <p className="mt-4 text-lg leading-5 text-white max-md:max-w-full">
        Speed. Simplicity. Availability
      </p>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start pt-7 w-full text-sm leading-4 text-white aspect-square bg-zinc-900 rounded-[32px] max-md:mt-6">
              <div className="flex overflow-hidden relative flex-col pr-px pb-10 pl-2 aspect-[0.85]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e616d743c73288600f4986e86dfffa93be4795512137d77b23e22a3d6ab40ff1?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt="Feature background"
                  className="absolute inset-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/df495439-11fe-4cf6-b61e-dba35f1f3545?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt="Feature icon"
                  width={253}
                  height={230}
                  className="w-full aspect-[1.1] stroke-[1px] stroke-red-500"
                />
                <p className="relative mx-5 mt-3 w-[253px] max-md:mx-2.5">
                  Switch the standard swap to fast transactions with one click
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-9 w-full bg-zinc-900 rounded-[32px] max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-4 self-stretch text-sm font-bold leading-4 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-end px-16 py-3 text-white rounded-none w-fit max-md:pl-5 max-md:max-w-full">
                  4.5x faster
                </div>
                <div className="flex-auto my-auto bg-clip-text">
                  nest sniper
                </div>
              </div>
              <div className="flex gap-4 mt-8 max-w-full text-sm font-medium leading-4 text-white w-[514px] max-md:flex-wrap">
                <div className="grow justify-center items-end px-16 py-3 rounded-none w-fit max-md:pl-5">
                  1.5x faster
                </div>
                <div className="flex-auto my-auto">other sniper</div>
              </div>
              <div className="flex gap-4 mt-8 max-w-full text-sm font-medium leading-4 text-white w-[357px]">
                <div className="justify-center items-end px-16 py-3 rounded-none max-md:pl-5">
                  1x faster
                </div>
                <div className="flex-auto my-auto">other DEX</div>
              </div>
              <div className="flex flex-col mt-10 ml-9 max-w-full text-white w-[456px]">
                <h3 className="text-2xl font-medium leading-8 max-md:max-w-full">
                  Sniper bot
                </h3>
                <p className="mt-3 text-sm leading-4 max-md:max-w-full">
                  Launch a sniperbot to get even more profit from your
                  operations, don&apos;t keep an eye on the whales, lead them
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
