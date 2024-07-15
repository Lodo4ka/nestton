import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-5 justify-between px-20 py-12 mt-36 w-full border border-solid backdrop-blur-[50px] bg-black bg-opacity-20 border-zinc-700 border-opacity-60 rounded-[46px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/77f925e23e77418952794e9b235bbd815a016c0af96ad9f32609c7a85370b413?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          alt="Logo"
          width={78}
          height={18}
          className="aspect-[4.35] w-[78px]"
        />
        <p className="mt-5 text-sm font-medium text-white">
          Nest is a DEX focused on the speed <br /> of transactions in the TON
          network
        </p>
        <div className="flex gap-4 mt-6 max-md:pr-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cb5e7aea7e2294793f90426d1fcccdb7b7f2ac43fe498524ec62ceae75990f2?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="Social icon 1"
            width={18}
            height={18}
            className="shrink-0 aspect-square w-[18px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf4851b5f8b94c38754af811ebc50ff827162038734fe09e486620dec6be398?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="Social icon 2"
            width={18}
            height={18}
            className="shrink-0 aspect-square w-[18px]"
          />
        </div>
        <div className="mt-8 text-xs font-medium text-white">
          2024 © nest. All rights reserved
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start self-start text-sm font-medium text-white max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col">
          <h3>Products</h3>
          <a href="#" className="mt-5">
            Fast transaction
          </a>
          <a href="#" className="mt-3.5">
            Sniper bot
          </a>
          <a href="#" className="mt-3">
            Refferals
          </a>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <h3>About</h3>
          <a href="#" className="mt-5">
            DEX
          </a>
          <a href="#" className="mt-3.5">
            Token
          </a>
        </div>
        <div className="flex flex-col">
          <h3>Checkers</h3>
          <a href="#" className="mt-5">
            Whale chekers
          </a>
          <a href="#" className="mt-3.5">
            SCAM checkers
          </a>
        </div>
        <div className="flex flex-col self-stretch">
          <h3>Solutions</h3>
          <a href="#" className="mt-5">
            Help & Support
          </a>
          <a href="#" className="mt-3">
            Pricing
          </a>
          <a href="#" className="mt-3">
            News
          </a>
          <a href="#" className="mt-3.5">
            Privacy police
          </a>
          <a href="#" className="mt-3">
            Term of use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
