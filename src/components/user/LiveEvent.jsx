import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';

function LiveEvents() {
  const [liveEvents, setLiveEvents] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Ambil data event live dari backend API
    const fetchLiveEvents = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BASE_URL}/events/live`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(config);
        setLiveEvents(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLiveEvents();
  }, [token]);

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <Container className="my-4">
      <h2>Live Events</h2>
      <Row>
        {liveEvents.length > 0 &&
          liveEvents.map((event) => (
            <Card
              as={Link}
              to={`/event/${event.id}`}
              key={event.id}
              className="mb-3 event-card"
              style={{ width: '18rem', margin: '10px', padding: '10px' }}
            >
              <Card.Img
                variant="top"
                src={event.poster}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body style={{ color: 'black' }}>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.location}</Card.Text>
                <Card.Text>{formatDate(event.date)}</Card.Text>
                <Card.Text>Status: {event.status}</Card.Text>
                {event.LiveEvent && (
                  <>
                    <Card.Text>
                      Capacity: {event.LiveEvent.eventsCapacity}
                    </Card.Text>
                    <Card.Text>Price: {event.LiveEvent.ticketPrice}</Card.Text>
                    <Card.Text>Status: {event.LiveEvent.liveStatus}</Card.Text>
                  </>
                )}
                {/* <Link to={`/event/${event.id}`}>View Details</Link> */}
              </Card.Body>
            </Card>
          ))}
      </Row>
    </Container>
  );
}

export default LiveEvents;
