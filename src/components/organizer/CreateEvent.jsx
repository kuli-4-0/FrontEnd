import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [poster, setPoster] = useState(null);
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [eventsCapacity, setEventsCapacity] = useState('');
  const [liveStatus, setLiveStatus] = useState('available');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [auditionNeeds, setAuditionNeeds] = useState('');
  const [salary, setSalary] = useState('');
  const [requirements, setRequirements] = useState('');
  const [genre, setGenre] = useState('');
  const [numberOfMusicians, setNumberOfMusicians] = useState('');
  const [auditionStatus, setAuditionStatus] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('date', date);
    formData.append('poster', poster);
    formData.append('genre', genre);
    formData.append('status', eventType);

    if (eventType === 'Live') {
      formData.append('eventDate', eventDate);
      formData.append('ticketPrice', ticketPrice);
      formData.append('eventsCapacity', eventsCapacity);
      formData.append('liveStatus', liveStatus);
    } else if (eventType === 'Audition') {
      formData.append('startDate', startDate);
      formData.append('endDate', endDate);
      formData.append('auditionNeeds', auditionNeeds);
      formData.append('salary', salary);
      formData.append('requirements', requirements);
      formData.append('numberOfMusicians', numberOfMusicians);
      formData.append('auditionStatus', auditionStatus);
    }

    try {
      const response = await axios.post(
        'http://localhost:5000/events',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      toast.success('Event created successfully!');
      navigate(`/event_organizer/my-events/${response.data.event.id}`);
    } catch (error) {
      console.error(error);
      toast.error('Error creating event. Please try again.');
    }
  };

  const handlePosterUpload = (e) => {
    const file = e.target.files[0];
    const image = new Image();

    image.onload = function () {
      const width = this.width;
      const height = this.height;

      // Periksa ukuran gambar di sini
      if (width < 800 || height < 376) {
        toast.error(
          'Please upload a banner or horizontal rectangular image with a minimum size of 800px x 376px.'
        );
        return;
      }

      // Gambar sesuai ukuran, lanjutkan dengan mengatur poster
      setPoster(file);
    };

    image.src = URL.createObjectURL(file);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Create Event</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="eventType">
              <Form.Label>Event Type</Form.Label>
              <Form.Control
                as="select"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select Event Type</option>
                <option value="Live">Live</option>
                <option value="Audition">Audition</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="poster">
              <Form.Label className="me-3">Poster</Form.Label>
              <Form.Text className="text-muted">
                Please upload a banner or horizontal rectangular image for the
                poster (minimum size: 800px x 376px).
              </Form.Text>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handlePosterUpload}
              />
            </Form.Group>
            <Form.Group controlId="genre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Form.Group>

            {eventType === 'Live' && (
              <>
                <Form.Group controlId="eventDate">
                  <Form.Label>Event Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="ticketPrice">
                  <Form.Label>Ticket Price</Form.Label>
                  <Form.Control
                    type="text"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="eventsCapacity">
                  <Form.Label>Events Capacity</Form.Label>
                  <Form.Control
                    type="text"
                    value={eventsCapacity}
                    onChange={(e) => setEventsCapacity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="liveStatus">
                  <Form.Label>Live Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={liveStatus}
                    onChange={(e) => setLiveStatus(e.target.value)}
                  >
                    <option value="available">Available</option>
                    <option value="full">Full</option>
                    <option value="finished">Finished</option>
                  </Form.Control>
                </Form.Group>
              </>
            )}

            {eventType === 'Audition' && (
              <>
                <Form.Group controlId="startDate">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="endDate">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="auditionNeeds">
                  <Form.Label>Audition Needs</Form.Label>
                  <Form.Control
                    type="text"
                    value={auditionNeeds}
                    onChange={(e) => setAuditionNeeds(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="salary">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="requirements">
                  <Form.Label>Requirements</Form.Label>
                  <Form.Control
                    type="text"
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="numberOfMusicians">
                  <Form.Label>Number of Musicians</Form.Label>
                  <Form.Control
                    type="text"
                    value={numberOfMusicians}
                    onChange={(e) => setNumberOfMusicians(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="auditionStatus">
                  <Form.Label>Audition Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={auditionStatus}
                    onChange={(e) => setAuditionStatus(e.target.value)}
                  >
                    <option value="">- Select Status -</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="finished">Finished</option>
                  </Form.Control>
                </Form.Group>
              </>
            )}

            <Button variant="primary" type="submit">
              Create Event
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default CreateEvent;
