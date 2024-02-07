import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerImageInput from '../../../_components/OwnerImageInput';

function UploadImagePage() {
  const ownerImageInputs = Array.from({ length: 4 }, (_, index) => (
    <OwnerImageInput key={index} />
  ));

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장을 대표하는 사진들을 업로드 해주세요 !</OwnerTitle>
      <div className='flex flex-col items-center gap-70pxr'>
        <OwnerImageInput type='large' />
        <div className='grid grid-cols-2 grid-rows-2 gap-70pxr'>
          {ownerImageInputs}
        </div>
      </div>
    </div>
  );
}

export default UploadImagePage;
