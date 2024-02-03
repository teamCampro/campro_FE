'use client';

import useDropdown from '@/hooks/useDropdown';
import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import { MAP_SIZES } from '@/src/app/_constants';
import { useState } from 'react';
import { MapSizeType } from '../page';

interface Props {
  handleMapSize: (mapSize: MapSizeType) => void;
}

function MapSizeButtons({ handleMapSize }: Props) {
  const [mainButton, setMainButton] = useState(MAP_SIZES[0].text);
  const { isOpen, toggleDropdown, wrapperRef } = useDropdown();

  const handleAdditionalButtonClick = ({
    text,
    mapSize,
  }: {
    text: string;
    mapSize: MapSizeType;
  }) => {
    setMainButton(text);
    handleMapSize(mapSize);
  };

  return (
    <div
      ref={wrapperRef}
      className='flex-center fixed bottom-24pxr left-2/4 z-[99] flex -translate-x-2/4 flex-col gap-8pxr'
    >
      <ul className='flex w-127pxr flex-col gap-8pxr'>
        {isOpen &&
          MAP_SIZES.map(
            ({ text, mapSize, icon }) =>
              text !== mainButton && (
                <li key={text}>
                  <button
                    type='button'
                    onClick={() =>
                      handleAdditionalButtonClick({ text, mapSize })
                    }
                    className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 font-body2 hover:text-primary100 mobile:text-gray700`}
                  >
                    {text}
                    <span className='ml-auto'>{icon}</span>
                  </button>
                </li>
              ),
          )}
      </ul>
      <button
        type='button'
        onClick={toggleDropdown}
        className={`flex-center h-48pxr w-full gap-4pxr text-nowrap rounded-full border border-gray300 bg-white py-12pxr pl-20pxr pr-14pxr text-gray600 transition-all font-body2 mobile:text-gray700 ${isOpen && 'border border-primary100 text-primary100'}`}
      >
        {mainButton}
        <span className='ml-auto'>
          {isOpen ? <IconArrowDown /> : <IconArrowUp />}
        </span>
      </button>
    </div>
  );
}

export default MapSizeButtons;
