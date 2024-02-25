'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { Options } from './AddOption';
import { useEffect } from 'react';
import { setTotalPayment } from '@/src/app/_slices/totalPayment';
import { usePathname, useSearchParams } from 'next/navigation';

function PaymentAmount({ sitePrice }: { sitePrice: number }) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const isProfile = pathName.includes('reserveList');
  const count = useAppSelector((state) => state.plusOptionCount);
  const dispatch = useAppDispatch();

  const totalPaymentForOptions = Options.reduce((acc, option) => {
    const countForOption = Number(count[option.content_id] || 0);
    const priceForOption = Number(option.price.replace(/[,원]/g, ''));
    return acc + countForOption * priceForOption;
  }, 0);

  function dateDiff(date1: string | null, date2: string | null) {
    if (date1 && date2) {
      const d1 = new Date(date1);
      const d2 = new Date(date2);

      const diff =
        Math.abs(d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);

      return diff;
    } else {
      return 1;
    }
  }
  useEffect(() => {
    dispatch(
      setTotalPayment(
        totalPaymentForOptions +
          sitePrice *
            dateDiff(searchParams.get('checkIn'), searchParams.get('checkOut')),
      ),
    );
  }, [totalPaymentForOptions, dispatch]);

  return (
    <div className='flex flex-col gap-12pxr border-b-2 border-dashed pb-20pxr'>
      <h3
        className={`leading-[160%] text-black  ${isProfile ? 'font-title1-semibold' : 'font-title3-semibold'}`}
      >
        결제 금액
      </h3>
      <ul className='flex flex-col gap-12pxr'>
        <li className='flex-center justify-between leading-[140%] text-gray600 font-body2-medium'>
          객실 1개 x
          {dateDiff(searchParams.get('checkIn'), searchParams.get('checkOut'))}
          박
          <span className='whitespace-nowrap text-gray600 font-body2-semibold'>
            {searchParams.get('checkIn') && searchParams.get('checkOut')
              ? (
                  sitePrice *
                  dateDiff(
                    searchParams.get('checkIn'),
                    searchParams.get('checkOut'),
                  )
                ).toLocaleString()
              : sitePrice.toLocaleString()}
            원
          </span>
        </li>
      </ul>
      <ul className='flex flex-col gap-8pxr'>
        <li className='flex-center justify-between leading-[140%] text-gray600 font-body2-semibold'>
          추가 옵션
          <span className='whitespace-nowrap text-gray600 font-body2-semibold'>
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
            <span className='whitespace-nowrap text-gray500 font-body2-semibold'>
              {count[option.content_id] ? option.price : '0원'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentAmount;
