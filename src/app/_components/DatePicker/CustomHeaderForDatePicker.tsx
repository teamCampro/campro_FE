'use client';

import { getMonth, getYear } from 'date-fns';
import { IconArrowRightNon, IconArrowLeftNon } from '@/public/svgs';

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
  isMobile: boolean;
}

function CustomHeaderForDatePicker({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  isMobile,
}: Props) {
  if (!isMobile) {
    return null;
  }

  return (
    <div className='flex-center w-full flex-col'>
      <div className='border-bg-gray300 w-full border-b px-20pxr py-16pxr font-body2-semibold'>
        일정
      </div>
      <div className='flex-center m-10pxr w-full max-w-335pxr justify-between px-20pxr'>
        <IconArrowLeftNon
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        />

        <div className='font-title3-semibold'>{`${getYear(date)} ${MONTHS[getMonth(date)]}`}</div>
        <IconArrowRightNon
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        />
      </div>
    </div>
  );
}

export default CustomHeaderForDatePicker;
