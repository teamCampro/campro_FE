'use client';

import React, { useState } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerImageInput from '../../../_components/OwnerImageInput';
import OwnerImageUploader from '../../../_components/OwnerImageUploader';

function UploadImagePage() {
  const [imageList, setImageList] = useState([]);
  const ownerImageInputs = Array.from({ length: 4 }, (_, index) => (
    <OwnerImageInput key={index} />
  ));

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장을 대표하는 사진들을 업로드 해주세요 !</OwnerTitle>
      <div className='flex flex-col items-center gap-70pxr'>
        <OwnerImageUploader />
      </div>
    </div>
  );
}

export default UploadImagePage;
