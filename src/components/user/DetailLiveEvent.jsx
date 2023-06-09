import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {
  BsFillPersonFill,
  BsCalendarFill,
  BsGeoAlt,
  BsBoxArrowInUpRight,
} from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function DetailLiveEvent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    // Ambil data event berdasarkan ID dari backend API
    const fetchEvent = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BASE_URL}/events/live/${eventId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await axios.request(config);
        setEvent(response.data.data[0]);
        console.log(response.data.data);
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

  const handleBuyTicket = async () => {
    try {
      // Lakukan logika pembelian tiket di sini

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BASE_URL}/events/live/${event.id}/live-registrations`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));

      // Setelah pembelian berhasil, arahkan pengguna ke halaman PurchaseLiveSuccessful
      navigate(`/event/${eventId}/purchase-successful`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="text-left">
      <Row className="my-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-5 pb-0">
            <h2
              className="mb-4"
              style={{ fontSize: '28px', fontWeight: 'bold' }}
            >
              {event.name}
            </h2>
            <Card.Img
              src={event.poster}
              alt="Event Banner"
              className="img-fluid"
            />

            <Card.Body className="text-left">
              <div className="d-flex justify-content-between">
                <p className="w-50 text-uppercase text-start">
                  <small>{event.genre}</small>
                </p>
                <p className="w-50 text-uppercase text-danger text-end">
                  <small>{event.status}</small>
                </p>
              </div>

              <h2>{event.LiveEvent.musicianName}</h2>
              <p>
                <BsGeoAlt /> {event.location}
              </p>
              <p>
                <BsCalendarFill /> {formatDate(event.date)}
              </p>
              {event.LiveEvent && (
                <>
                  <p>
                    <FontAwesomeIcon icon={faClock} className="icon" />
                    {event.LiveEvent.duration} hours
                  </p>
                  <p>
                    <BsBoxArrowInUpRight /> Capacity:{' '}
                    {event.LiveEvent.eventsCapacity}
                  </p>
                  <p className="text-center">
                    {event.LiveEvent.liveStatus}
                    <br />
                    <Button
                      className="align-center"
                      onClick={handleBuyTicket}
                      variant="primary"
                    >
                      Buy Ticket - Rp{event.LiveEvent.ticketPrice}
                    </Button>
                  </p>
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
