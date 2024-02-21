'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { IconPlus, IconMinus } from '@/public/svgs';
import { minus, plus } from '@/src/app/_slices/plusOptions';

export const Options = [
  { content_id: 0, content: '장작 세트', price: '20,000원' },
  { content_id: 1, content: '전기 장판', price: '20,000원' },
  {
    content_id: 2,
    content: '이불세트(덮는 이불 2장)',
    price: '20,000원',
  },
  {
    content_id: 3,
    content: ' 욕실세트(치약+일회용 칫솔)',
    price: '10,000원',
  },
];

function AddOption() {
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
        {Options.map((option) => (
          <li
            key={option.content_id}
            className='flex-center w-full flex-wrap justify-between'
          >
            <h3 className='reserve-options font-body2-medium tabletMin:font-body1-medium'>
              {option.content}
            </h3>
            <div className='flex-center w-73pxr  gap-16pxr mobile:gap-4pxr tabletMin:w-97pxr'>
              <button type='button' className='h-20pxr w-20pxr cursor-pointer'>
                <IconMinus
                  fill={
                    count[option.content_id] === 0 || !count[option.content_id]
                      ? '#949494'
                      : '#000000'
                  }
                  onClick={() => handleMinus(option.content_id)}
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                />
              </button>
              <p className='!flex-center !h-25pxr !w-25pxr   !leading-none font-body2-medium tabletMin:font-body1-medium'>
                {count[option.content_id] || 0}
              </p>
              <button type='button' className='h-20pxr w-20pxr cursor-pointer'>
                <IconPlus
                  onClick={() => handlePlus(option.content_id)}
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill={count[option.content_id] >= 9 ? '#949494' : '#000000'}
                />
              </button>
            </div>
            <h3 className='basis-78pxr font-body2-bold tabletMin:font-body1-bold'>
              {option.price}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddOption;
