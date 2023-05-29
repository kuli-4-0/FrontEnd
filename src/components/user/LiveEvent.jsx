import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';

function LiveEvents() {
  const [liveEvents, setLiveEvents] = useState([]);

  useEffect(() => {
    // Ambil data event live dari backend API
    const fetchLiveEvents = async () => {
      try {
        const response = await axios.get('URL_API');
        setLiveEvents(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLiveEvents();
  }, []);

  return (
    <Container>
      <h2>Live Events</h2>
      <Row>
        {liveEvents.map((event) => (
          <Card key={event.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={event.poster} />
            <Card.Body>
              <Card.Title>{event.name}</Card.Title>
              <Card.Text>{event.location}</Card.Text>
              <Card.Text>{event.date}</Card.Text>
              <Card.Text>Status: {event.status}</Card.Text>
              <Card.Text>Capacity: {event.LiveEvent.eventsCapacity}</Card.Text>
              <Card.Text>Price: {event.LiveEvent.ticketPrice}</Card.Text>
              <Card.Text>Status: {event.LiveEvent.liveStatus}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default LiveEvents;
