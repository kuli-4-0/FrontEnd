import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Row, Col } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaMoneyBill,
} from 'react-icons/fa';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const { eventId } = useParams();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/events/${eventId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        setEvent(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvent();
  }, [eventId]);
  console.log(event);

  if (!event) {
    return <div>Loading...</div>;
  }

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <Card>
          <Card.Img
            style={{
              minHeight: '200px',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
            variant="top"
            src={event.poster}
            alt="Event Poster"
          />
          <Card.Body>
            <Card.Title className="d-flex align-items-center">
              {event.name}
              <span
                className={`status-badge ${
                  event.status === 'Audition' ? 'audition' : 'live'
                }`}
              >
                {event.status}
              </span>
            </Card.Title>
            <Row className="mb-2">
              <Col xs="auto">
                <FaMapMarkerAlt />
              </Col>
              <Col>
                <Card.Text>{event.location}</Card.Text>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <FaCalendarAlt />
              </Col>
              <Col>
                <Card.Text>{formatDate(event.date)}</Card.Text>
              </Col>
            </Row>
            {event.AuditionEvent && (
              <>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaClock />
                  </Col>
                  <Col>
                    <Card.Text>
                      Audition Time: {formatDate(event.AuditionEvent.startDate)}{' '}
                      - {formatDate(event.AuditionEvent.endDate)}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaUsers />
                  </Col>
                  <Col>
                    <Card.Text>
                      Number of Musicians:{' '}
                      {event.AuditionEvent.numberOfMusicians}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaMoneyBill />
                  </Col>
                  <Col>
                    <Card.Text>Salary: {event.AuditionEvent.salary}</Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaClock />
                  </Col>
                  <Col>
                    <Card.Text>
                      Audition Needs: {event.AuditionEvent.auditionNeeds}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaClock />
                  </Col>
                  <Col>
                    <Card.Text>
                      Requirements: {event.AuditionEvent.requirements}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaClock />
                  </Col>
                  <Col>
                    <Card.Text>Genre: {event.AuditionEvent.genre}</Card.Text>
                  </Col>
                </Row>
              </>
            )}
            {event.LiveEvent && (
              <>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaClock />
                  </Col>
                  <Col>
                    <Card.Text>
                      Event Time: {event.LiveEvent.eventTime}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaUsers />
                  </Col>
                  <Col>
                    <Card.Text>
                      Events Capacity: {event.LiveEvent.eventsCapacity}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs="auto">
                    <FaMoneyBill />
                  </Col>
                  <Col>
                    <Card.Text>
                      Ticket Price: {event.LiveEvent.ticketPrice}
                    </Card.Text>
                  </Col>
                </Row>
              </>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default EventDetail;
