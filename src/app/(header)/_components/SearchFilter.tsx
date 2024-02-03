import { Button, ModalForMobile } from '@/components/index';
import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconFilter, IconReset } from '@/public/svgs';
import { setDetailState } from '@/src/app/_utils/detailState';
import { isModal } from '@/src/app/_utils/modalState';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import DetailPanel from './DetailPanel';
import { MapSizeType } from '../search/page';

function SearchFilter({
  mapSize,
  handleMapSize,
}: {
  mapSize: string;
  handleMapSize: (mapSize: MapSizeType) => void;
}) {
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
    <div className='relative'>
      <>
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
                <div className='text-right mobile:w-full'>
                  <div className='lineOver text-gray600 font-body2-semibold'>
                    {selectArray.join(', ')}
                  </div>
                  <div className='flex-center h-88pxr justify-between gap-16pxr border-t border-b-white  mobile:border-0'>
                    <div className='flex-center gap-4pxr whitespace-nowrap pl-12pxr pr-6pxr text-gray500 font-title3-semibold'>
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
              </>
            }
          >
            <DetailPanel handleDropClick={handleDropClick} />
          </ModalForMobile>
        )}
      </>
    </div>
  );
}

export default SearchFilter;
