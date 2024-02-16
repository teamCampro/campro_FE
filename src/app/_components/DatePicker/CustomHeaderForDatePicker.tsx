'use client';

import { IconArrowLeftNon, IconArrowRightNon } from '@/public/svgs';
import { getMonth, getYear } from 'date-fns';

const MONTHS = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

interface Props {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

function CustomHeaderForDatePicker({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: Props) {
  return (
    <div className='flex-center w-full flex-col'>
      <div className='border-bg-gray300 w-full border-b px-20pxr py-16pxr font-body2-semibold'>
        일정
      </div>
      <div className='flex-center m-10pxr w-full max-w-335pxr justify-between px-20pxr'>
        <button
          type='button'
          className={`${prevMonthButtonDisabled ? 'invisible' : ''}`}
          disabled={prevMonthButtonDisabled}
        >
          <IconArrowLeftNon onClick={decreaseMonth} />
        </button>
        <div className='font-title3-semibold'>{`${getYear(date)} ${MONTHS[getMonth(date)]}`}</div>
        <button type='button'>
          <IconArrowRightNon
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          />
        </button>
      </div>
    </div>
  );
}

export default CustomHeaderForDatePicker;
