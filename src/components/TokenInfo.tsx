import React from 'react';

type TokenInfoProps = {
  price: string;
  mcap: string;
  tonInLp: string;
  age: string;
  hasOwner: boolean;
  supply: string;
  buys: number;
  sells: number;
  holders: string;
};

const TokenInfo: React.FC<TokenInfoProps> = ({
  price,
  mcap,
  tonInLp,
  age,
  hasOwner,
  supply,
  buys,
  sells,
  holders,
}) => {
  return (
    <div className="flex flex-col px-6 pt-4 pb-14 mt-5 w-full rounded-3xl border border-solid bg-zinc-800 bg-opacity-50 border-zinc-700 border-opacity-60 max-md:pl-5">
      <div className="flex gap-5 justify-between items-start">
        <div className="flex flex-col mt-3.5 whitespace-nowrap">
          <div className="text-white text-opacity-50">Price</div>
          <div className="flex gap-1 mt-2.5 font-bold text-green-400">
            <div className="grow">{price}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between items-start text-white text-opacity-50">
            <div className="mt-3.5">MCap</div>
          </div>
          <div className="mt-2.5 font-medium text-white">{mcap}</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-6">
        <div className="flex flex-col text-white text-opacity-50">
          <div>TON in LP</div>
          <div className="mt-3.5 font-medium text-green-400">{tonInLp}</div>
          <div className="mt-7">Age</div>
          <div className="mt-2.5 font-medium text-white">{age}</div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="flex gap-5 max-md:pr-5">
            <div className="flex flex-col flex-1">
              <div className="text-white text-opacity-50">Owner</div>
              <div className="mt-3.5 font-medium text-red-500">
                {hasOwner ? 'Yes' : 'No'}
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-white text-opacity-50">Supply</div>
              <div className="mt-2.5 font-medium text-white">{supply}</div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-7 text-white text-opacity-50">
            <div>Buys</div>
            <div>Sells</div>
          </div>
          <div className="flex gap-5 justify-between mt-2.5 font-medium text-white">
            <div>{buys}</div>
            <div>{sells}</div>
          </div>
        </div>
      </div>
      <div className="mt-7 text-white text-opacity-50">Holders</div>
      <div className="mt-3 mr-6 font-medium text-white max-md:mr-2.5">
        {holders}
      </div>
    </div>
  );
};

export default TokenInfo;
