import React from 'react';

const HistoryTransactions: React.FC = () => {
  const transactions = [
    {
      id: 1,
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d365b1cb64bdf2855605f3be32e38dd81652123012522c052c7159fefb52e461?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      id: 2,
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/db33f01b21c2b0343d402bb31ef33409b19c88e070ca0b38cbde65572e2bf63b?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      id: 3,
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/820615f61abbe9db0ad911c258344025cbedc3bfd9da36778d43cd1210308fbf?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      id: 4,
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f5423bf973a5e3b4661aab2f6b8f9e497c6282db3e907d25d81bf8d4f5823282?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      id: 5,
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/820615f61abbe9db0ad911c258344025cbedc3bfd9da36778d43cd1210308fbf?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
  ];

  return (
    <div className="flex flex-col grow items-center px-7 py-8 w-full text-white bg-zinc-900 rounded-[32px] max-md:px-5 max-md:mt-6">
      {transactions.map((transaction) => (
        <img
          key={transaction.id}
          src={transaction.imageSrc}
          alt={`Transaction ${transaction.id}`}
          width={285}
          height={54}
          className={`${transaction.id > 1 ? 'mt-3.5' : ''} aspect-[5.26] w-[285px]`}
        />
      ))}
      <h3 className="self-stretch mt-9 text-2xl font-medium leading-8">
        History transactions
      </h3>
      <p className="self-stretch mt-3 text-sm leading-4 max-md:mr-2.5">
        Keep track of your transactions so as not to lose your investments
      </p>
    </div>
  );
};

export default HistoryTransactions;
