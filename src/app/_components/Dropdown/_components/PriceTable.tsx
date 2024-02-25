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
      startPrice: number
      endPrice: number;
    }>
  >;
  getNewPrice: (type: string, size: string) => void;
  types: string;
}

function PriceTable({ setPrice, price, getNewPrice, types }: PriceTableType) {
  const dispatch = useDispatch();

  //모바일일 때 설정한 가격 대기상태로 넣기
  const handleClick = (types: string) => {
    dispatch(setResetStandBy(types));
    getNewPrice(types, 'mobile');
  };

  return (
    <li className='flex-center justify-between mobile:gap-12pxr mobile344:flex-wrap mobileMiddle:gap-4pxr'>
      <div className='flex-center w-full justify-between gap-4pxr'>
        <PriceInput name='startPrice' setPrice={setPrice} price={price} />
        <div className='w-16pxr flex-shrink-0 border-b-2 border-b-gray700 mobileMiddle:w-12pxr'></div>
        <PriceInput name='endPrice' setPrice={setPrice} price={price} />
      </div>
      <Button.Circle
        size='sm'
        custom='mobileMiddle:w-68pxr mobileMiddle:h-46pxr tabletMin:hidden mobileMiddle:ml-8pxr bg-white border border-bg-gray300 font-body2-semibold text-gray600 mobile344:w-full mobile344:h-46pxr hover:border-primary100 hover:text-primary100 active:text-primary100'
        onClick={() => handleClick(types)}
      >
        확인
      </Button.Circle>
    </li>
  );
}

export default PriceTable;
