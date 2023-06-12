import React from 'react';
import LiveEvents from '../../components/user/LiveEvent';
import UserNav from '../../components/user/UserNav';
import Dashboard from '../../components/user/Dashboard';

const DashboardPage = () => {
  return (
    <div>
      <UserNav />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
