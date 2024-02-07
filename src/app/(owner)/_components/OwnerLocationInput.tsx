import { IconMarkerGray } from '@/public/svgs';
import React from 'react';

interface Props {
  setAddress: (address: string) => void;
}

function OwnerLocationInput({ setAddress }: Props) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex-center absolute top-25pxr z-50 h-80pxr w-600pxr overflow-hidden rounded-full bg-white drop-shadow-[0px_15px_15px_rgba(0,0,0,0.25)]'
    >
      <IconMarkerGray />
      <input
        placeholder='주소를 입력하세요.'
        className='ml-25pxr h-60pxr w-475pxr text-18pxr font-semibold focus:outline-none'
        onChange={(e) => setAddress(e.target.value)}
      />
    </form>
  );
}

export default OwnerLocationInput;
