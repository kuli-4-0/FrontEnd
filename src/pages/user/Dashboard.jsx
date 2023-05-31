import React, { useEffect } from 'react';
import LiveEvents from '../../components/user/LiveEvent';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const role = user.role;
  useEffect(() => {
    // Cek peran dan arahkan pengguna ke dashboard yang sesuai
    if (role !== 'user') {
      navigate('/login?message=Unauthorized');
    }
  }, [role, navigate]);

  return (
    <div>
      <h1 className="text-center">ini halaman user</h1>
      <LiveEvents />
    </div>
  );
};

export default Dashboard;
