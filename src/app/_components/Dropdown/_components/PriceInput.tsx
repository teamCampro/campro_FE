import { numberFormatter } from '@/src/app/_utils/numberFormatter';
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { PriceType } from '../Selectable';
import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';

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
    e.target.value;
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const priceNubmer = numberFormatter(value);
    setPrice({ ...price, [name]: priceNubmer });
    setIsFocus(false);
  };

  let applyStartPrice = '';
  let applyEndPrice = '';
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
    <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:w-120pxr mobile:gap-4pxr mobile:bg-white'>
      <input
        className='w-66pxr bg-gray100 text-right font-medium text-gray800 outline-0 font-body2 mobile:w-70pxr mobile:bg-white'
        name={name}
        defaultValue={name === 'startPrice' ? applyStartPrice : applyEndPrice}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
      />
      <h3
        className={`font-medium ${isFocus || price ? 'text-gray-700' : 'text-gray500'}  font-body2`}
      >
        원
      </h3>
    </div>
  );
}

export default PriceInput;
