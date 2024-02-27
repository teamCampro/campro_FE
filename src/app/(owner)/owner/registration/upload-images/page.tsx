'use client';

import React, { useEffect } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerImageUploader from '../../../_components/OwnerImageUploader';
import { TEN_IMAGES } from '../../../_constants/common';
import useControlImages from '../../../_hooks/useControlImages';

function UploadImagePage() {
  const { images, handleSetImages } = useControlImages();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const localStorageImages = localStorage.getItem('uploadImages');

    if (localStorageImages) {
      handleSetImages(JSON.parse(localStorageImages));
    }
  }, []);

  useEffect(() => {
    if (images.length !== 0) {
      localStorage.setItem('uploadImages', JSON.stringify(images));
    }
  }, [images]);

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장을 대표하는 사진들을 업로드 해주세요 !</OwnerTitle>
      <div className='flex flex-col items-center gap-70pxr'>
        <OwnerImageUploader
          maxImages={TEN_IMAGES}
          images={images}
          onSetImages={handleSetImages}
        />
      </div>
    </div>
  );
}

export default UploadImagePage;
