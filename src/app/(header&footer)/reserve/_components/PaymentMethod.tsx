import Button from '@/components/Button';

function PaymentMethod() {
  return (
    <div className='flex flex-col gap-16pxr'>
      <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
        결제 수단
      </h3>
      <ul className='flex-center justify-start gap-16pxr'>
        <li>
          <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
            무통장 입금
          </Button.Round>
        </li>
        <li>
          <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
            신용카드
            <span className='hidden tabletMin:inline-block'>결제</span>
          </Button.Round>
        </li>
        <li>
          <Button.Round custom='reserve-button !h-46pxr px-40pxr py-12pxr bg-white border hover:border-primary100 font-body2-semibold text-gray700'>
            간편 결제
          </Button.Round>
        </li>
      </ul>
      <label htmlFor='card' className='flex-center justify-start gap-4pxr'>
        <input type='radio' id='card' name='card' />
        <span className='text-gray600 font-caption1-medium'>
          이 결제수단으로 다음에도 사용하기
        </span>
      </label>
    </div>
  );
}

export default PaymentMethod;
