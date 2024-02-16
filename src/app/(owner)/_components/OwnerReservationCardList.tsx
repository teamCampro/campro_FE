'use client';

import React from 'react';
import OwnerReservationCard from './OwnerReservationCard';
import { ReservationData } from '../owner/reservation-check/page';

interface Props {
  reservationData: ReservationData[];
}

function OwnerReservationCardList({ reservationData }: Props) {
  return (
    <div className='grid w-1100pxr grid-cols-2 place-items-center gap-x-45pxr gap-y-30pxr mobile:grid-cols-1 tablet:grid-cols-1'>
      {reservationData.map((reservation, index) => {
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
