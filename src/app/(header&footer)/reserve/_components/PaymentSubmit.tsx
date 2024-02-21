'use cient';
import Button from '@/components/Button';
import { useAppSelector } from '@/hooks/redux';
import { useState } from 'react';
import ModalForPaymentSubmit from './ModalForPaymentSubmit';
function PaymentSubmit({ custom }: { custom: string }) {
  const isAllChecked = useAppSelector((state) => state.isAllChecked);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModal = () => setIsOpenModal(false);

  const vehicle = useAppSelector((state) => state.vehicleNumber);
  const plusOption = useAppSelector((state) => state.plusOptionCount);
  const payment = useAppSelector((state) => state.totalPayment);
  const paymentMethod = useAppSelector((state) => state.paymentMethod);

  const reqBody = {
    vehicle,
    plusOption,
    totalPayment: payment.total,
    paymentMethod: paymentMethod.method,
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
