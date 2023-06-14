import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import jsondata from './ml.json';
import { Link } from 'react-router-dom';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faDollarSign,
  faCalendarAlt,
  faMapMarkerAlt,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    fetchGenres();
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedGenre]);

  const fetchData = () => {
    let genreEvents = [];

    if (selectedGenre === 'All') {
      genreEvents = Object.values(jsondata).flat();
    } else if (selectedGenre) {
      genreEvents = jsondata[selectedGenre];
    }

    const sortedEvents = genreEvents.sort((a, b) => b.rating - a.rating);
    setEvents(sortedEvents);
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/events/getallgenres`
      );
      setGenres(['All', ...response.data.genres]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const eventDate = new Date('2023-06-12T02:55:33.000Z');
  const eventTime = eventDate.getHours();
  console.log(eventTime); // Output: 2

  return (
    <Container className="my-4">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center mb-4">
          <h3>Genres</h3>
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={genre === selectedGenre ? 'primary' : 'outline-primary'}
              onClick={() => handleGenreClick(genre)}
              className="mx-2"
            >
              {genre}
            </Button>
          ))}
        </Col>
        <Col xs={12}>
          <h1>{selectedGenre === 'All' ? 'All Genres' : selectedGenre}</h1>
          {events.length > 0 ? (
            <Row className="justify-content-center">
              {events.map((event) => (
                <Col xs={12} sm={6} md={4} lg={3} key={event.id_event}>
                  <Card
                    as={Link}
                    to={`/event/${event.id_event}`}
                    className="event-card mb-3"
                    style={{ maxWidth: '350px' }}
                  >
                    <img
                      src={event.poster}
                      alt="Event Poster"
                      style={{ height: '120px', objectFit: 'cover' }}
                    />
                    <div className="event-details p-2" style={{ color: 'black' }}>
                      <h5>{event.nama_event}</h5>
                      <p>
                        Start from <br /> Rp{' '}
                        {event.harga_tiket.toLocaleString('id-ID')}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="icon me-2"
                        />
                        {formatDate(event.date)}
                      </p>
                      <p>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="icon me-2"
                        />
                        {event.location}
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faClock} className="icon me-2" />
                        {event.durasi} hours
                      </p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>No events available.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
