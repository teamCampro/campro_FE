'use client';

import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import { CommonForm } from '@/components/index';
import OwnerInputList from '../../../_components/OwnerInputList';

function InformationPage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>사장님! 캠핑장의 설명을 입력해주세요</OwnerTitle>
      <CommonForm onSubmit={() => console.log('서밋 테스트')}>
        <OwnerInputList />
      </CommonForm>
    </div>
  );
}

export default InformationPage;
