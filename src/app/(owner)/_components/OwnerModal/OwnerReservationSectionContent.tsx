import React from 'react';

interface Props {
  label: string;
  content: string;
}

function OwnerReservationSectionContent({ label, content }: Props) {
  return (
    <div className='flex'>
      <span className='w-80pxr text-gray500 font-caption1-semibold'>
        {label}
      </span>
      <span className='font-body2-semibold'>{content}</span>
    </div>
  );
}

export default OwnerReservationSectionContent;
