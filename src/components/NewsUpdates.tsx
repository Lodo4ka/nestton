import React from 'react';

type NewsItemProps = {
  date: string;
  title: string;
  content: string;
  iconSrc: string;
};

const NewsItem: React.FC<NewsItemProps> = ({
  date,
  title,
  content,
  iconSrc,
}) => (
  <div className="flex flex-col grow px-7 py-6 mx-auto w-full text-sm leading-4 text-white bg-indigo-400 bg-opacity-60 rounded-[32px] max-md:px-5 max-md:mt-6">
    <div className="flex gap-5 justify-between whitespace-nowrap">
      <div className="my-auto">{date}</div>
      <img
        src={iconSrc}
        alt="News icon"
        width={32}
        height={32}
        className="shrink-0 w-8 aspect-square"
      />
    </div>
    <h3 className="mt-8 text-xl font-medium">{title}</h3>
    <p className="mt-3 leading-4">{content}</p>
  </div>
);

const NewsUpdates: React.FC = () => {
  const newsItems: NewsItemProps[] = [
    {
      date: '01.01.2024',
      title: 'New update',
      content: 'We have added new functionality and fixed a couple of bugs.',
      iconSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d650da16ad51576f0d6ab60fd06386140af4ec53a3d3d434a89345154ec94ea8?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      date: '01.01.2024',
      title: 'Launching the utility',
      content:
        'We are pleased to announce the launch of our utility, join the community...',
      iconSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e7e21d26-137d-4c5a-a54c-8540c7d17f53?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
    {
      date: '01.01.2024',
      title: 'New update',
      content: 'We have added new functionality and fixed a couple of bugs.',
      iconSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d261b5e0-5ea6-4332-9166-3edba48ef9b7?apiKey=6b2e96b7418e4455a04083dc6057d6e5&',
    },
  ];

  return (
    <section className="mt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 px-px w-full text-white max-md:flex-wrap max-md:max-w-full">
        <h2 className="flex-auto text-3xl font-semibold leading-10">
          News and updates
        </h2>
        <div className="flex gap-1 self-start text-base font-medium text-center">
          <span className="grow my-auto">All news</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/be4ab420f066183463db781a629d46ede79751a44d5b50eb5158f534e015574d?apiKey=6b2e96b7418e4455a04083dc6057d6e5&"
            alt="Arrow icon"
            width={24}
            height={24}
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="px-px mt-9 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
            >
              <NewsItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
