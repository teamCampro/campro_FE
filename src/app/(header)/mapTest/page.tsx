'use client';

import { IconFilter, IconReset } from '@/public/svgs';
import DetailPanel from './_components/DetailPanel';
import useMediaQueries from '@/hooks/useMediaQueries';
import Selectable from '@/components/Dropdown/Selectable';
import ModalForMobile from '@/components/Modal/ModalForMobile';
import Button from '@/components/Button';
import { useState } from 'react';

function Page() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;

  const handleClick = () => {
    setIsDropdownVisible(true);
  };

  return (
    <div className='h-screen w-full bg-gray-500'>
      {isMobile ? (
        <>
          <button
            type='button'
            onClick={handleClick}
            className='flex-center h-48pxr w-56pxr cursor-pointer gap-4pxr rounded-full bg-white font-medium '
          >
            <IconFilter />
          </button>
          {isDropdownVisible && (
            <ModalForMobile
              headerContent='상세 보기'
              onClose={() => setIsDropdownVisible(false)}
              footerContent={
                <div className='text-right'>
                  <div className='lineOver text-gray600 font-body2-semibold'>
                    모닥불,바베큐 어쩌구 저쩌구모닥불,바베큐 어쩌구 값선택한
                    값값선택한 값값선택한 값값선택한 값값선택한 값값선택한 값
                  </div>
                  <div className='flex-center h-88pxr justify-between gap-16pxr border-t border-b-white  mobile:border-0'>
                    <div className='flex-center  gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
                      초기화
                      <IconReset fill='#C8C8C8' />
                    </div>
                    <Button.Round
                      size='sm'
                      custom='!w-174pxr !h-56pxr'
                      onClick={() => {}}
                    >
                      적용
                    </Button.Round>
                  </div>
                </div>
              }
            >
              <div className='flex gap-6pxr mobile:w-full mobile:flex-col mobile:gap-0pxr mobile:border-b'>
                <Selectable types='stay'>숙박 유형</Selectable>
                <Selectable types='home'>시설</Selectable>
                <Selectable>가격</Selectable>
                <Selectable types='theme'>테마</Selectable>
                <Selectable types='trip'>여행 타입</Selectable>
              </div>
            </ModalForMobile>
          )}
        </>
      ) : (
        <DetailPanel />
      )}
    </div>
  );
}

export default Page;

/* <div className='flex flex-col gap-6pxr'>
            <Selectable types='stay'>숙박 유형</Selectable>
            <Selectable types='home'>시설</Selectable>
            <Selectable>가격</Selectable>
            <Selectable types='theme'>테마</Selectable>
            <Selectable types='trip'>여행 타입</Selectable>
          </div> */
