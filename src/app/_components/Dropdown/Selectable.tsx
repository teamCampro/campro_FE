'use client';

import { IconArrowUp, IconReset } from '@/public/svgs';
import { ReactNode, useEffect, useRef } from 'react';
import { Button } from '..';

import SelectList from './_components/SelectList';
import PriceTable from './_components/PriceTable';
import { useDispatch } from 'react-redux';
import { setClose, setDetailState, setIsCheck } from '../../_utils/detailState';

interface TypeInfoType {
  id: number;
  type: string;
  name: string;
  isDone: boolean;
  isCheck: boolean;
}

interface Props {
  children: ReactNode;
  typeInfo: TypeInfoType;
  handleDropClick: (id: number) => void;
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

function Selectable({ children, typeInfo, handleDropClick }: Props) {
  const textLength = children?.toString().length;
  const divRef = useRef<HTMLDivElement>(null);
  const buttomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (!handleDropClick) return;
    console.log('onClick 실행');
    handleDropClick(typeInfo.id);
    /*  if (!typeInfo.isCheck) {
      dispatch(setReset(typeInfo.name));
    } */
  };

  const handleCheck = () => {
    dispatch(setDetailState(typeInfo.id));
    dispatch(setIsCheck(typeInfo.id));
  };

  const handleClickOutside = (event: any) => {
    if (!divRef.current || !buttomRef.current) return;
    if (divRef.current && buttomRef.current.contains(event.target)) {
    } else {
      dispatch(setClose(false));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`h-48pxr ${textLength && LENTH[textLength]} relative w-121pxr rounded-full border bg-white font-medium mobile:flex mobile:h-full mobile:w-full mobile:flex-col mobile:rounded-none mobile:border-none`}
        ref={buttomRef}
      >
        <div
          className='flex cursor-pointer items-center gap-3pxr py-12pxr pl-20pxr pr-14pxr mobile:justify-between'
          onClick={handleOpen}
        >
          <h3 className='whitespace-nowrap text-gray600 font-body2 mobile:text-black mobile:font-title3-semibold'>
            {children}
          </h3>
          <div className={`${typeInfo.isDone && 'arrowDown'} w-full`}>
            <IconArrowUp fill='#949494' />
          </div>
        </div>
        {typeInfo.isDone && (
          <div
            className='absolute left-0pxr top-50pxr rounded-[20px] bg-white mobile:static'
            ref={divRef}
          >
            <ul
              className={`scrollbar-hide flex w-320pxr flex-col justify-between gap-20pxr overflow-auto  px-20pxr pb-20pxr pt-24pxr  mobile:w-full mobile:overflow-y-auto mobile:bg-gray100  ${typeInfo.name !== 'prices' ? 'h-249pxr mobile:h-221pxr mobile:px-40pxr' : 'h-98pxr mobile:h-78pxr mobile:px-16pxr mobile:py-12pxr'}`}
              data-name='drap'
            >
              {typeInfo.name !== 'prices' ? (
                <SelectList types={typeInfo.name} />
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
                onClick={handleCheck}
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
