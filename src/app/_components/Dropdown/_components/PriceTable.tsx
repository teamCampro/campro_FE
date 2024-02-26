import { Button } from '../..';
import PriceInput from './PriceInput';
import { Dispatch, SetStateAction, useState } from 'react';
import { PriceType } from '../Selectable';
import { useDispatch } from 'react-redux';
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
  isPriceReset: boolean;
  setIsPriceReset: Dispatch<SetStateAction<boolean>>;
  sumOfMoney: {
    startPrice: string;
    endPrice: string;
  };
  setSumOfMoney: Dispatch<
    SetStateAction<{
      startPrice: string;
      endPrice: string;
    }>
  >;
}

function PriceTable({
  setPrice,
  price,
  getNewPrice,
  types,
  isPriceReset,
  setIsPriceReset,
  sumOfMoney,
  setSumOfMoney,
}: PriceTableType) {
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  //모바일일 때 설정한 가격 대기상태로 넣기
  const handleClick = (types: string) => {
    dispatch(setResetStandBy(types));
    getNewPrice(types, 'mobile');
  };

  return (
    <li className='flex flex-col gap-4pxr'>
      <div className='flex-center justify-between mobile:gap-12pxr tabletMin:flex-col tabletMin:items-end mobile344:flex-wrap mobileMiddle:gap-4pxr'>
        <div className='flex-center w-full justify-between gap-4pxr'>
          <PriceInput
            name='startPrice'
            setPrice={setPrice}
            price={price}
            setIsError={setIsError}
            isPriceReset={isPriceReset}
            setIsPriceReset={setIsPriceReset}
            sumOfMoney={sumOfMoney}
            setSumOfMoney={setSumOfMoney}
          />
          <div className='w-16pxr flex-shrink-0 border-b-2 border-b-gray700 mobileMiddle:w-12pxr'></div>
          <PriceInput
            name='endPrice'
            setPrice={setPrice}
            price={price}
            setIsError={setIsError}
            isPriceReset={isPriceReset}
            setIsPriceReset={setIsPriceReset}
            sumOfMoney={sumOfMoney}
            setSumOfMoney={setSumOfMoney}
          />
        </div>
        <small
          className={`${isError ? 'mobile344:flex' : 'mobile344:hidden'} hidden justify-end text-error font-caption1-medium`}
        >
          최저금액은 최고금액보다 높을 수 없습니다.
        </small>
        <Button.Circle
          size='sm'
          custom='mobileMiddle:w-68pxr mobileMiddle:h-46pxr tabletMin:hidden mobileMiddle:ml-8pxr bg-white border border-bg-gray300 font-body2-semibold text-gray600 mobile344:w-full mobile344:h-46pxr hover:border-primary100 hover:text-primary100 active:text-primary100'
          onClick={() => handleClick(types)}
        >
          확인
        </Button.Circle>
      </div>
      <small
        className={`${isError ? 'mobileMiddleMin:flex' : 'mobileMiddleMin:hidden'} hidden justify-end text-error font-caption1-medium`}
      >
        최저금액은 최고금액보다 높을 수 없습니다.
      </small>
    </li>
  );
}

export default PriceTable;
