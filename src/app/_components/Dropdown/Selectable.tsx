'use client';

import { IconArrowUp, IconReset } from '@/public/svgs';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Button, CommonForm } from '..';

import SelectList from './_components/SelectList';
import PriceTable from './_components/PriceTable';
import { useDispatch } from 'react-redux';
import { setClose, setDetailState, setIsCheck } from '../../_utils/detailState';
import { FieldValues } from 'react-hook-form';
import {
  InitialStateType,
  setReset,
  setSelect,
} from '../../_utils/styleSetting';
import { useAppSelector } from '@/hooks/redux';
import {
  setCheckStandBy,
  setResetAllStandBy,
  setResetStandBy,
} from '../../_utils/checkStandByState';
import useMediaQueries from '@/hooks/useMediaQueries';

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

export interface CheckStandByListType {
  [key: string]: InitialStateType[];
  stay: InitialStateType[];
  home: InitialStateType[];
  theme: InitialStateType[];
  trip: InitialStateType[];
}

export interface PriceType {
  startPrice: string;
  endPrice: string;
}

const LENTH: LengthType = {
  '2': 'w-90pxr',
  '5': 'w-121pxr',
};

function Selectable({ children, typeInfo, handleDropClick }: Props) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const [price, setPrice] = useState({
    startPrice: '',
    endPrice: '',
  });
  const textLength = children?.toString().length;
  const [checkStandByList, setCheckStandByList] =
    useState<CheckStandByListType>({
      stay: [],
      home: [],
      theme: [],
      trip: [],
    });

  const standBy = {
    checkStandByList,
    setCheckStandByList,
  };
  const divRef = useRef<HTMLDivElement>(null);
  const buttomRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleOpen = () => {
    if (!handleDropClick) return;
    if (!isMobile) {
      dispatch(setResetAllStandBy());
    }
    const types = typeInfo.name;
    if (checkList.select[types].length > 0) {
      checkList.select[types].map((list) => {
        dispatch(setCheckStandBy({ types, list }));
      });
    }

    handleDropClick(typeInfo.id);
  };

  const getNewPrice = (types: string, size = 'pc') => {
    const list = {
      id: 0,
      type: `${price.startPrice}원-${price.endPrice}원`,
    };
    if (size !== 'mobile') {
      dispatch(setSelect({ list, types }));
    } else {
      dispatch(setCheckStandBy({ types, list }));
    }
  };

  const handleFinalCheck = (types: string) => {
    dispatch(setReset(types));
    if (types !== 'prices') {
      StandByList[types].map((list) => {
        dispatch(setSelect({ list, types }));
      });
    } else {
      getNewPrice(types);
    }

    dispatch(setDetailState(typeInfo.id));
    /* dispatch(setIsCheck(typeInfo.id)); */
  };

  const handleClickOutside = (event: any) => {
    /* dispatch(setResetAllStandBy()); */
    if (!divRef.current || !buttomRef.current) return;
    if (divRef.current && !buttomRef.current.contains(event.target)) {
      /*  dispatch(setResetAllStandBy()); */
      const types = typeInfo.name;
      dispatch(setResetAllStandBy());
      if (checkList.select[types].length > 0) {
        checkList.select[types].map((list) => {
          dispatch(setCheckStandBy({ types, list }));
        });
      }
      dispatch(setClose(false));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleReset = (type: string) => {
    dispatch(setReset(type));
    dispatch(setResetStandBy(type));
  };
  console.log(checkList);
  console.log(StandByList);
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
          <div className={`${typeInfo.isDone ? '' : 'arrowDown'} w-full`}>
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
                <SelectList
                  types={typeInfo.name}
                  isCheck={typeInfo.isCheck}
                  {...standBy}
                />
              ) : (
                <PriceTable
                  setPrice={setPrice}
                  price={price}
                  getNewPrice={getNewPrice}
                  types={typeInfo.name}
                />
              )}
            </ul>

            <div className='flex-center h-88pxr gap-8pxr border-t border-b-white px-20pxr py-16pxr mobile:hidden'>
              <div
                className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'
                onClick={() => handleReset(typeInfo.name)}
              >
                초기화
                <IconReset fill='#C8C8C8' />
              </div>
              <Button.Round
                size='sm'
                custom='w-174pxr h-56pxr'
                onClick={() => handleFinalCheck(typeInfo.name)}
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
