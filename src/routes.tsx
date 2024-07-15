import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import DashboardSwap from './pages/DashboardSwap';
import Sniper from './pages/Sniper';
import Transaction from './pages/Transaction';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sniper" element={<Sniper />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/dashboard-swap" element={<DashboardSwap />} />
    </Routes>
  );
};

export default AppRoutes;
