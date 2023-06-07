import React from 'react';
import { Nav, Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrganizerNav = ({ eventCount }) => {
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OrganizerNav;
