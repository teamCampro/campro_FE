'use client';

import { Button, ModalForMobile } from '@/components/index';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconFilter, IconReset } from '@/public/svgs';
import { setDetailState } from '@/src/app/_utils/detailState';
import { isModal } from '@/src/app/_utils/modalState';
import { useState } from 'react';
import { MapSizeType } from '../page';
import { setResetAll, setSelect } from '../../../_utils/styleSetting';
import {
  setCheckStandBy,
  setResetAllStandBy,
} from '../../../_utils/checkStandByState';
import DetailPanel from './DetailPanel';

function SearchFilter() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const selectArray: string[] = [];
  const details = useAppSelector((state) => state.detail);
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const dispatch = useAppDispatch();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  //pc& tablet 열고 닫기
  const handleDropClick = (id: number) => {
    dispatch(setDetailState(id));
  };

  //모바일 열기
  const handleOpen = () => {
    setIsDropdownVisible(true);
    dispatch(isModal(true));
  };

  //모바일 닫기
  const handleClose = () => {
    dispatch(setResetAllStandBy());
    details.forEach((detail) => {
      const { name: types } = detail;
      if (checkList.select[types].length > 0) {
        checkList.select[types].map((list) => {
          dispatch(setCheckStandBy({ types, list }));
        });
      }
    });
    setIsDropdownVisible(false);
    dispatch(isModal(false));
  };

  const handleReset = () => {
    dispatch(setResetAll());
    dispatch(setResetAllStandBy());
  };

  //모바일 최종 적용 누를때
  const handleFinalCheck = () => {
    details.forEach((detail) => {
      const { name: types } = detail;
      if (StandByList[types].length > 0) {
        StandByList[types].map((list) => {
          dispatch(setSelect({ list, types }));
        });
      }
    });
    setIsDropdownVisible(false);
  };

  //모바일 상세 필터 선택한 옵션 보여주기
  details.forEach((detail) => {
    const { name: types } = detail;
    if (StandByList[types].length > 0) {
      StandByList[types].map((list) => {
        selectArray.push(list.type);
      });
    }
  });

  return (
    <div className='relative w-full'>
      {isMobile && (
        <button
          type='button'
          onClick={handleOpen}
          className='flex-center h-48pxr w-56pxr cursor-pointer gap-4pxr rounded-full bg-white font-medium'
        >
          <IconFilter />
        </button>
      )}
      {(!isMobile || isDropdownVisible) && (
        <ModalForMobile
          headerContent='상세 보기'
          onClose={handleClose}
          footerContent={
            <>
              <div className='w-full text-right'>
                <div className='lineOver mb-8pxr text-gray600 font-body2-semibold'>
                  {selectArray.join(', ')}
                </div>
                <div className='flex-center justify-between gap-16pxr border-t border-b-white  mobile:border-0'>
                  <div
                    className='flex-center cursor-pointer gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'
                    onClick={handleReset}
                  >
                    초기화
                    <IconReset fill='#C8C8C8' />
                  </div>
                  <Button.Round
                    size='sm'
                    custom='mobileMin:!w-174pxr !h-56pxr mobileMiddle:!w-214pxr mobileMiddle:w-full'
                    onClick={handleFinalCheck}
                    disabled={selectArray.length > 0 ? false : true}
                  >
                    적용
                  </Button.Round>
                </div>
              </div>
            </>
          }
        >
          <DetailPanel
            handleDropClick={handleDropClick}
            handleOpen={handleOpen}
          />
        </ModalForMobile>
      )}
    </div>
  );
}

export default SearchFilter;
