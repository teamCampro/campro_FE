'use client';

import useDropdown from '@/hooks/useDropdown';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import MAP_OPTIONS from '@/src/app/_constants/mapOptions';
import { ReactNode, useState } from 'react';
import { MapSizeType } from '../page';

interface Props {
  handleMapSize: (mapSize: MapSizeType) => void;
}

interface MapOptionProps {
  text: string;
  mapSize: MapSizeType;
  mobileIcon?: ReactNode;
  icon: ReactNode;
}

function MapSizeButtons({ handleMapSize }: Props) {
  const [currentMap, setCurrentMap] = useState(MAP_OPTIONS[0]);
  const { isOpen, toggleDropdown, closeDropdown, wrapperRef } = useDropdown();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const handleFloatingButtonClick = (mapSize: MapOptionProps) => {
    setCurrentMap(mapSize);
    handleMapSize(mapSize.mapSize);
    closeDropdown();
  };

  const getVisibilityClass = ({ mobileIcon, mapSize }: MapOptionProps) => {
    const classes = [];
    if (mobileIcon || (currentMap.mobileIcon && mapSize === 'list'))
      classes.push('mobile:hidden');
    if (!isOpen || mapSize === currentMap.mapSize) classes.push('hidden');
    return classes.join(' ');
  };

  return (
    <div
      ref={wrapperRef}
      className='flex-center fixed bottom-24pxr right-26pxr z-[99] flex w-127pxr flex-col gap-8pxr mobile:bottom-20pxr mobile:right-16pxr mobile:w-56pxr tablet:bottom-20pxr tablet:w-56pxr'
    >
      <ul className='flex w-full flex-col gap-8pxr'>
        {MAP_OPTIONS.map((option) => (
          <li key={option.mapSize} className={`${getVisibilityClass(option)}`}>
            <button
              type='button'
              onClick={() => handleFloatingButtonClick(option)}
              className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 font-body2-medium hover:text-primary100 mobile:w-auto mobile:px-15pxr mobile:text-gray700 tablet:w-auto tablet:px-15pxr`}
            >
              <span className='mobile:hidden tablet:hidden'>{option.text}</span>
              <span className='ml-auto'>{option.icon}</span>
            </button>
          </li>
        ))}
      </ul>

      <button
        type='button'
        onClick={toggleDropdown}
        className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 font-body2-medium mobile:px-15pxr mobile:text-gray700 tablet:px-15pxr ${isOpen ? 'mobile:border-gray30 border border-primary100 text-primary100 mobile:border-gray300 mobile:text-primary100 tablet:border-gray300' : ''}`}
      >
        <span className='mobile:hidden tablet:hidden'>{currentMap.text}</span>
        <span className='pointer-events-none ml-auto mobile:hidden tablet:hidden'>
          {isOpen ? <IconArrowDown /> : <IconArrowUp />}
        </span>
        <span className='hidden hover:text-primary100 mobile:block tablet:block'>
          {isMobile
            ? currentMap.mobileIcon || currentMap.icon
            : currentMap.icon}
        </span>
      </button>
    </div>
  );
}

export default MapSizeButtons;
