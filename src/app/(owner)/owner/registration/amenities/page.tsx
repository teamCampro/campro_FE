'use client';

import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import AMENITIES_CONFIG from '../../../_constants/ownerAmenitiesButtons';
import useSelectedButtons from '../../../_hooks/useSelectedButtons';

function AmenitiesPage() {
  const { selectedButtons, handleSelectedButtons } = useSelectedButtons();

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>사용할 수 있는 부대시설을 알려주세요!</OwnerTitle>
      <div className='grid-row-auto grid grid-cols-3 gap-x-35pxr gap-y-15pxr'>
        <OwnerButtonList
          pageName='amenities'
          config={AMENITIES_CONFIG}
          selectedButtons={selectedButtons}
          onClick={handleSelectedButtons}
        />
      </div>
    </div>
  );
}

export default AmenitiesPage;
