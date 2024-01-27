'use client';

import DatePicker, { ReactDatePicker } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import DateInput from './DateInput';
import { useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import useMediaQueries from '@/hooks/useMediaQueries';
import { useEffect } from 'react';
import { getMonth, getYear } from 'date-fns';
import { IconArrowLeftNon, IconArrowRightNon } from '@/public/svgs';
import { Button } from '..';

interface Props {
  name: string;
}

const months = [
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

function DatePickerInput({ name }: Props) {
  const control = useFormContext().control;

  const datePickerRef = useRef<ReactDatePicker>(null);
  const isTablet =
    typeof window !== 'undefined'
      ? useMediaQueries({ breakpoint: 1199 })?.mediaQuery.matches
      : false;

  const isMobile =
    typeof window !== 'undefined'
      ? useMediaQueries({ breakpoint: 767 })?.mediaQuery.matches
      : false;

  useEffect(() => {
    const datePickerInputContainer = document.querySelector(
      '.react-datepicker__input-container',
    );

    if (datePickerInputContainer) {
      const parent = datePickerInputContainer.parentNode as Element;

      if (isMobile) {
        parent?.classList?.add('wrapper');
      } else {
        parent?.classList?.remove('wrapper');
      }
    }
  }, [isMobile]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const handleDateInputClick = () => {
          if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
          }
        };

        const getDayClassName = (date: Date) => {
          return date.getDay() === 0 ? 'sunday' : '';
        };
        const handleButtonClick = (days: number) => {
          const startDate = Array.isArray(field.value)
            ? field.value[0]
            : new Date();
          const endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + days);
          field.onChange([startDate, endDate]);
        };

        return (
          <DatePicker
            dayClassName={getDayClassName}
            ref={datePickerRef}
            dateFormat='MM.dd (eee)'
            dateFormatCalendar='yyyy MM월'
            selectsRange={true}
            locale={ko}
            minDate={new Date()}
            startDate={Array.isArray(field.value) ? field.value[0] : null}
            endDate={Array.isArray(field.value) ? field.value[1] : null}
            onChange={field.onChange}
            monthsShown={isTablet ? 1 : 2}
            calendarStartDay={1}
            withPortal={isMobile}
            customInput={
              <DateInput
                ref={field.ref}
                value={
                  field.value ? `${field.value[0]} - ${field.value[1]}` : ''
                }
                onClick={handleDateInputClick}
              />
            }
            renderCustomHeader={
              !isMobile
                ? undefined
                : ({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className='px-20pxr'>
                      <div className='border-bg-gray300 w-full rounded-t-[24px] border-b px-20pxr py-16pxr font-body2-semibold'>
                        일정
                      </div>
                      <div className='flex-center m-10pxr w-335pxr justify-between px-20pxr'>
                        <IconArrowLeftNon
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                        />

                        <div className='font-title3-semibold'>{`${getYear(date)} ${months[getMonth(date)]}`}</div>
                        <IconArrowRightNon
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                        />
                      </div>
                    </div>
                  )
            }
          >
            {!isMobile ? (
              <>
                <button
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(0)}
                >
                  당일치기
                </button>
                <button
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(1)}
                >
                  1박 2일
                </button>
                <button
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(2)}
                >
                  2박 3일
                </button>
                <button
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(3)}
                >
                  3박 4일
                </button>
              </>
            ) : (
              <div className='flex-center flex w-full bg-white   '>
                <Button.Round
                  size='md'
                  custom='bg-primary100 text-white max-w-[335px] flex w-full'
                >
                  적용
                </Button.Round>
              </div>
            )}
          </DatePicker>
        );
      }}
    />
  );
}
export default DatePickerInput;
