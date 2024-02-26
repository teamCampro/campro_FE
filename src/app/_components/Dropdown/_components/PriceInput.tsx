import { numberFormatter } from '@/src/app/_utils/numberFormatter';
import { PriceType } from '../Selectable';
import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
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
  setIsError: Dispatch<SetStateAction<boolean>>;
  name: string;
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

function PriceInput({
  name,
  setPrice,
  price,
  setIsError,
  isPriceReset,
  setIsPriceReset,
  sumOfMoney,
  setSumOfMoney,
}: PriceInputType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
    setIsError(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (isNaN(Number(value))) {
      return setSumOfMoney({
        startPrice: '0',
        endPrice: '0',
      });
    }
    setSumOfMoney({ ...sumOfMoney, [name]: value });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const priceNubmer = numberFormatter(value.replace(/(^0+)/, ''));

    setSumOfMoney({ ...sumOfMoney, [name]: priceNubmer });
    setPrice({ ...price, [name]: priceNubmer });
    setIsFocus(false);
  };

  const formatNumber = (number: string) => {
    return Number(number.replaceAll(',', ''));
  };

  useEffect(() => {
    if (
      name === 'endPrice' &&
      formatNumber(price.startPrice) > formatNumber(price.endPrice)
    ) {
      setPrice({ ...price, endPrice: '0' });
      setSumOfMoney({ ...sumOfMoney, endPrice: '0' });
      setIsError(true);
    }

    //각 가격 적용눌렀을 때 화면에 보여지는 값
    let applyStartPrice = '0';
    let applyEndPrice = '0';

    /* 가격 디코딩 후 전송 */
    if (checkList.select.prices.length > 0) {
      const checkPriceSplit = checkList.select.prices[0].type.split('-');

      applyStartPrice = checkPriceSplit[0].replace('원', '');
      applyEndPrice = checkPriceSplit[1].replace('원', '');
      setSumOfMoney({ startPrice: applyStartPrice, endPrice: applyEndPrice });
    } else if (StandByList.prices.length > 0 && isMobile) {
      const StandByPriceSplit = StandByList.prices[0].type.split('-');

      applyStartPrice = StandByPriceSplit[0].replace('원', '');
      applyEndPrice = StandByPriceSplit[1].replace('원', '');
      setSumOfMoney({ startPrice: applyStartPrice, endPrice: applyEndPrice });
    }

    if (
      checkList.select.prices.length <= 0 &&
      formatNumber(price.endPrice) < 0
    ) {
      return setSumOfMoney({ startPrice: '0', endPrice: '0' });
    }

    if (isPriceReset) {
      setSumOfMoney({
        startPrice: '0',
        endPrice: '0',
      });
      setIsPriceReset(false);
    }
  }, [checkList.select.prices, price.endPrice]);

  return (
    <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:gap-4pxr  mobile:bg-white mobile344:w-full mobileMiddle:w-full'>
      <input
        className='w-66pxr bg-gray100 text-right text-gray800 outline-0 font-body2-medium mobile:w-full mobile:bg-white'
        name={name}
        value={
          name === 'startPrice' ? sumOfMoney.startPrice : sumOfMoney.endPrice
        }
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
