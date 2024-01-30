'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowLeftNon, IconArrowRightNon } from '@/public/svgs';
import { DateInputView } from '@/src/app/_components';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useRef } from 'react';
import DatePicker, { ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
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

function DatePickerController({ name }: Props) {
  const control = useFormContext().control;

  const datePickerRef = useRef<ReactDatePicker>(null);

  const tabletMediaQuery = useMediaQueries({ breakpoint: 1199 })?.mediaQuery
    .matches;
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isTablet = typeof window !== 'undefined' ? tabletMediaQuery : false;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;

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

        const closeDatePicker = () => {
          if (datePickerRef.current) {
            datePickerRef.current.setOpen(false);
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
            shouldCloseOnSelect={isMobile ? false : true}
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
              <DateInputView
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
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div className='flex-center w-full flex-col'>
                      <div className='border-bg-gray300 w-full border-b px-20pxr py-16pxr font-body2-semibold'>
                        일정
                      </div>
                      <div className='flex-center m-10pxr w-full max-w-335pxr justify-between px-20pxr'>
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
                  type='button'
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(0)}
                >
                  당일치기
                </button>
                <button
                  type='button'
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(1)}
                >
                  1박 2일
                </button>
                <button
                  type='button'
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(2)}
                >
                  2박 3일
                </button>
                <button
                  type='button'
                  className='buttonForDatePicker'
                  onClick={() => handleButtonClick(3)}
                >
                  3박 4일
                </button>
              </>
            ) : (
              <div className='flex-center flex w-full bg-white   '>
                <Button.Round
                  type='button'
                  size='md'
                  custom='bg-primary100 text-white max-w-[335px] flex w-full'
                  onClick={closeDatePicker}
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
export default DatePickerController;
