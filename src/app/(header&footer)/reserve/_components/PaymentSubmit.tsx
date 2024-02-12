'use cient';
import Button from '@/components/Button';
import { useAppSelector } from '@/hooks/redux';

function PaymentSubmit({ custom }: { custom: string }) {
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
