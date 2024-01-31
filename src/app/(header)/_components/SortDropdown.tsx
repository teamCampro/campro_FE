'use client';

import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import { useState } from 'react';

interface SortingOrder {
  key: string;
  text: string;
}

const orders = [
  { key: 'recommended', text: '추천순' },
  { key: 'popularity', text: '인기순' },
  { key: 'highest', text: '가격 높은 순' },
  { key: 'lowest', text: '가격 낮은 순' },
  { key: 'rating', text: '평점 높은 순' },
];

function SortDropdown() {
  const [selected, setSelected] = useState(orders[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: SortingOrder) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className='ml-auto'>
      <button
        type='button'
        className='relative flex text-gray500 font-body2 mobile:font-caption2-semibold tablet:font-caption2-semibold'
        onClick={handleToggleDropdown}
      >
        {selected.text}
        {isOpen ? <IconNavigationUp /> : <IconNavigationDown />}
      </button>
      {isOpen && (
        <div className='flex-center absolute left-0pxr z-10 flex-col bg-white'>
          {orders
            .filter((option) => option.key !== selected.key)
            .map((option) => (
              <button
                key={option.key}
                type='button'
                className='font-body2 mobile:font-caption2-semibold tablet:font-caption2-semibold'
                onClick={() => handleSelectOption(option)}
              >
                {option.text}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default SortDropdown;
