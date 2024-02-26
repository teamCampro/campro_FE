import React from 'react';

function OwnerReservationPayment() {
  const mocktak = {
    stayDays: 2,
    price: 40000,
    additionalOptions: [
      {
        optionName: '바베큐 세트',
        quantity: 1,
        price: 20000,
      },
      {
        optionName: '이불 세트',
        quantity: 4,
        price: 6000,
      },
      {
        optionName: '장작 세트',
        quantity: 3,
        price: 15000,
      },
    ],
  };

  const additionalTotalPrice = mocktak.additionalOptions.reduce(
    (total, option) => {
      return total + option.price * option.quantity;
    },
    0,
  );

  const totalPrice = mocktak.price * mocktak.stayDays + additionalTotalPrice;

  return (
    <div className='flex h-full w-304pxr flex-col items-center gap-16pxr rounded-2xl border border-[#B9B9B9] px-13pxr py-20pxr'>
      <h1 className='self-start font-title1-semibold'>결제 금액</h1>
      <div className='flex h-full w-full flex-col justify-between gap-12pxr'>
        <div className='flex flex-col gap-12pxr'>
          <div className='flex w-full justify-between'>
            <span className='text-16pxr font-semibold leading-[22.4px] text-gray600'>
              {mocktak.stayDays}박
            </span>
            <span className='text-16pxr font-semibold leading-[22.4px] text-gray600'>
              {(mocktak.price * mocktak.stayDays).toLocaleString()}원
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
              {mocktak.additionalOptions.map((option, index) => {
                const { optionName, quantity, price } = option;

                return (
                  <div key={index} className='flex w-full justify-between'>
                    <span className='text-gray-600 font-body2-medium'>
                      {optionName} x{quantity}
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
