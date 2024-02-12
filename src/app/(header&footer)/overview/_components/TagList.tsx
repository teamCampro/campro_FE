'use client';

import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import { useState } from 'react';
import Progress from './Progress';

function TagList() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='mt-32pxr flex flex-col gap-12pxr border-b border-b-gray200 pb-24pxr'>
      <div className='flex items-center justify-between'>
        <h3 className='text-gray-600 font-body2-semibold'>
          {'"청결도 만족도가 높은 곳이에요"'}
        </h3>
        <button
          type='button'
          className='flex-center text-gray500 font-caption1-medium'
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? '접기' : '전체보기'}
          <span className='inline-block h-16pxr w-16pxr'>
            {showAll ? (
              <IconArrowUp width='100%' height='100%' viewBox='0 0 24 24' />
            ) : (
              <IconArrowDown width='100%' height='100%' viewBox='0 0 24 24' />
            )}
          </span>
        </button>
      </div>
      <Progress showAll={showAll} />
    </div>
  );
}

export default TagList;
