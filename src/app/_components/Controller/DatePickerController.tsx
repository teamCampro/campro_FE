'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { ko } from 'date-fns/locale';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import DatePicker, { ReactDatePicker } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, Field, useFormContext } from 'react-hook-form';
import {
  Button,
  CustomHeaderForDatePicker,
  ButtonSetForDatePicker,
  DateInputView,
} from '..';
import { ControllerRenderProps } from 'react-hook-form';
import getFormattedDate from '../../_utils/getFormattedDate';

interface Props {
  name: string;
  checkIn?: string;
  checkOut?: string;
  onRenderButton?: () => void;
}

function DatePickerController({
  name,
  checkIn: initCheckIn,
  checkOut: initCheckOut,
  onRenderButton,
}: Props) {
  const control = useFormContext().control;
  const fieldRef = useRef<ControllerRenderProps | null>(null);
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [tempDates, setTempDates] = useState<Date[]>([]);
  const [checkIn, setCheckIn] = useState(initCheckIn);
  const [checkOut, setCheckOut] = useState(initCheckOut);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
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

  const setFieldRef = useCallback((field: ControllerRenderProps) => {
    fieldRef.current = field;
  }, []);

  useEffect(() => {
    if (checkIn && checkOut && fieldRef.current) {
      const dates = [new Date(checkIn), new Date(checkOut)];
      fieldRef.current.onChange(dates);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    if (isMobile && isDatePickerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobile, isDatePickerOpen]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        setFieldRef(field);
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
            onCalendarOpen={() => setDatePickerOpen(true)}
            onCalendarClose={() => setDatePickerOpen(false)}
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
            onInputClick={onRenderButton}
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
              isMobile
                ? (props) => <CustomHeaderForDatePicker {...props} />
                : undefined
            }
          >
            {!isMobile ? (
              <ButtonSetForDatePicker handleButtonClick={handleButtonClick} />
            ) : (
              <div className='flex-center flex w-full bg-white'>
                <Button.Round
                  type='button'
                  size='md'
                  custom='bg-primary100 text-white max-w-335pxr flex w-full'
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
