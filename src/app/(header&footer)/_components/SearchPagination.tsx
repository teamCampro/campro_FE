'use client';

import { IconNavigationLeft, IconNavigationRight } from '@/public/svgs';
import { useState } from 'react';
const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function Pagination() {
  const [selected, setSelected] = useState(1);
  return (
    <div className='flex-center gap-20pxr text-gray500'>
      <button type='button'>
        <IconNavigationLeft />
      </button>
      <div>
        {pages.map((page) => (
          <button
            key={page}
            type='button'
            className={`px-8pxr py-2pxr font-caption1 ${selected === page ? 'rounded-xl bg-gray100 text-gray800 font-caption1-semibold' : ''}`}
            onClick={() => setSelected(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button type='button'>
        <IconNavigationRight />
      </button>
    </div>
  );
}

export default Pagination;
