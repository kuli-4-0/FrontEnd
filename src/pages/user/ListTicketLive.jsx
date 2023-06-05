import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Container, Card, ListGroup } from 'react-bootstrap';
import UserNav from '../../components/user/UserNav';

const ListTicketLive = () => {
  const [eventData, setEventData] = useState(null);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(authState);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/events/live/live-registrations/${authState.user.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setEventData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(eventData);
  return (
    <>
      <UserNav />
      <Container>
        <h1>Event Data</h1>
        {eventData ? (
          eventData.map((event) => (
            <Card key={event.id} className="mb-4">
              <Card.Body>
                <Card.Title>{event.LiveEvent.Event.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>ID: {event.id}</ListGroup.Item>
                  <ListGroup.Item>
                    Date: {event.LiveEvent.Event.date}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Location: {event.LiveEvent.Event.location}
                  </ListGroup.Item>
                  {/* Tambahkan detail lain yang diinginkan */}
                </ListGroup>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
};

export default ListTicketLive;
