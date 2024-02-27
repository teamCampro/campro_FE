'use client';

import React, { useEffect } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerImageUploader from '../../../_components/OwnerImageUploader';
import { ONE_IMAGE } from '../../../_constants/common';
import useControlImages from '../../../_hooks/useControlImages';

function UploadSiteImage() {
  const { images, handleSetImages } = useControlImages();

  useEffect(() => {
    localStorage.setItem('uploadSiteImage', images[0] || '');
  }, [images]);

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장 배치도 사진을 업로드 해주세요 !</OwnerTitle>
      <div className='flex flex-col items-center gap-70pxr'>
        <OwnerImageUploader
          maxImages={ONE_IMAGE}
          images={images}
          onSetImages={handleSetImages}
        />
      </div>
    </div>
  );
}

export default UploadSiteImage;
