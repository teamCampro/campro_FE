'use client';
import { useEffect, useState } from 'react';

export type GroundType = '파쇄석' | '잔디' | '흙' | '데크' | '';
export type PeriodUnitType = '매월' | '매일' | '';

interface OpenPeriodType {
  unit: PeriodUnitType;
  day: number;
  time: string;
  period: number;
}

function useTogglePopover() {
  const [openPeriod, setOpenPeriod] = useState<OpenPeriodType>({
    unit: '매월',
    day: 1,
    time: '00:00',
    period: 1,
  });
  const [groundType, setGroundType] = useState<GroundType>('');
  const [date, setDate] = useState<Date | null>(
    new Date('Tue Feb 20 2024 00:00:00 GMT+0900')
  );
  const [formmatedDate, setFormmatedDate] = useState<string>('00:00');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClickPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleChangeDatePicker = (date: Date | null) => {
    if (date !== null) {
      const extractedDate =
        String(date.getHours()).padStart(2, '0') +
        ':' +
        String(date.getMinutes()).padStart(2, '0');
      setDate(date);
      setFormmatedDate(extractedDate);
      setOpenPeriod((prev) => ({ ...prev, time: extractedDate }));
      handleClickPopover();
    }
  };

  const handleChangeGroundType = (ground: GroundType) => {
    setGroundType(ground);
    setIsPopoverOpen(false);
  };

  const handleChangePeriodUnit = (periodUnit: PeriodUnitType) => {
    setOpenPeriod((prev) => ({ ...prev, unit: periodUnit }));
    setIsPopoverOpen(false);
  };

  const handleChangePeriodDays = (periodDay: number) => {
    setOpenPeriod((prev) => ({ ...prev, day: periodDay }));
    setIsPopoverOpen(false);
  };

  const handleChangePeriod = (period: number) => {
    setOpenPeriod((prev) => ({ ...prev, period }));
    setIsPopoverOpen(false);
  };

  const setPopoverOpen = (boolean: boolean) => {
    setIsPopoverOpen(boolean);
  };

  return {
    isPopoverOpen,
    handleClickPopover,
    date,
    handleChangeDatePicker,
    formmatedDate,
    setPopoverOpen,
    groundType,
    handleChangeGroundType,
    handleChangePeriodUnit,
    handleChangePeriodDays,
    handleChangePeriod,
    openPeriod,
  };
}

export default useTogglePopover;
