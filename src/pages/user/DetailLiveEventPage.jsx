import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import {
  BsFillPersonFill,
  BsCalendarFill,
  BsGeoAlt,
  BsBoxArrowInUpRight,
} from 'react-icons/bs';
import UserNav from '../../components/user/UserNav';
import DetailLiveEvent from '../../components/user/DetailLiveEvent';

function DetailLiveEventPage() {
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
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
  }, [eventId, token]);

  if (!event) {
    return <div>Loading...</div>;
  }

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

  // Fungsi untuk mengubah format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <>
      <UserNav />
      <DetailLiveEvent />

      {/* <Container className="text-center">
        <Row className="my-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Img
                src={'/poster/default.jpg'}
                alt="Event Banner"
                className="img-fluid"
              />

              <Card.Body>
                <p className="text-end text-uppercase text-danger">
                  {event.status}
                </p>
                <h2 className="mb-4">{event.name}</h2>
                <p>
                  <BsGeoAlt /> Location: {event.location}
                </p>
                <p>
                  <BsCalendarFill /> Date: {formatDate(event.date)}
                </p>
                {event.LiveEvent && (
                  <>
                    <p>
                      <BsBoxArrowInUpRight /> Capacity:{' '}
                      {event.LiveEvent.eventsCapacity}
                    </p>
                    <p>
                      <BsFillPersonFill /> Price: {event.LiveEvent.ticketPrice}
                    </p>
                    <p>
                      <BsBoxArrowInUpRight /> Status:{' '}
                      {event.LiveEvent.liveStatus}
                    </p>
                  </>
                )}

                <Button onClick={handleBuyTicket} variant="primary">
                  Buy Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default DetailLiveEventPage;
