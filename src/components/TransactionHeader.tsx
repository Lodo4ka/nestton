import React from 'react';

type HeaderProps = {
  onConnectWallet: () => void;
};

const TransactionHeader: React.FC<HeaderProps> = ({ onConnectWallet }) => {
  return (
    <header className="flex gap-5 justify-between items-center w-full text-center max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb90d1aa37cf28f033a8d0682f02baef24c970660d4084050597b8c0607e4b2?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
        alt="Company logo"
        className="shrink-0 self-stretch my-auto aspect-[4.35] w-[98px]"
      />
      <nav className="flex gap-5 self-stretch my-auto text-base whitespace-nowrap text-neutral-400">
        <div className="flex flex-auto gap-5 justify-between my-auto">
          <a href="#home">Home</a>
          <a href="#token">Token</a>
          <a href="#pricing">Pricing</a>
          <a href="#support">Support</a>
        </div>
        <div className="flex gap-1">
          <div className="grow my-auto">Checkers</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9e2fcd71758c2b9719e19d5606b1692484dd0e029f86b1ae19812b52be109f9?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt=""
            className="shrink-0 w-5 aspect-square"
          />
        </div>
      </nav>
      <button
        onClick={onConnectWallet}
        className="justify-center self-stretch px-3.5 py-2.5 text-sm text-white border border-solid backdrop-blur-[50px] bg-zinc-700 bg-opacity-30 border-zinc-700 border-opacity-60 rounded-[78px] max-md:pl-5"
      >
        Connect Wallet
      </button>
    </header>
  );
};

export default TransactionHeader;
