import React, { useEffect } from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const OrganizerNav = ({ eventCount }) => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // Cek peran dan arahkan pengguna ke dashboard yang sesuai
    try {
      if (
        !authState ||
        !authState.user ||
        !authState.user.role ||
        authState.user.role !== 'event_organizer'
      ) {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      navigate('/login?message=Unauthorized');
    }
  }, [navigate, authState]);

  const handleLogout = async () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/event_organizer/dashboard">
        Organizer Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/event_organizer/create-event">
            Create New Event
          </Nav.Link>
          <Nav.Link as={Link} to="/event_organizer/my-events">
            My Events{' '}
            <Badge variant="light" style={{ marginLeft: '5px' }}>
              {eventCount}
            </Badge>
          </Nav.Link>
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
        </Nav>
        <Navbar.Text className="pe-3" style={{ marginLeft: 'auto' }}>
          {authState.user.name}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OrganizerNav;
