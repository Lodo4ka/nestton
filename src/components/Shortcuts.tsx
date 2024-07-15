import React from 'react';

type ShortcutProps = {
  shortcut: string;
  description: string;
};

const Shortcut: React.FC<ShortcutProps> = ({ shortcut, description }) => (
  <div className="flex gap-3.5 mt-4">
    <div className="justify-center px-1 py-px font-medium text-center text-white rounded-md bg-white bg-opacity-10">
      {shortcut}
    </div>
    <div className="flex-auto my-auto text-white text-opacity-50">
      {description}
    </div>
  </div>
);

const Shortcuts: React.FC = () => {
  const shortcuts = [
    { shortcut: 'space', description: 'Start auto swap' },
    { shortcut: 'alt + e', description: 'Buy / Sell mode' },
    { shortcut: 'ctrl + 1', description: 'set the maximum amount' },
    { shortcut: 'ctrl + 2', description: 'set 75% amount' },
    { shortcut: 'ctrl + 3', description: 'set 50% amount' },
    { shortcut: 'ctrl + 4', description: 'set 25% amount' },
  ];

  return (
    <div className="flex flex-col px-6 pt-4 pb-7 w-full rounded-3xl border border-solid bg-zinc-800 bg-opacity-50 border-zinc-700 border-opacity-60 max-md:pl-5">
      <div className="flex gap-5 justify-between items-start w-full">
        <div className="flex gap-4 mt-2.5">
          <div className="justify-center px-1 py-px font-medium text-center text-white whitespace-nowrap rounded-md bg-white bg-opacity-10">
            space
          </div>
          <div className="flex-auto my-auto text-white text-opacity-50">
            Start auto swap
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b748148e5c37f7df220efc55f9d659ca258d7cbde28410c982fd2020c691b393?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
          className="shrink-0 w-6 aspect-square"
          alt="Info icon"
        />
      </div>
      {shortcuts.slice(1).map((shortcut, index) => (
        <Shortcut key={index} {...shortcut} />
      ))}
    </div>
  );
};

export default Shortcuts;
