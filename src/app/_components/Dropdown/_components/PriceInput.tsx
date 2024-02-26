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
  names: string;
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
  isError: boolean;
}

function PriceInput({
  names,
  setPrice,
  price,
  isError,
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
    e.preventDefault();
    const { value, name } = e.target;

    if (isNaN(Number(value.replaceAll(',', '')))) {
      return setSumOfMoney({
        startPrice: '0',
        endPrice: '0',
      });
    }
    setSumOfMoney({ ...sumOfMoney, [name]: value.replaceAll(',', '') });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;

    const priceNubmer = numberFormatter(value.replace(/(^0+)/, ''));

    setPrice({ ...price, [name]: priceNubmer });
    setSumOfMoney({ ...sumOfMoney, [name]: priceNubmer });
    if (
      formatNumber(sumOfMoney.startPrice) > formatNumber(sumOfMoney.endPrice)
    ) {
      /* setPrice({ ...price, endPrice: '0' });
      setSumOfMoney({ ...sumOfMoney, endPrice: '0' }); */
      setIsError(true);
    }
    setIsFocus(false);
  };

  const formatNumber = (number: string) => {
    return Number(number.replaceAll(',', ''));
  };

  useEffect(() => {
    //각 가격 적용눌렀을 때 화면에 보여지는 값
    let applyStartPrice = '0';
    let applyEndPrice = '0';

    /* 가격 디코딩 후 input default로 전송 */
    if (
      checkList.select.prices.length > 0 &&
      checkList.select.prices[0].type.includes(sumOfMoney.startPrice) &&
      checkList.select.prices[0].type.includes(sumOfMoney.endPrice) &&
      isPriceReset
    ) {
      const checkPriceSplit = checkList.select.prices[0].type.split('-');

      applyStartPrice = checkPriceSplit[0].replace('원', '');
      applyEndPrice = checkPriceSplit[1].replace('원', '');
      setPrice({ startPrice: applyStartPrice, endPrice: applyEndPrice });
      setSumOfMoney({ startPrice: applyStartPrice, endPrice: applyEndPrice });
    } else if (
      isMobile &&
      StandByList.prices.length > 0 &&
      StandByList.prices[0].type.includes(sumOfMoney.startPrice) &&
      StandByList.prices[0].type.includes(sumOfMoney.endPrice) &&
      isPriceReset
    ) {
      const StandByPriceSplit = StandByList.prices[0].type.split('-');

      applyStartPrice = StandByPriceSplit[0].replace('원', '');
      applyEndPrice = StandByPriceSplit[1].replace('원', '');
      setPrice({ startPrice: applyStartPrice, endPrice: applyEndPrice });
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
      setPrice({
        startPrice: '0',
        endPrice: '0',
      });
      setIsPriceReset(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    checkList.select.prices,
    price.endPrice,
    price.startPrice,
    sumOfMoney.startPrice,
    sumOfMoney.endPrice,
  ]);
  return (
    <div
      className={`flex-center h-54pxr w-116pxr rounded-lg border bg-gray100 p-16pxr  mobile:gap-4pxr mobile:bg-white mobile344:w-full mobileMiddle:w-full ${isError ? 'border-error' : ''}`}
    >
      <input
        className={`w-66pxr  bg-gray100 text-right text-gray800 outline-0 font-body2-medium mobile:w-full mobile:bg-white`}
        name={names}
        value={
          names === 'startPrice' ? sumOfMoney.startPrice : sumOfMoney.endPrice
        }
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        type='text'
        pattern='\d*'
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
