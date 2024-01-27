'use client';

import DatePicker, { ReactDatePicker } from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';
import DateInput from './DateInput';
import { useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

interface Props {
  name: string;
}

function DatePickerInput({ name }: Props) {
  const { control } = useFormContext();
  const datePickerRef = useRef<ReactDatePicker>(null);
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
            monthsShown={2}
            calendarStartDay={1}
            customInput={
              <DateInput
                ref={field.ref}
                value={
                  field.value ? `${field.value[0]} - ${field.value[1]}` : ''
                }
                onClick={handleDateInputClick}
              />
            }
          >
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
          </DatePicker>
        );
      }}
    />
  );
}
export default DatePickerInput;
