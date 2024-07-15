import React from 'react';
import Image from './Image';

type Transaction = {
  type: 'buy' | 'sell';
  date: string;
  fromAmount: string;
  fromCurrency: string;
  toAmount: string;
  toCurrency: string;
  percentageChange?: string;
};

type TransactionHistoryProps = {
  transactions: Transaction[];
};

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
}) => {
  return (
    <div className="flex grow gap-5 items-start py-6 pr-3 pl-6 w-full rounded-3xl border border-solid bg-zinc-800 bg-opacity-50 border-zinc-700 border-opacity-60 max-md:pl-5 max-md:mt-6">
      <div className="flex flex-col grow shrink-0 self-start font-medium basis-0 w-fit">
        <h2 className="text-base text-white">History transaction</h2>
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            <div className="flex gap-5 justify-between mt-5">
              <div className="flex flex-col">
                <div
                  className={`justify-center px-1.5 py-0.5 text-sm text-center ${transaction.type === 'buy' ? 'text-green-400 bg-green-400' : 'text-red-500 bg-red-500'} whitespace-nowrap rounded-md bg-opacity-10`}
                >
                  {transaction.type}
                </div>
              </div>
              <div className="self-end text-xs text-white text-opacity-50">
                {transaction.date}
              </div>
            </div>
            <div className="flex gap-1 items-center mt-3 text-sm text-white">
              <div className="self-stretch my-auto">
                {transaction.fromAmount} {transaction.fromCurrency}
              </div>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/719db5141cd15746787f77313b1dc283c550707dea33cf4be28ec073b0a31f1b?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
                className="shrink-0 self-stretch aspect-square w-[17px]"
                alt="Arrow icon"
              />
              <div className="flex-auto self-stretch my-auto">
                {transaction.toAmount} {transaction.toCurrency}
              </div>
              {transaction.percentageChange && (
                <div
                  className={`my-auto ${transaction.percentageChange.startsWith('+') ? 'text-green-400' : 'text-red-500'}`}
                >
                  ({transaction.percentageChange})
                </div>
              )}
            </div>
            {index < transactions.length - 1 && (
              <div className="shrink-0 mt-3.5 h-px bg-white border border-white border-solid" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col self-end pb-20 mt-9 bg-zinc-800 rounded-[46px]">
        <div className="shrink-0 h-10 bg-indigo-400 rounded-[46px]" />
      </div>
    </div>
  );
};

export default TransactionHistory;
