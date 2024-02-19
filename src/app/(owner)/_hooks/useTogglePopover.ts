'use client';
import { useState } from 'react';

export type GroundType = '파쇄석' | '잔디' | '흙' | '데크' | '';

function useTogglePopover() {
  const [groundType, setGroundType] = useState<GroundType>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [formmatedDate, setFormmatedDate] = useState<string>('');
  const [formmatedFullDate, setFormmatedFullDate] = useState<string>('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClickPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleChangeDatePicker = (date: Date | null) => {
    if (date !== null) {
      const extractedDate =
        date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');
      const extreactedFullDate =
        date.getFullYear() +
        '.' +
        String(date.getMonth() + 1).padStart(2, '0') +
        '.' +
        String(date.getDate()).padStart(2, '0') +
        ` ` +
        date.getHours() +
        ':' +
        String(date.getMinutes()).padStart(2, '0');
      setDate(date);
      setFormmatedDate(extractedDate);
      setFormmatedFullDate(extreactedFullDate);
      handleClickPopover();
    }
  };

  const handleChangeGroundType = (ground: GroundType) => {
    setGroundType(ground);
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
    formmatedFullDate,
  };
}

export default useTogglePopover;
