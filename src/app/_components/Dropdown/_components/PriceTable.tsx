import { FieldValues, useFormContext } from 'react-hook-form';
import { Button, CommonForm, CommonInput } from '../..';
import PriceInput from './PriceInput';
import { Dispatch, SetStateAction } from 'react';
import { PriceType } from '../Selectable';
import { useDispatch } from 'react-redux';
import { setReset } from '@/src/app/_utils/styleSetting';
import { setResetStandBy } from '@/src/app/_utils/checkStandByState';

interface PriceTableType {
  price: PriceType;
  setPrice: Dispatch<
    SetStateAction<{
      startPrice: string;
      endPrice: string;
    }>
  >;
  getNewPrice: (type: string, size: string) => void;
  types: string;
}

function PriceTable({ setPrice, price, getNewPrice, types }: PriceTableType) {
  const dispatch = useDispatch();
  const handleClick = (types: string) => {
    dispatch(setResetStandBy(types));
    getNewPrice(types, 'mobile');
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
      <PriceInput name='startPrice' setPrice={setPrice} price={price} />
      <div className='w-16pxr border-b-2 border-b-gray700 mobileMiddle:w-12pxr'></div>
      <PriceInput name='endPrice' setPrice={setPrice} price={price} />
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
        onClick={() => handleClick(types)}
      >
        확인
      </Button.Circle>
      {/* </CommonForm> */}
    </li>
  );
}

export default PriceTable;

/* className={`font-medium ${isFocus ? 'text-gray-700' : 'text-gray500'}  font-body2`} */
