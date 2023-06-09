import React from 'react';
import MusisiNav from '../../components/musisi/MusisiNav';
import { Container } from 'react-bootstrap';

export const MusisiDashboard = () => {
  return (
    <>
      <MusisiNav />
      <Container className="mt-4">
        <h1>Welcome to Musisi Dashboard</h1>
        {/* Konten lainnya */}
      </Container>
    </>
  );
};
