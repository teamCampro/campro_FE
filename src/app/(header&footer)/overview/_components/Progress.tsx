import React from 'react';

interface Props {
  keywordPercentage: string;
  keyword: string;
  keywordCount: string;
}

function Progress({ keywordPercentage, keyword, keywordCount }: Props) {
  return (
    <li className='relative h-46pxr'>
      <progress
        id='progress'
        value={keywordPercentage}
        max='100'
        className='w-full'
      ></progress>
      <h3 className='absolute left-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
        {keyword}
      </h3>
      <span className='absolute right-16pxr top-1/2 -translate-y-1/2 font-body2-semibold'>
        {keywordCount}
      </span>
    </li>
  );
}

export default Progress;
