import React from 'react';

type KeyProps = {
  letter?: string;
  isActive?: boolean;
};

const Key: React.FC<KeyProps> = ({ letter, isActive }) => (
  <div
    className={`flex flex-col justify-center items-center px-3.5 w-11 h-11 text-2xl font-medium leading-7 whitespace-nowrap rounded-lg border-b border-solid ${isActive ? 'bg-neutral-800 border-white border-opacity-10' : 'bg-neutral-800 bg-opacity-60'}`}
  >
    {letter && <div className="bg-clip-text">{letter}</div>}
  </div>
);

const HotkeySwap: React.FC = () => {
  const keys = ['N', '', '', '', 'S', '', '', 'E', '', '', '', 'T'];

  return (
    <div className="flex flex-col py-10 pl-9 mt-6 bg-zinc-900 rounded-[32px] max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-3 self-end text-2xl font-medium leading-7 whitespace-nowrap">
        {keys.map((letter, index) => (
          <Key key={index} letter={letter} isActive={!!letter} />
        ))}
        <div className="shrink-0 w-2 h-11 rounded-lg bg-neutral-800 bg-opacity-60" />
      </div>
      <div className="flex gap-3 justify-between items-start mt-5 max-md:flex-wrap">
        <div className="flex flex-col mt-5 text-white">
          <h3 className="text-2xl font-medium leading-8">Hotkey swap</h3>
          <p className="mt-3 text-sm leading-4">
            We have integrated hotkeys into swaps so that you can exchange
            tokens even faster
          </p>
        </div>
        {keys.slice(5).map((letter, index) => (
          <Key key={index} letter={letter} isActive={!!letter} />
        ))}
        <div className="shrink-0 w-2 h-11 rounded-lg bg-neutral-800 bg-opacity-60" />
      </div>
    </div>
  );
};

export default HotkeySwap;
