import React from 'react';
// import TransactionHistory from '../components/TransactionHistory';
import SwapForm from '../components/SwapForm';
import TokenInfo from '../components/TokenInfo';
import Shortcuts from '../components/Shortcuts';

const MainContent: React.FC = () => {
  // const transactions = [
  //   {
  //     type: 'buy',
  //     date: '01.01.1970 13:00',
  //     fromAmount: '100',
  //     fromCurrency: 'TON',
  //     toAmount: '1200',
  //     toCurrency: 'NOTGEM',
  //   },
  //   {
  //     type: 'sell',
  //     date: '01.01.1970 13:05',
  //     fromAmount: '1200',
  //     fromCurrency: 'NOTGEM',
  //     toAmount: '200',
  //     toCurrency: 'TON',
  //     percentageChange: '+100%',
  //   },
  //   {
  //     type: 'buy',
  //     date: '01.01.1970 13:07',
  //     fromAmount: '200',
  //     fromCurrency: 'TON',
  //     toAmount: '1100',
  //     toCurrency: 'NOTGEM',
  //     percentageChange: '+2%',
  //   },
  //   {
  //     type: 'sell',
  //     date: '01.01.1970 13:09',
  //     fromAmount: '1100',
  //     fromCurrency: 'NOTGEM',
  //     toAmount: '100',
  //     toCurrency: 'TON',
  //     percentageChange: '-50%',
  //   },
  // ];

  const tokenInfo = {
    price: '$0.01863',
    mcap: '$2.11B | 267M TON',
    tonInLp: '47.8K TON',
    age: '10 min',
    hasOwner: true,
    supply: '100M',
    buys: 10,
    sells: 100,
    holders: '200 (20,65% | 16.52 | 6.22 | 1.90% | 1.56%)',
  };

  return (
    <main className="self-center mt-9 max-w-full w-[1145px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          {/* <TransactionHistory transactions={transactions as Transaction[]} /> */}
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <SwapForm />
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-sm max-md:mt-6">
          <Shortcuts />
          <TokenInfo {...tokenInfo} />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
