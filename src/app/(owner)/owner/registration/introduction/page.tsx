'use client';
import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerTextArea from '../../../_components/OwnerTextArea';

function IntroductionPage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장 소개글을 작성해주세요 !</OwnerTitle>
      <OwnerTextArea
        title='소개글'
        placeholder='소개글을 작성 해주세요'
        name='introduction'
      />
    </div>
  );
}

export default IntroductionPage;
