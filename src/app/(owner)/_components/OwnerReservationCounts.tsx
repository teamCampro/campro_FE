import React from 'react';
import OwnerReservationStatus from './OwnerReservationStatus';

interface Props {
  total: number;
  pending: number;
  rejected: number;
  accepted: number;
}

function OwnerReservationCounts({ total, pending, rejected, accepted }: Props) {
  return (
    <div className='w-101pxr'>
      <div className='flex justify-between'>
        <p className='text-16pxr font-bold'>모든 예약</p>
        <p className='text-16pxr font-bold'>{total}개</p>
      </div>
      <div className='flex justify-between'>
        <OwnerReservationStatus status='pending' />
        <p className='text-16pxr font-bold'>{pending}개</p>
      </div>
      <div className='flex justify-between'>
        <OwnerReservationStatus status='accepted' />
        <p className='text-16pxr font-bold'>{accepted}개</p>
      </div>
      <div className='flex justify-between'>
        <OwnerReservationStatus status='rejected' />
        <p className='text-16pxr font-bold'>{rejected}개</p>
      </div>
    </div>
  );
}

export default OwnerReservationCounts;
