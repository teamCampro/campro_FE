'use client';

import { numberFormatter } from '@/src/app/_utils/numberFormatter';
import { usePathname } from 'next/navigation';
import { AboutPayType } from './ReserveInfo';
function PaymentAmountForDetail({
  sitePrice,
  aboutPay,
}: {
  sitePrice: number;
  aboutPay: AboutPayType;
}) {
  const pathName = usePathname();
  const isProfile = pathName.includes('reserveList');
  const totalOptionPrice = aboutPay.additionalOptions.reduce(
    (acc, option) => acc + option.price,
  );

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

  return (
    <div className='flex flex-col gap-12pxr border-b-2 border-dashed pb-24pxr'>
      <h3
        className={`text-black  ${isProfile ? 'font-title1-semibold' : 'font-title3-semibold'}`}
      >
        결제 금액
      </h3>
      <ul className='flex flex-col gap-12pxr'>
        <li className='flex-center justify-between text-gray600 font-body2-medium'>
          객실 1개 x{dateDiff(aboutPay.stayStartAt, aboutPay.stayEndAt)}박
          <span className='whitespace-nowrap text-gray600 font-body2-semibold'>
            {sitePrice * dateDiff(aboutPay.stayStartAt, aboutPay.stayEndAt)}원
          </span>
        </li>
      </ul>
      <ul className='flex flex-col gap-8pxr'>
        <li className='flex-center justify-between text-gray600 font-body2-semibold '>
          추가 옵션
          <span className='whitespace-nowrap text-gray600 font-body2-semibold'>
            {totalPaymentForOptions.toLocaleString()}원
          </span>
        </li>
        {optionList.map(
          (option) =>
            count[option.optionId] > 0 && (
              <li
                key={option.optionId}
                className='flex-center justify-between text-gray600 font-body2-medium '
              >
                {option?.optionName}
                {count[option.optionId] ? `x ${count[option.optionId]}` : ''}
                <span className='whitespace-nowrap text-gray500 font-body2-semibold'>
                  {count[option.optionId] &&
                    numberFormatter(String(option.price))}
                  원
                </span>
              </li>
            ),
        )}
      </ul>
    </div>
  );
}
export default PaymentAmountForDetail;
