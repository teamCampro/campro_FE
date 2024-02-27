'use client';

import { IconArrowDown, IconArrowUp } from '@/public/svgs';
import { useState } from 'react';
import Progress from './Progress';

interface TagListProps {
  tag: {
    text: string;
    list: { text: string; count: number }[];
  };
}

function TagList({ tag }: TagListProps) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='flex flex-col gap-12pxr border-b border-b-gray200 pb-24pxr'>
      <div className='flex items-center justify-between'>
        <h3 className='text-gray-600 font-body2-semibold'>{tag.text}</h3>
        <button
          type='button'
          className='flex-center text-gray500 font-caption1-medium'
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? '접기' : '전체보기'}
          <span className='inline-block h-16pxr w-16pxr'>
            {showAll ? (
              <IconArrowUp
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                className='fill-gray500'
              />
            ) : (
              <IconArrowDown
                width='100%'
                height='100%'
                viewBox='0 0 24 24'
                className='fill-gray500'
              />
            )}
          </span>
        </button>
      </div>
      <Progress showAll={showAll} tagList={tag.list} />
    </div>
  );
}

export default TagList;
