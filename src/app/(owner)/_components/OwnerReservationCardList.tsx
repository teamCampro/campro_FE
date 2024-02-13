'use client';

import React, { useEffect, useState } from 'react';
import OwnerReservationCard, { ReservationType } from './OwnerReservationCard';
import axios from 'axios';

interface ReservationData {
  imageUrl: string;
  type: ReservationType;
  siteArea: string;
  site: string;
  clientName: string;
  checkIn: string;
  checkOut: string;
}
function OwnerReservationCardList() {
  const [reservataionData, setReservationData] = useState<ReservationData[]>(
    [],
  );

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/data/reservationMockData.json');
      setReservationData(response.data);
    };

    fetch();
  }, []);

  return (
    <div className='grid w-1150pxr grid-cols-2 place-items-center gap-x-91pxr gap-y-50pxr mobile:grid-cols-1 tablet:grid-cols-1'>
      {reservataionData.map((reservation, index) => {
        const {
          imageUrl,
          type,
          siteArea,
          site,
          clientName,
          checkIn,
          checkOut,
        } = reservation;
        return (
          <OwnerReservationCard
            key={index}
            imageUrl={imageUrl}
            type={type}
            siteArea={siteArea}
            site={site}
            clientName={clientName}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        );
      })}
    </div>
  );
}

export default OwnerReservationCardList;
