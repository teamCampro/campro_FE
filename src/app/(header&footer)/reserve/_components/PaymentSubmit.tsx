'use cient';
import Button from '@/components/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

function PaymentSubmit({ custom }: { custom: string }) {
  const vehicle = useAppSelector((state) => state.vehicleNumber);
  const plusOption = useAppSelector((state) => state.plusOptionCount);
  const payment = useAppSelector((state) => state.totalPayment);

  const reqBody = {
    vehicle,
    plusOption,
    totalPayment: payment.total,
  };

  return (
    <Button.Round
      onClick={() => console.log(reqBody)}
      size='sm'
      custom={custom}
    >
      결제하기
    </Button.Round>
  );
}

export default PaymentSubmit;
