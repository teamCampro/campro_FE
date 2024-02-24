'use client';
import React, { useEffect } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import CAMPING_ACTIVITIES from '../../../_constants/ownerCampingActivities';
import useSelectedButtons from '../../../_hooks/useSelectedButtons';

function ActivitiesPage() {
  const { selectedButtons, handleSelectedButtons } = useSelectedButtons();

  return (
    <div>
      <div className='flex flex-col items-center gap-110pxr'>
        <OwnerTitle>캠핑장에서 할 수 있는 활동을 모두 선택해주세요</OwnerTitle>
        <div className='grid grid-cols-3 grid-rows-2 gap-x-35pxr gap-y-15pxr'>
          <OwnerButtonList
            pageName='activities'
            config={CAMPING_ACTIVITIES}
            selectedButtons={selectedButtons}
            onClick={handleSelectedButtons}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivitiesPage;
