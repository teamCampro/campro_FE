'use client';

import { IconArrowDown, IconArrowUp, IconReset } from '@/public/svgs';
import { ReactNode } from 'react';
import { Button } from '..';

import SelectList from './_components/SelectList';
import PriceTable from './_components/PriceTable';

interface Props {
  children: ReactNode;
  types: string;
  handleDropClick: (id: number) => void;
  listId: number;
  isDone: boolean;
}

interface LengthType {
  [key: string]: string;
  '2': string;
  '5': string;
}

const LENTH: LengthType = {
  '2': 'w-90pxr',
  '5': 'w-121pxr',
};

function Selectable({
  children,
  types,
  handleDropClick,
  listId,
  isDone,
}: Props) {
  const textLength = children?.toString().length;

  const handleClick = () => {
    if (!handleDropClick) return;
    handleDropClick(listId);
  };

  return (
    <>
      <div
        className={`h-48pxr ${textLength && LENTH[textLength]} relative w-121pxr rounded-full border bg-white font-medium mobile:flex mobile:h-full mobile:w-full mobile:flex-col mobile:rounded-none mobile:border-none`}
      >
        <div
          className='flex cursor-pointer items-center gap-3pxr py-12pxr pl-20pxr pr-14pxr mobile:justify-between'
          onClick={handleClick}
        >
          <h3 className='whitespace-nowrap text-gray600 font-body2 mobile:text-black mobile:font-title3-semibold'>
            {children}
          </h3>
          {isDone ? (
            <IconArrowUp fill='#949494' />
          ) : (
            <IconArrowDown fill='#949494' />
          )}
        </div>
        {isDone && (
          <div className='absolute left-0pxr top-50pxr rounded-[20px] bg-white mobile:static'>
            <ul
              className={`scrollbar-hide flex w-320pxr flex-col justify-between gap-20pxr overflow-auto  px-20pxr pb-20pxr pt-24pxr  mobile:w-full mobile:overflow-y-auto mobile:bg-gray100  ${types !== 'prices' ? 'h-249pxr mobile:h-221pxr mobile:px-40pxr' : 'h-98pxr mobile:h-78pxr mobile:px-16pxr mobile:py-12pxr'}`}
            >
              {types !== 'prices' ? (
                <SelectList types={types} />
              ) : (
                <PriceTable />
              )}
            </ul>

            <div className='flex-center h-88pxr gap-8pxr border-t border-b-white px-20pxr py-16pxr mobile:hidden'>
              <div className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
                초기화
                <IconReset fill='#C8C8C8' />
              </div>
              <Button.Round
                size='sm'
                custom='w-174pxr h-56pxr'
                onClick={handleClick}
              >
                적용
              </Button.Round>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Selectable;
