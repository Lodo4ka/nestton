import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import HistoryTransactions from '../components/HistoryTransactions';
import WhaleChecker from '../components/WhaleChecker';
import ScamChecker from '../components/ScamChecker';
import HotkeySwap from '../components/HotkeySwap';
import Advantages from '../components/Advantages';
import NewsUpdates from '../components/NewsUpdates';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const menuItems = ['Home', 'Token', 'Pricing', 'Support'];

  return (
    <div className="flex flex-col items-center px-16 pt-8 pb-20 bg-neutral-900 max-md:px-5">
      <div className="flex flex-col w-full max-w-[1436px] max-md:max-w-full">
        <div className="flex flex-col self-center max-w-full w-[1144px]">
          <Header menuItems={menuItems} />
          <Hero />
          <FeatureSection />
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full">
                <HistoryTransactions />
              </div>
              <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                        <WhaleChecker />
                      </div>
                      <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                        <ScamChecker />
                      </div>
                    </div>
                  </div>
                  <HotkeySwap />
                </div>
              </div>
            </div>
          </div>
          <Advantages />
          <NewsUpdates />
          <FAQ />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
