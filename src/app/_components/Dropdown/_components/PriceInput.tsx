import { numberFormatter } from '@/src/app/_utils/numberFormatter';
import {
  Dispatch,
  FocusEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { PriceType } from '../Selectable';

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
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(!isFocus);
  };
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const priceNubmer = numberFormatter(value);
    setPrice({ ...price, [name]: priceNubmer });
    console.log(price);
    setIsFocus(false);
  };

  /*   toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") */

  console.log(price);

  return (
    <div className='flex-center h-54pxr w-116pxr rounded-lg bg-gray100 p-16pxr mobile:w-120pxr mobile:gap-4pxr mobile:bg-white'>
      <input
        className='w-66pxr bg-gray100 text-right font-medium text-gray800 outline-0 font-body2 mobile:w-70pxr mobile:bg-white'
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type='number'
      />
      <h3
        className={`font-medium ${isFocus ? 'text-gray-700' : 'text-gray500'}  font-body2`}
      >
        원
      </h3>
    </div>
  );
}

export default PriceInput;
