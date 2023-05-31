import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';

function DetailLiveEvent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Ambil data event berdasarkan ID dari backend API
    const fetchEvent = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:5000/events/live/${eventId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(config);
        setEvent(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [eventId, token]);

  if (!event) {
    return <div>Loading...</div>;
  }

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <Container className="text-center">
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Img
              src={'/poster/default.jpg'}
              alt="Event Banner"
              className="img-fluid"
            />

            <Card.Body>
              <p className="text-end text-uppercase text-danger">{event.status}</p>
              <h2 className="mb-4">{event.name}</h2>
              <p>Location: {event.location}</p>
              <p>Date: {formatDate(event.date)}</p>
              {event.LiveEvent && (
                <>
                  <p>Capacity: {event.LiveEvent.eventsCapacity}</p>
                  <p>Price: {event.LiveEvent.ticketPrice}</p>
                  <p>Status: {event.LiveEvent.liveStatus}</p>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailLiveEvent;
