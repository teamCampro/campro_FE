import React, { RefObject } from 'react';
import { OWNER_PERIOD_DAYS } from '../_constants/ownerPeriodUnit';
interface Props {
  periodDaysRef: RefObject<HTMLUListElement>;
  selectedPeriodDay: number;
  onClick: (periodDays: number) => void;
}

function OwnerPeriodDaysPopover({
  periodDaysRef,
  selectedPeriodDay,
  onClick,
}: Props) {
  const isSelectedPeriodDay = (periodDay: number) =>
    selectedPeriodDay === periodDay
      ? 'bg-black text-white hover:bg-black'
      : 'bg-white hover:bg-gray100';

  return (
    <div className='h-226pxr w-full overflow-hidden rounded-2xl border-2 border-gray300 bg-white'>
      <ul
        ref={periodDaysRef}
        className='flex h-full flex-col items-center overflow-y-scroll'
      >
        {OWNER_PERIOD_DAYS.map((day, index) => (
          <li key={index} className='w-full'>
            <button
              className={`w-full py-10pxr text-center text-16pxr ${isSelectedPeriodDay(day)}`}
              onClick={() => onClick(day)}
            >
              {day}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OwnerPeriodDaysPopover;
