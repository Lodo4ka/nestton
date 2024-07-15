import React from 'react';

type HeaderProps = {
  menuItems: string[];
};

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <header className="flex gap-5 justify-between w-full text-center max-md:flex-wrap max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/123ae0a9f5938139c5a3bfb434330518b33b58866dd22bd80efe647050ddaf4f?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
        alt="Logo"
        width={98}
        height={22}
        className="shrink-0 my-auto aspect-[4.35] w-[98px]"
      />
      <nav className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <ul className="flex gap-5 justify-between self-stretch my-auto text-base whitespace-nowrap text-neutral-400">
          {menuItems.map((item, index) => (
            <li key={index} className={index === 0 ? 'text-white' : ''}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-1 self-stretch my-auto text-base whitespace-nowrap text-neutral-400">
          <span className="grow my-auto">Checkers</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c72da470512e3372f4adee84bbc8f507a770bd81f13cf491aa99de850c72f8b?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="Checker icon"
            width={20}
            height={20}
            className="shrink-0 w-5 aspect-square"
          />
        </div>
        <div className="flex gap-5 justify-between self-stretch">
          <span className="my-auto text-base text-neutral-400 text-opacity-50">
            Copytrading
          </span>
          <button className="justify-center px-3.5 py-2.5 text-sm text-white border border-solid backdrop-blur-[50px] bg-zinc-700 bg-opacity-30 border-zinc-700 border-opacity-60 rounded-[78px] max-md:pl-5">
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
