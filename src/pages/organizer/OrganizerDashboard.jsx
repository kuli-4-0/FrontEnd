import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import OrganizerNav from '../../components/organizer/OrganizerNav';

const OrganizerDashboard = () => {
  return (
    <>
      <OrganizerNav />
      <h1>ini dashboard</h1>
    </>
  );
};

export default OrganizerDashboard;
