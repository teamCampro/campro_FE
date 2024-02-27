import React from 'react';
import { AddtionalOptionType } from '../../owner/site-registration/page';
import { AdditionalOptionType } from './OwnerModalContent';

interface Props {
  stayNights: number;
  czSitePrice: number;
  additionalOptions: AdditionalOptionType[];
}

function OwnerReservationPayment({
  stayNights,
  czSitePrice,
  additionalOptions,
}: Props) {
  const additionalTotalPrice = additionalOptions.reduce((total, option) => {
    return total + option.price * option.amount;
  }, 0);

  const totalPrice = czSitePrice * stayNights + additionalTotalPrice;

  return (
    <div className='flex h-full w-304pxr flex-col items-center gap-16pxr rounded-2xl border border-[#B9B9B9] px-13pxr py-20pxr'>
      <h1 className='self-start font-title1-semibold'>결제 금액</h1>
      <div className='flex h-full w-full flex-col justify-between gap-12pxr'>
        <div className='flex flex-col gap-12pxr'>
          <div className='flex w-full justify-between'>
            <span className='text-16pxr font-semibold leading-[22.4px] text-gray600'>
              {stayNights}박
            </span>
            <span className='text-16pxr font-semibold leading-[22.4px] text-gray600'>
              {(czSitePrice * stayNights).toLocaleString()}원
            </span>
          </div>
          <div className='flex flex-col gap-8pxr'>
            <div className='flex w-full justify-between'>
              <span className='text-gray600 font-body2-semibold'>
                추가 옵션
              </span>
              <span className='text-gray600 font-body2-semibold'>
                {additionalTotalPrice.toLocaleString()}원
              </span>
            </div>
            <div className='flex flex-col gap-8pxr'>
              {additionalOptions.map((option, index) => {
                const { name, amount, price } = option;

                return (
                  <div key={index} className='flex w-full justify-between'>
                    <span className='text-gray-600 font-body2-medium'>
                      {name} x{amount}
                    </span>
                    <span className='text-gray500 font-body2-medium'>
                      {price.toLocaleString()}원
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-12pxr'>
          <hr className='my-8pxr w-full border border-dashed border-gray500' />
          <div className='flex w-full justify-between'>
            <span className='font-body2-semibold'>총 결제금액</span>
            <span className='font-body2-semibold'>
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OwnerReservationPayment;
