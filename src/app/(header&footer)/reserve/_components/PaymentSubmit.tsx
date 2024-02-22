'use client';

import Button from '@/components/Button';
import { useAppSelector } from '@/hooks/redux';
import { useState } from 'react';
import ModalForPaymentSubmit from './ModalForPaymentSubmit';
import { useSearchParams } from 'next/navigation';
interface PaymentSubmitProps {
  custom: string;
  params: { campId: string; siteId: string };
}
function PaymentSubmit({ custom, params }: PaymentSubmitProps) {
  const isAllChecked = useAppSelector((state) => state.isAllChecked);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);

  const vehicle = useAppSelector((state) => state.vehicleNumber);
  const plusOption = useAppSelector((state) => state.plusOptionCount);
  const payment = useAppSelector((state) => state.totalPayment);
  const paymentMethod = useAppSelector((state) => state.paymentMethod);

  const searchParams = useSearchParams();

  const reqBody = {
    campingZoneId: Number(params.campId),
    campingZoneSiteId: Number(params.siteId),
    userId: '1',
    stayStartAt: searchParams.get('checkIn'),
    stayEndAt: searchParams.get('checkOut'),
    adult: Number(searchParams.get('adult')),
    child: Number(searchParams.get('child')),
    pet: Number(searchParams.get('pet')),
    paymentMethod: paymentMethod.method,
    totalPayment: payment.total,
    vehicle: JSON.stringify(vehicle),
    // plusOption,
  };

  return (
    <>
      <Button.Round
        onClick={() => {
          setIsOpenModal(true);
          console.log(reqBody);
        }}
        size='sm'
        custom={custom}
        disabled={!isAllChecked}
      >
        결제하기
      </Button.Round>
      {isOpenModal && <ModalForPaymentSubmit onClose={closeModal} />}
    </>
  );
}

export default PaymentSubmit;
