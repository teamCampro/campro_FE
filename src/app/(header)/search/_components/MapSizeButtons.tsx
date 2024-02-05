'use client';

import useDropdown from '@/hooks/useDropdown';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import { MAP_SIZES } from '@/src/app/_constants';
import { ReactNode, useState } from 'react';
import { MapSizeType } from '../page';

interface Props {
  handleMapSize: (mapSize: MapSizeType) => void;
}

interface MapSizesProps {
  text: string;
  mobileText: string;
  mapSize: MapSizeType;
  icon: ReactNode;
}

function MapSizeButtons({ handleMapSize }: Props) {
  const [selectedMapSize, setSelectedMapSize] = useState(MAP_SIZES[0]);
  const { isOpen, toggleDropdown, closeDropdown, wrapperRef } = useDropdown();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const handleAdditionalButtonClick = (mapSize: MapSizesProps) => {
    setSelectedMapSize(mapSize);
    handleMapSize(mapSize.mapSize);
    closeDropdown();
  };

  const shouldHideItem = (map: MapSizesProps) => {
    if (isMobile) {
      return (
        map.mobileText === selectedMapSize.mobileText || map.mapSize === 'half'
      );
    }
    return map.mapSize === selectedMapSize.mapSize;
  };

  return (
    <div
      ref={wrapperRef}
      className='flex-center fixed bottom-24pxr left-2/4 z-[99] flex -translate-x-2/4 flex-col gap-8pxr'
    >
      <ul className='flex w-127pxr flex-col gap-8pxr'>
        {isOpen &&
          MAP_SIZES.map((map) => (
            <li
              key={map.mapSize}
              className={shouldHideItem(map) ? 'hidden' : ''}
            >
              <button
                type='button'
                onClick={() => handleAdditionalButtonClick(map)}
                className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 font-body2 hover:text-primary100 mobile:text-gray700`}
              >
                {isMobile ? map.mobileText : map.text}
                <span className='ml-auto'>{map.icon}</span>
              </button>
            </li>
          ))}
      </ul>
      <button
        type='button'
        onClick={toggleDropdown}
        className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 transition-all font-body2 mobile:text-gray700 ${isOpen && 'border border-primary100 text-primary100 mobile:text-primary100'}`}
      >
        {isMobile ? selectedMapSize.mobileText : selectedMapSize.text}
        <span className='pointer-events-none ml-auto'>
          {isOpen ? <IconArrowDown /> : <IconArrowUp />}
        </span>
      </button>
    </div>
  );
}

export default MapSizeButtons;
