import { numberFormatter } from '@/src/app/_utils/numberFormatter';
import { PriceType } from '../Selectable';
import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useState,
} from 'react';

interface PriceInputType {
  price: PriceType;
  setPrice: Dispatch<
    SetStateAction<{
      startPrice: string;
      endPrice: string;
    }>
  >;
  name: string;
}

function PriceInput({ name, setPrice, price }: PriceInputType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    /* e.target.value; */
    //value값 사용하기위해 적용(차후에 리셋할 때 defaultValue값 없어지게 사용 예정)
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const priceNubmer = numberFormatter(value);
    setPrice({ ...price, [name]: priceNubmer });
    setIsFocus(false);
  };

  let applyStartPrice = '';
  let applyEndPrice = '';
  //각 가격 적용눌렀을 때 화면에 보여지는 값
  if (checkList.select.prices.length > 0) {
    const checkPriceSplit = checkList.select.prices[0].type.split('-');

    applyStartPrice = checkPriceSplit[0].replace('원', '');
    applyEndPrice = checkPriceSplit[1].replace('원', '');
  } else if (StandByList.prices.length > 0 && isMobile) {
    const StandByPriceSplit = StandByList.prices[0].type.split('-');

    applyStartPrice = StandByPriceSplit[0].replace('원', '');
    applyEndPrice = StandByPriceSplit[1].replace('원', '');
  }

  return (
    <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:gap-4pxr  mobile:bg-white mobile344:w-full mobileMiddle:w-full'>
      <input
        className='font-body2-medium w-66pxr bg-gray100 text-right text-gray800 outline-0 mobile:w-full mobile:bg-white'
        name={name}
        defaultValue={name === 'startPrice' ? applyStartPrice : applyEndPrice}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
      />
      <h3
        className={`${isFocus || price ? 'text-gray-700' : 'text-gray500'}  font-body2-medium`}
      >
        원
      </h3>
    </div>
  );
}

export default PriceInput;
