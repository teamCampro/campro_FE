import React from 'react';
import { ReservationType } from './OwnerReservationCard';

interface Props {
  status: ReservationType;
}

function OwnerReservationStatus({ status }: Props) {
  const statusConfig = () => {
    switch (status) {
      case 'RESERVE_COMPLETE':
        return { className: 'text-primary100', buttonText: '예약 승인' };
      case 'RESERVE_WAITING':
        return { className: 'text-[#BA8600]', buttonText: '예약 대기' };
      case 'RESERVE_CANCEL':
        return { className: 'text-error', buttonText: '예약 거절' };
      default:
        return { className: '', buttonText: '' };
    }
  };
  const { className, buttonText } = statusConfig();
  const statusClassName = `font-bold text-16pxr ${className}`;

  return <div className={statusClassName}>{buttonText}</div>;
}

export default OwnerReservationStatus;
