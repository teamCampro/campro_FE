import {
  IconBed,
  IconCampFire,
  IconGrill,
  IconRadiator,
  IconToothbrushPaste,
} from '@/public/svgs';
import React from 'react';

interface Props {
  quantity: number;
  optionName: string;
}

function OwnerReservationAdditionalOptionCard({ quantity, optionName }: Props) {
  const optionMap = [
    { name: '장작', icon: <IconCampFire /> },
    { name: '숯불', icon: <IconGrill /> },
    { name: '장판', icon: <IconRadiator /> },
    { name: '이불', icon: <IconBed /> },
    { name: '욕실', icon: <IconToothbrushPaste /> },
  ];

  const filteredOption = optionMap.find((option) =>
    optionName.includes(option.name),
  );

  const icon = filteredOption ? filteredOption.icon : <IconCampFire />;

  return (
    <div className='flex-center h-105pxr w-108pxr flex-col gap-6pxr rounded-2xl border border-gray500 bg-white p-10pxr shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
      {icon}
      <span className='text-12pxr font-semibold text-gray500'>x{quantity}</span>
      <span className='font-caption2-semibold'>{optionName}</span>
    </div>
  );
}

export default OwnerReservationAdditionalOptionCard;
