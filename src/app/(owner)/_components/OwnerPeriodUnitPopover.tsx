import React, { RefObject } from 'react';
import { OWNER_PERIOD_UNIT } from '../_constants/ownerPeriodUnit';
import { PeriodUnitType } from '../_hooks/useTogglePopover';

interface Props {
  periodUnitRef: RefObject<HTMLUListElement>;
  selectedPeriodUnit: PeriodUnitType;
  onClick: (periodUnit: PeriodUnitType) => void;
}

function OwnerPeriodUnitPopover({
  periodUnitRef,
  selectedPeriodUnit,
  onClick,
}: Props) {
  const isSelectedPeriodUnit = (periodUnit: PeriodUnitType) =>
    selectedPeriodUnit === periodUnit
      ? 'bg-black text-white hover:bg-black'
      : 'bg-white hover:bg-gray100';
  return (
    <ul
      ref={periodUnitRef}
      className='flex w-full flex-col items-center overflow-hidden rounded-2xl border-2 border-gray300 bg-white'
    >
      {OWNER_PERIOD_UNIT.map((unit, index) => (
        <li key={index} className='w-full'>
          <button
            className={`w-full py-10pxr text-center text-16pxr ${isSelectedPeriodUnit(unit)}`}
            onClick={() => onClick(unit)}
          >
            {unit}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default OwnerPeriodUnitPopover;
