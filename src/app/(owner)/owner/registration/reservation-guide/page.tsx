'use client';
import React, { FocusEvent, useRef } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerInputForm from '../../../_components/OwnerInput/OwnerInputForm';
import OwnerInput from '../../../_components/OwnerInput/OwnerInput';
import OwnerButton from '../../../_components/OwnerButton';
import useTogglePopover from '../../../_hooks/useTogglePopover';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../_styles/timePicker.css';
import vi from 'date-fns/locale/vi';

registerLocale('vi', vi);

function ReservationGuidePage() {
  const mannerTimeStartRef = useRef<null | DatePicker>(null);
  const mannerTimeEndRef = useRef<null | DatePicker>(null);
  const nextReservationRef = useRef<null | DatePicker>(null);
  const {
    isPopoverOpen: isMannerTimeStartPopoverOpen,
    formmatedDate: mannerTimeStartFormmatedDate,
    date: mannerTimeStartDate,
    handleClickPopover: handleClickMannerTimeStart,
    handleChangeDatePicker: handleChangeMannerTimeStartDatePicker,
    setPopoverOpen: setMannerTimeStartPopoverOpen,
  } = useTogglePopover();
  const {
    isPopoverOpen: isMannerTimeEndPopoverOpen,
    formmatedDate: mannerTimeEndFormmatedDate,
    date: mannerTimeEndDate,
    handleClickPopover: handleClickMannerTimeEnd,
    handleChangeDatePicker: handleChangeMannerTimeEndDatePicker,
    setPopoverOpen: setMannerTimeEndPopoverOpen,
  } = useTogglePopover();
  const {
    isPopoverOpen: isNextReservationPopoverOpen,
    date: nextReservationDate,
    formmatedFullDate: nextReservationFormmatedDate,
    handleClickPopover: handleClickNextReservation,
    handleChangeDatePicker: handleChangeNextReservationDatePicker,
    setPopoverOpen: setNextReservationPopoverOpen,
  } = useTogglePopover();

  const handleMannerTimeStartBlur = (
    e: FocusEvent<HTMLInputElement, Element>,
  ) => {
    if (!mannerTimeStartRef.current) return;

    const timePickerEl = document.querySelector(
      '.react-datepicker__time-container',
    );

    if (timePickerEl && timePickerEl.contains(e.relatedTarget as Node)) {
      return;
    }

    setMannerTimeStartPopoverOpen(false);
  };

  const handleMannerTimeEndBlur = (
    e: FocusEvent<HTMLInputElement, Element>,
  ) => {
    if (!mannerTimeEndRef.current) return;

    const timePickerEl = document.querySelector(
      '.react-datepicker__time-container',
    );

    if (timePickerEl && timePickerEl.contains(e.relatedTarget as Node)) {
      return;
    }

    setMannerTimeEndPopoverOpen(false);
  };

  const handleNextReservationBlur = (
    e: FocusEvent<HTMLInputElement, Element>,
  ) => {
    if (!nextReservationRef.current) return;

    const datePickerEl = document.querySelector('.react-datepicker');

    if (datePickerEl && datePickerEl.contains(e.relatedTarget as Node)) {
      return;
    }

    setNextReservationPopoverOpen(false);
  };
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col gap-120pxr'>
        <OwnerTitle>예약할 수 있는 날짜와 매너타임을 알려주세요</OwnerTitle>
        <OwnerInputForm>
          <div className='flex items-center justify-between gap-15pxr'>
            <OwnerInput
              inputType='text'
              inputName='매너 타임 시작'
              onChange={() => console.log('changed')}
              value={mannerTimeStartFormmatedDate}
              type='small'
              onFocus={() => {
                setMannerTimeStartPopoverOpen(true);
              }}
              onBlur={(e) => {
                handleMannerTimeStartBlur(e);
              }}
            >
              <OwnerButton.Popover
                isPopoverOpen={isMannerTimeStartPopoverOpen}
                handleClickPopover={handleClickMannerTimeStart}
              />
              {isMannerTimeStartPopoverOpen && (
                <div className='absolute right-0pxr top-80pxr z-50'>
                  <DatePicker
                    ref={mannerTimeStartRef}
                    inline
                    selected={mannerTimeStartDate}
                    onChange={(date) =>
                      handleChangeMannerTimeStartDatePicker(date)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat='h:mm aaaa'
                    locale='vi'
                  />
                </div>
              )}
            </OwnerInput>
            <span className='mt-38pxr text-20pxr font-bold text-gray500'>
              -
            </span>
            <OwnerInput
              inputType='text'
              inputName='매너 타임 끝'
              onChange={() => console.log('changed')}
              value={mannerTimeEndFormmatedDate}
              type='small'
              onFocus={() => setMannerTimeEndPopoverOpen(true)}
              onBlur={(e) => handleMannerTimeEndBlur(e)}
            >
              <OwnerButton.Popover
                isPopoverOpen={isMannerTimeEndPopoverOpen}
                handleClickPopover={handleClickMannerTimeEnd}
              />
              {isMannerTimeEndPopoverOpen && (
                <div className='absolute right-0pxr top-80pxr z-50'>
                  <DatePicker
                    ref={mannerTimeEndRef}
                    inline
                    selected={mannerTimeEndDate}
                    onChange={(date) =>
                      handleChangeMannerTimeEndDatePicker(date)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    dateFormat='h:mm aaaa'
                    locale='vi'
                  />
                </div>
              )}
            </OwnerInput>
          </div>
          <OwnerInput
            inputType='text'
            inputName='다음 예약 오픈일'
            onChange={() => console.log('changed')}
            value={nextReservationFormmatedDate}
            onFocus={() => setNextReservationPopoverOpen(true)}
            onBlur={(e) => handleNextReservationBlur(e)}
          >
            <OwnerButton.Popover
              isPopoverOpen={isNextReservationPopoverOpen}
              handleClickPopover={handleClickNextReservation}
            />
            {isNextReservationPopoverOpen && (
              <div className='absolute top-80pxr z-50'>
                <DatePicker
                  ref={nextReservationRef}
                  inline
                  selected={nextReservationDate}
                  onChange={(date) =>
                    handleChangeNextReservationDatePicker(date)
                  }
                  showTimeSelect
                  dateFormat='yyyy-MM-dd'
                  timeIntervals={30}
                  locale='en'
                />
              </div>
            )}
          </OwnerInput>
        </OwnerInputForm>
      </div>
    </div>
  );
}

export default ReservationGuidePage;
