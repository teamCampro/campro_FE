'use client';

import { useAppSelector } from '@/hooks/redux';

function TotalPayment() {
  const payment = useAppSelector((state) => state.totalPayment);

  return (
    <div className='flex justify-between text-gray800 font-title1-bold'>
      <h2>총 결제금액</h2>
      <h2 className='text-primary100'>{payment.total.toLocaleString()}원</h2>
    </div>
  );
}

export default TotalPayment;
