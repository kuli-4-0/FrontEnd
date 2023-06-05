import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Button, Badge } from 'react-bootstrap';

const ListMyEvent = () => {
  const [events, setEvents] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/events/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEvents(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Organizer Dashboard</h1>
      <Link to="/create-event">Create New Event</Link>
      <h2>Your Events</h2>
      {events.map((event) => (
        <Card key={event.id} className="mb-3">
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {event.status === 'Live' ? (
                <Badge variant="success">Live Event</Badge>
              ) : (
                <Badge variant="info">Audition Event</Badge>
              )}
            </Card.Subtitle>
            <Card.Text>
              <strong>Date:</strong> {event.date}
              <br />
              <strong>Location:</strong> {event.location}
            </Card.Text>
            <Button variant="primary" as={Link} to={`/event/${event.id}`}>
              View Details
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListMyEvent;
