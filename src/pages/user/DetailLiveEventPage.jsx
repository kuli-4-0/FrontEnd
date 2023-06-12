import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserNav from '../../components/user/UserNav';
import DetailLiveEvent from '../../components/user/DetailLiveEvent';

function DetailLiveEventPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

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

  return (
    <>
      <UserNav />
      <DetailLiveEvent />
    </>
  );
}

export default DetailLiveEventPage;
