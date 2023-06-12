import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
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
      <Row className="justify-content-center">
        {liveEvents.length > 0 &&
          liveEvents.map((event) => (
            <Col
              className="justify-content-center"
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={event.id}
            >
              <Card
                as={Link}
                to={`/event/${event.id}`}
                className="mb-3 event-card"
                style={{
                  maxWidth: '350px', // Memperbesar ukuran kartu
                  margin: '5px', // Mengurangi margin antara kartu
                  padding: '10px',
                  display: 'flex', // Menjadikan kartu sebagai flex container
                  justifyContent: 'center', // Menempatkan isi kartu di tengah secara horizontal
                  alignItems: 'center', // Menempatkan isi kartu di tengah secara vertikal
                }}
              >
                <Card.Img
                  variant="top"
                  src={event.poster}
                  style={{
                    height: '150px',
                    objectFit: 'cover',
                  }}
                />
                <Card.Body style={{ color: 'black', textAlign: 'center' }}>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>{event.location}</Card.Text>
                  <Card.Text>{formatDate(event.date)}</Card.Text>
                  <Card.Text>Status: {event.status}</Card.Text>
                  {event.LiveEvent && (
                    <>
                      <Card.Text>
                        Capacity: {event.LiveEvent.eventsCapacity}
                      </Card.Text>
                      <Card.Text>
                        Price: {event.LiveEvent.ticketPrice}
                      </Card.Text>
                      <Card.Text>
                        Status: {event.LiveEvent.liveStatus}
                      </Card.Text>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default LiveEvents;
