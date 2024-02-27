import React, { RefObject } from 'react';
import { OWNER_PERIOD } from '../_constants/ownerPeriodUnit';
interface Props {
  periodRef: RefObject<HTMLUListElement>;
  onClick: (period: number) => void;
  selectedPeriod: number;
}

function OwnerPeriodPopover({ periodRef, onClick, selectedPeriod }: Props) {
  const isSelectedPeriod = (period: number) =>
    selectedPeriod === period
      ? 'bg-black text-white hover:bg-black'
      : 'bg-white hover:bg-gray100';
  return (
    <div className='h-226pxr w-full overflow-hidden rounded-2xl border-2 border-gray300 bg-white '>
      <ul
        ref={periodRef}
        className='flex h-full flex-col items-center overflow-y-scroll '
      >
        {OWNER_PERIOD.map((period, index) => (
          <li key={index} className='w-full'>
            <button
              className={`w-full py-10pxr text-center text-16pxr ${isSelectedPeriod(period)}`}
              onClick={() => onClick(period)}
            >
              {period}개월
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerPeriodPopover;
