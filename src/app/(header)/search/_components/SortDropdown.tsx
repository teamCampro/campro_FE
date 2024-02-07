'use client';

import useDropdown from '@/hooks/useDropdown';
import { IconNavigationDown } from '@/public/svgs';
import { SEARCH_ORDERS } from '@/src/app/_constants';
import { useState } from 'react';

function SortDropdown() {
  const [selected, setSelected] = useState(SEARCH_ORDERS[0]);

  const { isOpen, toggleDropdown, wrapperRef } = useDropdown();

  return (
    <div className='relative ml-auto w-104pxr' ref={wrapperRef}>
      <button
        type='button'
        className='flex w-full items-center justify-end text-gray500 font-body2 mobile:font-caption2-semibold tablet:font-body2'
        onClick={toggleDropdown}
      >
        {selected.text}
        <IconNavigationDown />
      </button>
      {isOpen && (
        <ul className='left-0 flex-center absolute top-full z-[99] mt-4pxr w-104pxr flex-col gap-4pxr rounded-md bg-white shadow-md'>
          {SEARCH_ORDERS.map(
            (option) =>
              option.key !== selected.key && (
                <li key={option.key} className='flex w-full'>
                  <button
                    type='button'
                    className='flex-1 items-center text-nowrap px-12pxr text-right text-gray500 font-body2 hover:bg-gray100 mobile:font-caption2-semibold tablet:font-body2'
                    onClick={() => setSelected(option)}
                  >
                    {option.text}
                  </button>
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
}

export default SortDropdown;
