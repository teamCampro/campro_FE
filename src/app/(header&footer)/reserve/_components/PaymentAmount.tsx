'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Options } from './AddOption';
import { useEffect } from 'react';
import { setTotalPayment } from '@/src/app/_slices/totalPayment';

function PaymentAmount() {
  const count = useAppSelector((state) => state.plusOptionCount);
  const dispatch = useAppDispatch();

  const totalPaymentForOptions = Options.reduce((acc, option) => {
    const countForOption = Number(count[option.content_id] || 0);
    const priceForOption = Number(option.price.replace(/[,원]/g, ''));
    return acc + countForOption * priceForOption;
  }, 0);

  useEffect(() => {
    dispatch(setTotalPayment(totalPaymentForOptions + 90000));
  }, [totalPaymentForOptions, dispatch]);

  return (
    <div className='flex flex-col gap-12pxr border-b-2 border-dashed pb-24pxr'>
      <h3 className='text-black font-title3-semibold'>결제 금액</h3>
      <ul className='flex flex-col gap-12pxr'>
        <li className='flex-center justify-between text-gray600 font-body2-medium'>
          객실 1개 x 2박
          <span className='text-gray600 font-body2-semibold'>90,000원</span>
        </li>
      </ul>
      <ul className='flex flex-col gap-8pxr'>
        <li className='flex-center justify-between text-gray600 font-body2-medium '>
          추가 옵션
          <span className='text-gray600 font-body2-semibold'>
            {totalPaymentForOptions.toLocaleString()}원
          </span>
        </li>
        {Options.map((option) => (
          <li
            key={option.content_id}
            className='flex-center justify-between text-gray600 font-body2-medium '
          >
            {option?.content}{' '}
            {count[option.content_id] ? `x ${count[option.content_id]}` : ''}
            <span className='text-gray500 font-body2-semibold'>
              {count[option.content_id] ? option.price : '0원'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentAmount;