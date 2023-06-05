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
    navigate('/');
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
    <Navbar bg="primary" variant="dark" style={{ marginBottom: '20px' }}>
      <Navbar.Brand as={Link} to="/home">
        My Dashboard
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/dashboard">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/search">
          Search
        </Nav.Link>
        <Nav.Link as={Link} to="/event">
          Event
        </Nav.Link>
        <Nav.Link as={Link} to="/tickets">
          My Tickets
          <Badge variant="light" style={{ marginLeft: '5px' }}>
            {ticketCount}
          </Badge>
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default UserNav;
