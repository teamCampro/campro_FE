'use client';
import { IconExitX } from '@/public/svgs';
import React, { ReactNode } from 'react';

interface Props {
  onCloseClick: () => void;
  children: ReactNode;
}

function OwnerModalWrapper({ onCloseClick, children }: Props) {
  return (
    <div className='h-708pxr w-688pxr overflow-hidden rounded-2xl border border-black'>
      <div className='flex-center relative h-58pxr w-full bg-black'>
        <span className='text-24pxr font-bold text-white'>예약 상세 정보</span>
        <button onClick={onCloseClick}>
          <IconExitX className='absolute right-16pxr top-16pxr' />
        </button>
      </div>
      <div className='h-650pxr w-688pxr overflow-y-scroll bg-white px-40pxr pb-32pxr pt-24pxr'>
        {children}
      </div>
    </div>
  );
}

export default OwnerModalWrapper;
