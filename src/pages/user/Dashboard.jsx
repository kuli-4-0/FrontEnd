import React from 'react';
import LiveEvents from '../../components/user/LiveEvent';
import UserNav from '../../components/user/UserNav';

const Dashboard = () => {
  return (
    <div>
      <UserNav />
      <LiveEvents />
    </div>
  );
};

export default Dashboard;
