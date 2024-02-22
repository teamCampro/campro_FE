'use client';

import Button from '@/components/Button';
import { useAppSelector } from '@/hooks/redux';
import { useState, useEffect } from 'react';
import ModalForPaymentSubmit from './ModalForPaymentSubmit';
import { useSearchParams } from 'next/navigation';
import postReservationDetail from '@/src/app/_data/reserve/postReservationDetail';
import { useRouter } from 'next/navigation';
interface PaymentSubmitProps {
  custom: string;
  params: { campId: string; siteId: string };
}
function PaymentSubmit({ custom, params }: PaymentSubmitProps) {
  const isAllChecked = useAppSelector((state) => state.isAllChecked);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);
  const vehicle = useAppSelector((state) => state.vehicleNumber);
  // const plusOption = useAppSelector((state) => state.plusOptionCount);
  // const payment = useAppSelector((state) => state.totalPayment);
  const payMethod = useAppSelector((state) => state.paymentMethod);

  const searchParams = useSearchParams();
  const router = useRouter();

  const [userId, setUserId] = useState<number>(0);

  const reqBody = {
    campingZoneId: Number(params.campId),
    campingZoneSiteId: Number(params.siteId),
    userId,
    stayStartAt: searchParams.get('checkIn') || '',
    stayEndAt: searchParams.get('checkOut') || '',
    adult: Number(searchParams.get('adult')),
    child: Number(searchParams.get('child')),
    pet: Number(searchParams.get('pet')),
    payMethod: payMethod.method,
    carInfo: JSON.stringify(vehicle),
  };

  const submitReservationDetail = async () => {
    try {
      await postReservationDetail(reqBody);

      setIsOpenModal(true);
    } catch (error) {
      console.error('post 에러!!', error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId === null) {
        router.push('/signin');
      } else {
        setUserId(Number(storedUserId));
      }
    }
  }, []);

  return (
    <>
      <Button.Round
        onClick={submitReservationDetail}
        size='sm'
        custom={custom}
        disabled={!(isAllChecked && payMethod.method)}
      >
        결제하기
      </Button.Round>
      {isOpenModal && <ModalForPaymentSubmit />}
    </>
  );
}

export default PaymentSubmit;
