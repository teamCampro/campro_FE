'use client';

import { Button, ModalForMobile } from '@/components/index';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconFilter, IconReset } from '@/public/svgs';
import { setDetailState } from '@/src/app/_utils/detailState';
import { isModal } from '@/src/app/_utils/modalState';
import { useState, useEffect } from 'react';
import { setResetAll, setSelect } from '../../../_utils/styleSetting';
import {
  setCheckStandBy,
  setResetAllStandBy,
} from '../../../_utils/checkStandByState';
import DetailPanel from './DetailPanel';
import { useRouter, useSearchParams } from 'next/navigation';
import TYPE from '@/src/app/_constants/detail';

function SearchFilter() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const searchParams = useSearchParams();
  const selectArray: string[] = [];
  const [isPriceReset, setIsPriceReset] = useState(false);
  const details = useAppSelector((state) => state.detail);
  const checkList = useAppSelector((state) => state.styleSetting);
  const StandByList = useAppSelector((state) => state.checkStandBy);
  const [currentTypes, setCurrentTypes] = useState<string[] | null>(null);
  const [isFinalCheckDone, setIsFinalCheckDone] = useState(false);
  const dispatch = useAppDispatch();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const router = useRouter();

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
          if (StandByList[types].includes(list)) return;
          dispatch(setCheckStandBy({ types, list }));
        });
      }
    });

    setIsDropdownVisible(false);
    dispatch(isModal(false));
  };
  /* 모바일 리셋 */
  const handleReset = () => {
    dispatch(setResetAll());
    dispatch(setResetAllStandBy());
    setIsPriceReset(true);
    const queryString = `location=${searchParams.get('location')}&checkIn=${searchParams.get('checkIn')}&checkOut=${searchParams.get('checkOut')}&adult=${searchParams.get('adult')}&child=${searchParams.get('child')}&pet=${searchParams.get('pet')}`;

    router.push(`/search/?${queryString}`);
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
    const typeList = details.map((detail) => detail.name);
    setCurrentTypes(typeList);
    setIsFinalCheckDone(true);
    setIsDropdownVisible(false);
  };

  //모바일 상세 필터 선택한 옵션 보여주기
  details.forEach((detail) => {
    const { name: types } = detail;
    /* 쿼리스트링에 값이 있을경우 새로고침해도 유지 */
    if (StandByList[types].length <= 0 && checkList.select[types].length <= 0) {
      const searchResult = searchParams.getAll(types);
      const searchPriceResult = searchParams.get(types);

      if (searchResult.length > 0) {
        const searchResultArray = searchResult[0].split(',');
        if (types !== 'prices') {
          TYPE[types].map((list) => {
            searchResultArray.forEach((result) => {
              if (list.type === result) {
                selectArray.push(list.type);
                dispatch(setSelect({ list, types }));
              }
            });
          });
        } else {
          if (!searchPriceResult) return;
          selectArray.push(searchPriceResult);
          const list = {
            id: 0,
            type: searchPriceResult,
          };
          dispatch(setSelect({ list, types: 'prices' }));
        }
      }
    }

    if (isMobile && StandByList[types].length <= 0) {
      checkList.select[types].map((list) => {
        if (StandByList[types].includes(list)) return;
        dispatch(setCheckStandBy({ types, list }));
      });
    }
    if (StandByList[types].length > 0) {
      StandByList[types].map((list) => {
        if (selectArray.includes(list.type)) return;
        selectArray.push(list.type);
      });
    }
  });

  const redirectAllUrl = (types: string[]) => {
    const params = new URLSearchParams(window.location.search);
    types.forEach((type) => {
      params.delete(type);
      const newValues = StandByList[type].map((el) => el.type).join(',');
      if (newValues) {
        params.set(type, newValues);
      }
    });
    const newSearch = params.toString();
    router.push(`/search/?${newSearch}`);
  };

  useEffect(() => {
    if (currentTypes && isFinalCheckDone) {
      redirectAllUrl(currentTypes);
    }
    setIsFinalCheckDone(false);
  }, [currentTypes, isFinalCheckDone]);

  return (
    <div className='relative w-full'>
      <button
        type='button'
        onClick={handleOpen}
        className='flex-center h-48pxr w-56pxr cursor-pointer gap-4pxr rounded-full border border-gray300 bg-white font-medium tabletMin:hidden '
      >
        <IconFilter fill='#949494' />
      </button>
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
            isPriceReset={isPriceReset}
            setIsPriceReset={setIsPriceReset}
          />
        </ModalForMobile>
      )}
    </div>
  );
}

export default SearchFilter;
