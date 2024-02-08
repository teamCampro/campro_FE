import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';

function IntroductionPage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장 소개글을 작성해주세요 !</OwnerTitle>
      <div className='flex flex-col gap-13pxr'>
        <span className='flex text-20pxr font-semibold '>소개글</span>
        <div className='h-419pxr w-1060pxr '>
          <textarea
            placeholder='캠핑장 소개글을 작성해주세요'
            className='h-333pxr w-990pxr rounded-2xl border border-gray500 px-35pxr py-43pxr text-18pxr focus:border-2 focus:border-black focus:px-34pxr focus:py-42pxr focus:outline-none'
          />
        </div>
      </div>
    </div>
  );
}

export default IntroductionPage;
