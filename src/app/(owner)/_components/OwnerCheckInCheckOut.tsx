import React from 'react';

interface Props {
  type: 'checkIn' | 'checkOut';
  date: string;
}

function OwnerCheckInCheckOut({ type, date }: Props) {
  const isCheckinType = type === 'checkIn';
  return (
    <div className='flex flex-col'>
      <span className='text-gray500 font-caption2-semibold'>
        {isCheckinType ? '입실' : '퇴실'}
      </span>
      <span className='text-gray800 font-body1-bold'>{date}</span>
    </div>
  );
}

export default OwnerCheckInCheckOut;
