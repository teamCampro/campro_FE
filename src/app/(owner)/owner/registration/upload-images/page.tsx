'use client';

import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerImageUploader from '../../../_components/OwnerImageUploader';
import { TEN_IMAGES } from '../../../_constants/common';

function UploadImagePage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장을 대표하는 사진들을 업로드 해주세요 !</OwnerTitle>
      <div className='flex flex-col items-center gap-70pxr'>
        <OwnerImageUploader maxImages={TEN_IMAGES} />
      </div>
    </div>
  );
}

export default UploadImagePage;
