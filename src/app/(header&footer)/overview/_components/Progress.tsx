import React from 'react';

function Progress() {
  return (
    <li className='relative h-46pxr'>
      <progress
        id='progress'
        value='50'
        max='100'
        className='w-full'
      ></progress>
      <h3 className='absolute left-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
        깨끗해요
      </h3>
      <span className='absolute right-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
        1923
      </span>
    </li>
  );
}

export default Progress;
