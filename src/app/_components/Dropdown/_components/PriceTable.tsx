import { FieldValues, useFormContext } from 'react-hook-form';
import { Button, CommonForm, CommonInput } from '../..';
import PriceInput from './PriceInput';

function PriceTable() {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
    console.log(111);
    console.log('안쪽');
  };

  return (
    <li
      className={
        'flex-center justify-between mobile:gap-12pxr mobileMiddle:gap-4pxr'
      }
    >
      {/* <CommonForm
        onSubmit={handleSubmit}
        className={
          'flex-center justify-between mobile:gap-12pxr mobileMiddle:gap-4pxr'
        }
      > */}
      {/* <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:w-120pxr mobile:gap-4pxr mobile:bg-white mobileMiddle:w-114pxr'>
          <CommonInput
            name='startPrice'
            type='number'
            placeholder=''
            className='w-66pxr bg-gray100 text-right font-medium text-gray800 outline-0 font-body2 mobile:w-70pxr mobile:bg-white'
          />
          <h3 className={`'text-gray-700' font-medium  font-body2`}>원</h3>
        </div> */}
      <PriceInput name='startPrice' />
      <div className='w-16pxr border-b-2 border-b-gray700 mobileMiddle:w-12pxr'></div>
      <PriceInput name='endPrice' />
      {/* <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:w-120pxr mobile:gap-4pxr mobile:bg-white mobileMiddle:w-114pxr'>
          <CommonInput
            name='endPrice'
            type='number'
            placeholder=''
            className='w-66pxr bg-gray100 text-right font-medium text-gray800 outline-0 font-body2 mobile:w-70pxr mobile:bg-white'
          />
          <h3 className={`'text-gray-700' font-medium  font-body2`}>원</h3>
        </div> */}
      <Button.Circle
        size='sm'
        custom='mobileMiddle:w-68pxr mobileMiddle:h-46pxr tabletMin:hidden mobileMiddle:ml-8pxr bg-white border border-bg-gray300 font-body2-semibold text-gray600'
      >
        확인
      </Button.Circle>
      {/* </CommonForm> */}
    </li>
  );
}

export default PriceTable;

/* className={`font-medium ${isFocus ? 'text-gray-700' : 'text-gray500'}  font-body2`} */
