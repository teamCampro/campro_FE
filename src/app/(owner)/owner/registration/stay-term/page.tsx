'use client';
import React from 'react';
import useSelectedButtons from '../../../_hooks/useSelectedButtons';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import STAY_TERM from '../../../_constants/ownerStayTerm';

function StayTermPage() {
  const { selectedButtons, handleSelectedButtons } = useSelectedButtons();

  return (
    <div>
      <div className='flex flex-col items-center gap-110pxr'>
        <OwnerTitle>선호하는 손님들의 숙박 기간을 알려주세요</OwnerTitle>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-35pxr gap-y-15pxr'>
          <OwnerButtonList
            pageName='stayTerm'
            config={STAY_TERM}
            selectedButtons={selectedButtons}
            onClick={handleSelectedButtons}
            isSingleSelection
          />
        </div>
      </div>
    </div>
  );
}

export default StayTermPage;
