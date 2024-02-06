'use client';

import { IconNavigationLeft, IconNavigationRight } from '@/public/svgs';
import { useState } from 'react';
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

interface Props {
  currentPage: number;
  totalItems: number;
  onUpdatePage: (pageNumber: number) => void;
}

function SearchPagination({ currentPage, totalItems, onUpdatePage }: Props) {
  const [selected, setSelected] = useState(1);

  const handleClickPage = (p: number) => {
    setSelected(p);
    onUpdatePage(p);
  };

  const pages = Array.from(
    { length: Math.ceil(totalItems / 18) },
    (x, i) => i + 1,
  );

  return (
    <div className='flex-center gap-20pxr text-gray500'>
      <button type='button' disabled={currentPage === 1 ? true : false}>
        <IconNavigationLeft onClick={() => handleClickPage(currentPage - 1)} />
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            type='button'
            className={`px-8pxr py-2pxr font-caption1 ${selected === page ? 'rounded-xl bg-gray100 text-gray800 font-caption1-semibold' : ''}`}
            onClick={() => handleClickPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        type='button'
        disabled={currentPage === Math.ceil(totalItems / 18) ? true : false}
      >
        <IconNavigationRight onClick={() => handleClickPage(currentPage + 1)} />
      </button>
    </div>
  );
}

export default SearchPagination;
