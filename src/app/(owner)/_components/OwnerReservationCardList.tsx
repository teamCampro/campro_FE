'use client';

import React from 'react';
import OwnerReservationCard from './OwnerReservationCard';
import { OwnerReservation } from '../../_data/owner/getReservationList';

interface Props {
  reservationData: OwnerReservation[] | undefined;
}

function OwnerReservationCardList({ reservationData }: Props) {
  return (
    <div className='grid w-1100pxr grid-cols-2 place-items-center gap-x-45pxr gap-y-30pxr mobile:grid-cols-1 tablet:grid-cols-1'>
      {reservationData &&
        reservationData.map((reservation, index) => {
          const {
            campingZoneImage,
            status,
            siteName,
            userName,
            stayStartAt,
            stayEndAt,
            id,
          } = reservation;
          return (
            <OwnerReservationCard
              key={index}
              imageUrl={campingZoneImage}
              type={status}
              site={siteName}
              clientName={userName}
              checkIn={stayStartAt}
              checkOut={stayEndAt}
              reservationId={id}
            />
          );
        })}
    </div>
  );
}

export default OwnerReservationCardList;
