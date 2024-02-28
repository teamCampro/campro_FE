'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconPlus, IconMinus } from '@/public/svgs';
import { minus, plus } from '@/src/app/_slices/plusOptions';
import { numberFormatter } from '@/src/app/_utils/numberFormatter';

type additionalOption = {
  optionId: number;
  optionName: string;
  price: number;
};
function AddOption({ optionList }: { optionList: additionalOption[] }) {
  const count = useAppSelector((state) => state.plusOptionCount);
  const dispatch = useAppDispatch();

  const handlePlus = (id: number) => {
    dispatch(plus(id));
  };

  const handleMinus = (id: number) => {
    dispatch(minus(id));
  };

  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
        추가 옵션
      </h3>
      <ul className='flex flex-col gap-16pxr '>
        {optionList.map((option) => (
          <li
            key={option.optionId}
            className='flex-center w-full flex-wrap justify-between'
          >
            <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
              {option.optionName}
            </h3>
            <div className='flex-center w-73pxr  gap-16pxr mobile:gap-4pxr tabletMin:w-97pxr'>
              <button type='button' className='h-20pxr w-20pxr cursor-pointer'>
                <IconMinus
                  fill={
                    count[option.optionId] === 0 || !count[option.optionId]
                      ? '#949494'
                      : '#000000'
                  }
                  onClick={() => handleMinus(option.optionId)}
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                />
              </button>
              <p className='!flex-center !h-25pxr !w-25pxr   !leading-none font-body2-medium tabletMin:font-body1-medium'>
                {count[option.optionId] || 0}
              </p>
              <button type='button' className='h-20pxr w-20pxr cursor-pointer'>
                <IconPlus
                  onClick={() => handlePlus(option.optionId)}
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill={count[option.optionId] >= 9 ? '#949494' : '#000000'}
                />
              </button>
            </div>
            <h3 className='flex basis-78pxr justify-end font-body2-bold mobile:justify-start tabletMin:font-body1-bold'>
              {numberFormatter(String(option.price))}원
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddOption;
