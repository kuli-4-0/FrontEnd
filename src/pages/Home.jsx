import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Dashboard!</h1>
      <div className="d-grid gap-2 col-6 mx-auto mt-4">
        <Link to="/login" className="btn btn-primary">
          Login
        </Link>
        <Link to="/register" className="btn btn-success">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
