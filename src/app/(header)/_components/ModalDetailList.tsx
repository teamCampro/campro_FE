'use client';

import { IconFilter, IconReset } from '@/public/svgs';

import useMediaQueries from '@/hooks/useMediaQueries';
import Selectable from '@/components/Dropdown/Selectable';
import ModalForMobile from '@/components/Modal/ModalForMobile';
import Button from '@/components/Button';
import { useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { useDispatch } from 'react-redux';

import DetailPanel from './DetailPanel';
import { setDetailState } from '@/src/app/_utils/detailState';
import { isModal } from '@/src/app/_utils/modalState';

function Page() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const selectArray: string[] = [];
  const details = useAppSelector((state) => state.detail);
  const checkList = useAppSelector((state) => state.styleSetting);
  const dispatch = useDispatch();

  const handleDropClick = (id: number) => {
    dispatch(setDetailState(id));
  };

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const handleOpen = () => {
    setIsDropdownVisible(true);
    dispatch(isModal(true));
  };

  const handleClose = () => {
    setIsDropdownVisible(false);
    dispatch(isModal(false));
  };

  details.forEach((detail) => {
    const { name } = detail;
    if (name !== 'prices' && checkList.select[name]) {
      checkList.select[name].map((list) => {
        selectArray.push(list.type);
      });
    }
  });

  return (
    <div className='h-screen w-full bg-gray-500'>
      {isMobile ? (
        <>
          <button
            type='button'
            onClick={handleOpen}
            className='flex-center h-48pxr w-56pxr cursor-pointer gap-4pxr rounded-full bg-white font-medium'
          >
            <IconFilter />
          </button>
          {isDropdownVisible && (
            <ModalForMobile
              headerContent='상세 보기'
              onClose={handleClose}
              footerContent={
                <div className='text-right'>
                  <div className='lineOver text-gray600 font-body2-semibold'>
                    {selectArray.join(', ')}
                  </div>
                  <div className='flex-center h-88pxr justify-between gap-16pxr border-t border-b-white  mobile:border-0'>
                    <div className='flex-center  gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
                      초기화
                      <IconReset fill='#C8C8C8' />
                    </div>
                    <Button.Round
                      size='sm'
                      custom='!w-174pxr !h-56pxr'
                      onClick={() => setIsDropdownVisible(false)}
                    >
                      적용
                    </Button.Round>
                  </div>
                </div>
              }
            >
              <div className='flex gap-6pxr mobile:w-full mobile:flex-col mobile:gap-0pxr mobile:border-b'>
                {details.map((detail) => {
                  return (
                    <Selectable
                      key={detail.id}
                      handleDropClick={handleDropClick}
                      typeInfo={detail}
                    >
                      {detail.type}
                    </Selectable>
                  );
                })}
              </div>
            </ModalForMobile>
          )}
        </>
      ) : (
        <DetailPanel handleDropClick={handleDropClick} />
      )}
    </div>
  );
}

export default Page;
