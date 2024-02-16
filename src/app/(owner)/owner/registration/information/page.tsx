'use client';

import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import { CommonForm } from '@/components/index';
import OwnerInputList from '../../../_components/OwnerInputList';
import OWNER_INFORMATION_INPUTS from '../../../_constants/ownerInformationInputs';

function InformationPage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>사장님! 캠핑장의 설명을 입력해주세요</OwnerTitle>
      <CommonForm onSubmit={() => console.log('서밋 테스트')}>
        <OwnerInputList listData={OWNER_INFORMATION_INPUTS} />
      </CommonForm>
    </div>
  );
}

export default InformationPage;
