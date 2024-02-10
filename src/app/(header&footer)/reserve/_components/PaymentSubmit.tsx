'use cient';
import Button from '@/components/Button';

function PaymentSubmit({ custom }: { custom: string }) {
  return (
    <Button.Round size='sm' custom={custom}>
      결제하기
    </Button.Round>
  );
}

export default PaymentSubmit;
