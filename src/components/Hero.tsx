import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="mx-5 mt-10 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-medium text-white max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1.5 self-start p-1.5 text-sm bg-white bg-opacity-10 rounded-[45px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d0889ddeef36bfb72fef47e560f790ab3de26f41caa197a5daceadaa3bada6?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                alt="TON icon"
                width={24}
                height={24}
                className="shrink-0 w-6 aspect-square"
              />
              <span className="my-auto">TON Blockchain</span>
            </div>
            <h1 className="mt-24 text-4xl font-semibold leading-10 max-md:mt-10 max-md:max-w-full">
              Join the next level <br /> of crypto exchanger
            </h1>
            <p className="mt-6 text-lg leading-6 max-md:max-w-full">
              Exchange tokens thanks to convenient swap and fast features in the
              TON blockchain
            </p>
            <div className="flex gap-3 mt-14 text-base text-center max-md:flex-wrap max-md:mt-10">
              <button className="flex flex-auto gap-1.5 py-2.5 pr-3 pl-4 border border-solid bg-white bg-opacity-10 border-white border-opacity-10 rounded-[55px] max-md:px-5">
                <span className="my-auto">Launch app</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3258b3d90671ae29cc9e5c4a30379f01a18091d2c016879cc25d446bc669b85c?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                  alt="Launch icon"
                  width={24}
                  height={24}
                  className="shrink-0 w-6 aspect-square"
                />
              </button>
              <button className="justify-center px-7 py-5 whitespace-nowrap border border-solid border-white border-opacity-10 rounded-[68px] max-md:px-5">
                More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/622325e9c0cfa99d510eee35d186b05579a07767c71c6227bfbc9181693afc14?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="Hero illustration"
            width={500}
            height={556}
            className="grow w-full aspect-[0.9] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
