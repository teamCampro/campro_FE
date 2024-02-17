'use client';
import { useState } from 'react';

function useTogglePopover() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [formmatedDate, setFormmatedDate] = useState<string>('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClickPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleChangeDatePicker = (date: Date | null) => {
    if (date !== null) {
      const extractedDate =
        date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');
      setDate(date);
      setFormmatedDate(extractedDate);
      handleClickPopover();
    }
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
  };
}

export default useTogglePopover;
