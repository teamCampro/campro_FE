'use client';
import React, { useEffect } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import useSelectedButtons from '../../../_hooks/useSelectedButtons';
import CAMPING_ENVIRONMENT from '../../../_constants/ownerCampingEnvironment';

function EnvironmentPage() {
  const { selectedButtons, handleSelectedButtons } = useSelectedButtons();

  useEffect(() => {
    localStorage.setItem(
      'environment',
      JSON.stringify(selectedButtons.environment),
    );
  }, [selectedButtons.environment]);

  useEffect(() => {
    localStorage.setItem(
      'ownerOnboarding',
      JSON.stringify(selectedButtons.ownerOnboarding),
    );
  }, [selectedButtons.ownerOnboarding]);

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장 주변 환경을 선택 해주세요.</OwnerTitle>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-35pxr gap-y-15pxr'>
        <OwnerButtonList
          pageName='environment'
          config={CAMPING_ENVIRONMENT}
          selectedButtons={selectedButtons}
          onClick={handleSelectedButtons}
          isSingleSelection
        />
      </div>
    </div>
  );
}

export default EnvironmentPage;
