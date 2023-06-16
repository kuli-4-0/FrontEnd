import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserNav() {
  const [ticketCount, setTicketCount] = useState(0);
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchTicketCount = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/events/live/live-registrations/${authState.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setTicketCount(response.data.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicketCount();
  }, []);

  const handleLogout = async () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload(false);
  };

  useEffect(() => {
    // Cek peran dan arahkan pengguna ke dashboard yang sesuai
    try {
      if (
        !authState ||
        !authState.user ||
        !authState.user.role ||
        authState.user.role !== 'user'
      ) {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      navigate('/login?message=Unauthorized');
    }
  }, [navigate, authState]);

  return (
    <Navbar
      expand="md"
      variant="dark"
      style={{ marginBottom: '20px', padding: '10px', background: '#4A43EC' }}
    >
      <Navbar.Brand as={Link} to="/dashboard" style={{ marginLeft: '10px' }}>
        My Dashboard
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto me-auto">
          <Nav.Link as={Link} to="/dashboard" style={{ marginLeft: '10px' }}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/event" style={{ marginLeft: '10px' }}>
            Event
          </Nav.Link>
          <Nav.Link as={Link} to="/tickets" style={{ marginLeft: '10px' }}>
            My Tickets
            <Badge variant="light" style={{ marginLeft: '5px' }}>
              {ticketCount}
            </Badge>
          </Nav.Link>
          <Nav.Link onClick={handleLogout} style={{ marginLeft: '10px' }}>
            Logout
          </Nav.Link>
        </Nav>
        <Navbar.Text className="pe-3" style={{ marginLeft: 'auto' }}>
          {authState.user && authState.user.name}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UserNav;
