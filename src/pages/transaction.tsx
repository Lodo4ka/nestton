import React from 'react';
import TransactionHeader from '../components/TransactionHeader';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const App: React.FC = () => {
  const handleConnectWallet = () => {
    // Implement wallet connection logic here
    console.log('Connecting wallet...');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TransactionHeader onConnectWallet={handleConnectWallet} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
