'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowLeftNon, IconArrowRightNon } from '@/public/svgs';
import { DateInputView } from '@/src/app/_components';
import { getMonth, getYear } from 'date-fns';
import { ko } from 'date-fns/locale';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker, { ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import { Button } from '..';

interface Props {
  name: string;
  checkIn?: string;
  checkOut?: string;
}

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

function DatePickerController({
  name,
  checkIn: initCheckIn,
  checkOut: initCheckOut,
}: Props) {
  const control = useFormContext().control;

  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [tempDates, setTempDates] = useState<Date[]>([]);
  const [checkIn, setCheckIn] = useState(initCheckIn);
  const [checkOut, setCheckOut] = useState(initCheckOut);
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

        const getDayClassName = (date: Date) => {
          return date.getDay() === 0 ? 'sunday' : '';
        };
        const handleButtonClick = (days: number) => {
          let startDate: Date | undefined = Array.isArray(tempDates)
            ? tempDates[0]
            : undefined;

          if (!startDate) {
            startDate = new Date();
          }

          const endDate = new Date(startDate.getTime());
          endDate.setDate(startDate.getDate() + days);

          setTempDates([startDate, endDate]);

          if (!isMobile) {
            setSelectedDates([startDate, endDate]);
            field.onChange([startDate, endDate]);
          }
        };

        const getFormattedDate = (selectedDates: Date[]) => {
          const formatDate = (date: Date) =>
            date
              ? date.toLocaleDateString('ko-KR', {
                  month: '2-digit',
                  day: '2-digit',
                  weekday: 'short',
                })
              : '';

          let value = '';
          if (selectedDates) {
            if (selectedDates[0] && selectedDates[1]) {
              value = `${formatDate(selectedDates[0])} - ${formatDate(selectedDates[1])}`;
            } else if (selectedDates[0]) {
              value = formatDate(selectedDates[0]);
            }
          }

          return value;
        };

        const handleDateChange = (
          dates: Date | [Date | null, Date | null] | null,
        ) => {
          if (checkIn && checkOut) {
            setCheckIn('');
            setCheckOut('');
          }
          if (Array.isArray(dates)) {
            setTempDates(dates as Date[]);

            if (!isMobile) {
              setSelectedDates(dates as Date[]);
              field.onChange(dates);
            }
          }
        };

        const handleApplyClick = (e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          setSelectedDates(tempDates);

          if (isMobile) {
            field.onChange(tempDates);
            if (datePickerRef.current) {
              datePickerRef.current.setOpen(false);
            }
          }
        };
        return (
          <DatePicker
            popperPlacement='bottom-start'
            enableTabLoop={false}
            shouldCloseOnSelect={isMobile ? false : true}
            dayClassName={getDayClassName}
            ref={datePickerRef}
            onChange={handleDateChange}
            dateFormat='MM.dd (eee)'
            dateFormatCalendar='yyyy MM월'
            selectsRange={true}
            locale={ko}
            minDate={new Date()}
            startDate={tempDates[0]}
            endDate={tempDates[1]}
            monthsShown={isTablet ? 1 : 2}
            calendarStartDay={1}
            value={
              checkIn && checkOut
                ? getFormattedDate([new Date(checkIn), new Date(checkOut)])
                : getFormattedDate(selectedDates)
            }
            withPortal={isMobile}
            customInput={
              <DateInputView
                ref={field.ref}
                onClick={handleDateInputClick}
                value=''
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

                        <div className='font-title3-semibold'>{`${getYear(date)} ${MONTHS[getMonth(date)]}`}</div>
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
                  onClick={handleApplyClick}
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
