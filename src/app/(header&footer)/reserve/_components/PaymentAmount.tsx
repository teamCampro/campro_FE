function PaymentAmount() {
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
        <li className='flex-center justify-betweentext-gray600 font-body2-medium '>
          추가 상품
          <span className='text-gray600 font-body2-semibold'>
            합계 - 40,000원
          </span>
        </li>
        <li className='flex-center justify-between text-gray600 font-body2-medium '>
          바베큐 x 1
          <span className='text-gray500 font-body2-semibold'>20,000원</span>
        </li>
        <li className='flex-center justify-between text-gray600 font-body2-medium '>
          장작 x 1
          <span className='text-gray500 font-body2-semibold'>20,000원</span>
        </li>
      </ul>
    </div>
  );
}

export default PaymentAmount;
