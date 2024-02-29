'use client';
import React, { FocusEvent, useEffect, useRef } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerInputForm from '../../../_components/OwnerInput/OwnerInputForm';
import OwnerInput from '../../../_components/OwnerInput/OwnerInput';
import OwnerButton from '../../../_components/OwnerButton';
import useTogglePopover from '../../../_hooks/useTogglePopover';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../_styles/timePicker.css';
import vi from 'date-fns/locale/vi';
import { ownerInputBlurHandler } from '../../../_utils/OwnerInputBlurHandler';
import OwnerPeriodUnitPopover from '../../../_components/OwnerPeriodUnitPopover';
import OwnerPeriodDaysPopover from '../../../_components/OwnerPeriodDaysPopover';
import OwnerPeriodPopover from '../../../_components/OwnerPeriodPopover';

registerLocale('vi', vi);

function ReservationGuidePage() {
  const mannerTimeStartRef = useRef<DatePicker>(null);
  const mannerTimeEndRef = useRef<DatePicker>(null);
  const periodUnitRef = useRef<HTMLUListElement>(null);
  const periodDaysRef = useRef<HTMLUListElement>(null);
  const periodRef = useRef<HTMLUListElement>(null);
  const periodHoursRef = useRef<DatePicker>(null);
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
    handleClickPopover: handleClickPeriodUnit,
    setPopoverOpen: setPeriodUnitPopoverOpen,
    isPopoverOpen: isPeriodUnitPopoverOpen,
    openPeriod: openPeriodUnit,
    handleChangePeriodUnit,
  } = useTogglePopover();

  const {
    handleClickPopover: handleClickPeriodDays,
    setPopoverOpen: setPeriodDaysPopoverOpen,
    isPopoverOpen: isPeriodDaysPopoverOpen,
    handleChangePeriodDays,
    openPeriod: openPeriodDay,
  } = useTogglePopover();

  const {
    isPopoverOpen: isPeriodHoursPopoverOpen,
    date: periodHoursDate,
    handleClickPopover: handleClickPeriodHours,
    handleChangeDatePicker: handleChangePeriodHoursDatePicker,
    setPopoverOpen: setPeriodHoursPopoverOpen,
    openPeriod: openPeriodHours,
  } = useTogglePopover();

  const {
    handleClickPopover: handleClickPeriod,
    setPopoverOpen: setPeriodPopoverOpen,
    isPopoverOpen: isPeriodPopoverOpen,
    handleChangePeriod,
    openPeriod,
  } = useTogglePopover();

  const handleMannerTimeStartBlur = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    ownerInputBlurHandler({
      event,
      inputRef: mannerTimeStartRef,
      className: '.react-datepicker__time-container',
      setPopoverOpen: setMannerTimeStartPopoverOpen,
    });
  };

  const handleMannerTimeEndBlur = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    ownerInputBlurHandler({
      event,
      inputRef: mannerTimeEndRef,
      className: '.react-datepicker__time-container',
      setPopoverOpen: setMannerTimeEndPopoverOpen,
    });
  };

  const handlePeriodUnitBlur = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    ownerInputBlurHandler({
      event,
      inputRef: periodUnitRef,
      setPopoverOpen: setPeriodUnitPopoverOpen,
    });
  };

  const handlePeriodDaysBlur = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    ownerInputBlurHandler({
      event,
      inputRef: periodDaysRef,
      setPopoverOpen: setPeriodDaysPopoverOpen,
    });
  };

  const handlePeriodBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    ownerInputBlurHandler({
      event,
      inputRef: periodRef,
      setPopoverOpen: setPeriodPopoverOpen,
    });
  };

  const handlePeriodHoursBlur = (
    event: FocusEvent<HTMLInputElement, Element>,
  ) => {
    ownerInputBlurHandler({
      event,
      inputRef: periodHoursRef,
      className: '.react-datepicker__time-container',
      setPopoverOpen: setPeriodHoursPopoverOpen,
    });
  };

  useEffect(() => {
    const nextPeriod = (day: number) => {
      for (let month = 1; month <= 12; month++) {
        const checkNext = new Date(
          new Date().getFullYear(),
          month,
          0,
        ).getDate();

        if (checkNext < day) return false;
      }
      return true;
    };

    const next = nextPeriod(openPeriodDay.day);
    if (!next) {
    } else {
    }
  }, [openPeriodDay]);

  useEffect(() => {
    const childElement = document.querySelector('.react-datepicker');

    if (childElement) {
      const parentElement = childElement.parentNode as HTMLDivElement;
      parentElement.style.width = '100%';
    }
  }, [
    isPeriodHoursPopoverOpen,
    isMannerTimeStartPopoverOpen,
    isMannerTimeEndPopoverOpen,
  ]);

  useEffect(() => {
    localStorage.setItem('mannerTimeStart', mannerTimeStartFormmatedDate);
  }, [mannerTimeStartFormmatedDate]);

  useEffect(() => {
    localStorage.setItem('mannerTimeEnd', mannerTimeEndFormmatedDate);
  }, [mannerTimeEndFormmatedDate]);

  useEffect(() => {
    localStorage.setItem(
      'openTime',
      JSON.stringify(openPeriod.period) + '개월',
    );
  }, [openPeriod]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mannerTimeStart = localStorage.getItem('mannerTimeStart');
    const mannerTimeEnd = localStorage.getItem('mannerTimeEnd');
  }, []);

  return (
    <div className='flex h-screen flex-col items-center'>
      <div className='flex flex-col items-center gap-120pxr'>
        <OwnerTitle>매너 타임과 오픈 주기를 알려주세요</OwnerTitle>
        <OwnerInputForm>
          <div className='flex flex-col gap-80pxr'>
            <div className='flex items-center gap-15pxr'>
              <OwnerInput
                inputType='text'
                inputName='매너 타임 시작'
                value={mannerTimeStartFormmatedDate}
                type='flexible'
                onFocus={() => {
                  setMannerTimeStartPopoverOpen(true);
                }}
                onBlur={(e) => {
                  handleMannerTimeStartBlur(e);
                }}
                readOnly
              >
                <OwnerButton.Popover
                  isPopoverOpen={isMannerTimeStartPopoverOpen}
                  handleClickPopover={handleClickMannerTimeStart}
                />
                {isMannerTimeStartPopoverOpen && (
                  <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                    <DatePicker
                      ref={mannerTimeStartRef}
                      inline
                      selected={mannerTimeStartDate}
                      onChange={(date) => {
                        handleChangeMannerTimeStartDatePicker(date);
                      }}
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
                type='flexible'
                onFocus={() => setMannerTimeEndPopoverOpen(true)}
                onBlur={(e) => handleMannerTimeEndBlur(e)}
                readOnly
              >
                <OwnerButton.Popover
                  isPopoverOpen={isMannerTimeEndPopoverOpen}
                  handleClickPopover={handleClickMannerTimeEnd}
                />
                {isMannerTimeEndPopoverOpen && (
                  <div className='absolute right-0pxr top-80pxr z-50 w-full'>
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
            <div className='flex flex-col gap-18pxr'>
              <div className='flex gap-39pxr'>
                <OwnerInput
                  type='flexible'
                  inputName='매월/매일'
                  onChange={() => console.log('changed!')}
                  value={openPeriodUnit.unit}
                  onFocus={() => {
                    setPeriodUnitPopoverOpen(true);
                  }}
                  onBlur={(e) => handlePeriodUnitBlur(e)}
                  readOnly
                >
                  <OwnerButton.Popover
                    isPopoverOpen={isPeriodUnitPopoverOpen}
                    handleClickPopover={handleClickPeriodUnit}
                  />
                  <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                    {isPeriodUnitPopoverOpen && (
                      <OwnerPeriodUnitPopover
                        periodUnitRef={periodUnitRef}
                        selectedPeriodUnit={openPeriodUnit.unit}
                        onClick={handleChangePeriodUnit}
                      />
                    )}
                  </div>
                </OwnerInput>

                <OwnerInput
                  type='flexible'
                  inputName='예약 가능 기간'
                  onChange={() => console.log('changed!')}
                  readOnly
                  value={`${openPeriod.period}개월`}
                  onFocus={() => setPeriodPopoverOpen(true)}
                  onBlur={(e) => handlePeriodBlur(e)}
                >
                  <OwnerButton.Popover
                    isPopoverOpen={isPeriodPopoverOpen}
                    handleClickPopover={handleClickPeriod}
                  />
                  <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                    {isPeriodPopoverOpen && (
                      <OwnerPeriodPopover
                        periodRef={periodRef}
                        onClick={handleChangePeriod}
                        selectedPeriod={openPeriod.period}
                      />
                    )}
                  </div>
                </OwnerInput>
              </div>
              <div className='flex gap-39pxr'>
                {openPeriodUnit.unit !== '매일' && (
                  <OwnerInput
                    type='flexible'
                    inputName='일'
                    onChange={() => console.log('changed!')}
                    value={openPeriodDay.day}
                    readOnly
                    onFocus={() => setPeriodDaysPopoverOpen(true)}
                    onBlur={(e) => handlePeriodDaysBlur(e)}
                  >
                    <OwnerButton.Popover
                      isPopoverOpen={isPeriodDaysPopoverOpen}
                      handleClickPopover={handleClickPeriodDays}
                    />
                    <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                      {isPeriodDaysPopoverOpen && (
                        <OwnerPeriodDaysPopover
                          periodDaysRef={periodDaysRef}
                          selectedPeriodDay={openPeriodDay.day}
                          onClick={handleChangePeriodDays}
                        />
                      )}
                    </div>
                  </OwnerInput>
                )}

                <OwnerInput
                  inputType='text'
                  inputName='시간'
                  onChange={() => console.log('changed')}
                  value={openPeriodHours.time}
                  type='flexible'
                  onFocus={() => {
                    setPeriodHoursPopoverOpen(true);
                  }}
                  onBlur={(e) => {
                    handlePeriodHoursBlur(e);
                  }}
                  readOnly
                >
                  <OwnerButton.Popover
                    isPopoverOpen={isPeriodHoursPopoverOpen}
                    handleClickPopover={handleClickPeriodHours}
                  />
                  {isPeriodHoursPopoverOpen && (
                    <div className='absolute right-0pxr top-80pxr z-50 w-full'>
                      <DatePicker
                        ref={periodHoursRef}
                        inline
                        selected={periodHoursDate}
                        onChange={(date) =>
                          handleChangePeriodHoursDatePicker(date)
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
            </div>
          </div>
        </OwnerInputForm>
      </div>
    </div>
  );
}

export default ReservationGuidePage;
