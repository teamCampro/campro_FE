import React from 'react';
import OwnerButton from './OwnerButton';
import Image from 'next/image';
import OwnerReservationStatus from './OwnerReservationStatus';
import OwnerCheckInCheckOut from './OwnerCheckInCheckOut';

export type ReservationType = 'accepted' | 'rejected' | 'pending';

interface Props {
  imageUrl: string;
  type: ReservationType;
  site: string;
  siteArea: string;
  checkIn: string;
  checkOut: string;
  clientName: string;
}

function OwnerReservationCard({
  imageUrl,
  type,
  site,
  siteArea,
  checkIn,
  checkOut,
  clientName,
}: Props) {
  const isDisabled = () => {
    switch (type) {
      case 'accepted':
        return true;

      case 'rejected':
        return true;

      case 'pending':
        return false;
    }
  };

  return (
    <div className='flex h-244pxr w-526pxr flex-col gap-20pxr rounded-lg border border-[#E1E1E1] p-24pxr'>
      <div className='flex gap-24pxr'>
        <div className='relative h-140pxr w-140pxr'>
          <Image
            src={imageUrl}
            alt='객실 이미지'
            fill
            className='rounded-2xl object-cover'
            priority
            sizes='140px'
          />
        </div>
        <div className='flex gap-8pxr'>
          <div className='flex flex-col'>
            <div className='mb-10pxr'>
              <OwnerReservationStatus status={type} />
            </div>
            <span className='mb-8pxr text-24pxr font-bold leading-6 text-gray800'>
              {clientName}
            </span>
            <span className='mb-12pxr font-body2-medium'>
              {siteArea} | {site}
            </span>
            <div className='flex items-end gap-16pxr'>
              <OwnerCheckInCheckOut type='checkIn' date={checkIn} />
              <span className='h-32pxr text-gray600 font-title3-bold'>-</span>
              <OwnerCheckInCheckOut type='checkOut' date={checkOut} />
            </div>
          </div>
          <div className='flex items-start'>
            <OwnerButton.Reservation>예약 상세</OwnerButton.Reservation>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <OwnerButton.Reservation
          size='large'
          type='accept'
          isDisabled={isDisabled()}
        >
          수락
        </OwnerButton.Reservation>
        <OwnerButton.Reservation
          size='large'
          type='reject'
          isDisabled={isDisabled()}
        >
          취소
        </OwnerButton.Reservation>
      </div>
    </div>
  );
}

export default OwnerReservationCard;
