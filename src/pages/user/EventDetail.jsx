import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailLiveEvent from '../../components/user/DetailLiveEvent';

function EventDetail() {
  return (
    <div>
      <DetailLiveEvent />
    </div>
  );
}

export default EventDetail;
