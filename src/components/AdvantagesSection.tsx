import React from 'react';
import Image from 'next/image';

const AdvantagesSection: React.FC = () => {
  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl font-semibold leading-10 text-white">
        Advantages
      </h2>
      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 py-9 w-full text-white bg-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-6">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ad872b-d526-4d07-8c0b-ec8bd559027b?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt="Speed illustration"
                width={300}
                height={162}
                className="w-full rounded-full aspect-[1.85]"
              />
              <h3 className="mt-8 text-2xl font-medium leading-8">Speed</h3>
              <p className="mt-3 text-sm leading-4">
                We tried to speed up trading by using clean code and fast
                technologies. A separate power is allocated for each sniper bot
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5bfecd0f78e01d02c667c3f3737a2fd69c2c5962c69e4453f3f02bbb70896164?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
              alt="Simplicity illustration"
              width={300}
              height={345}
              className="grow w-full aspect-[0.87] max-md:mt-6"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-7 py-12 mx-auto w-full bg-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-6">
              <div className="flex gap-3 max-md:pr-5">
                <div className="shrink-0 w-28 h-6 rounded-md bg-zinc-800"></div>
                <div className="shrink-0 h-6 rounded-md w-[124px]"></div>
              </div>
              <div className="shrink-0 mt-3 h-6 rounded-md bg-zinc-800"></div>
              <div className="shrink-0 mt-3 h-6 rounded-md"></div>
              <div className="shrink-0 mt-3 h-6 rounded-md bg-zinc-800"></div>
              <h3 className="mt-20 text-2xl font-medium leading-8 text-white max-md:mt-10">
                Availability
              </h3>
              <p className="mt-3 text-sm leading-4 text-white">
                We have tried to make our products available to everyone, make a
                profit today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
