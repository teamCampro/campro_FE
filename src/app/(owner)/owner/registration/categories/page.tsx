'use client';
import React, { useEffect } from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import useSelectedButtons from '../../../_hooks/useSelectedButtons';
import CAMPING_CATEGORIES from '../../../_constants/ownerCampingCategories';

function CategoriesPage() {
  const { selectedButtons, handleSelectedButtons } = useSelectedButtons();

  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>캠핑장 유형을 선택 해주세요.</OwnerTitle>
      <div className='grid grid-cols-3 grid-rows-2 gap-x-35pxr gap-y-15pxr'>
        <OwnerButtonList
          pageName='categories'
          config={CAMPING_CATEGORIES}
          selectedButtons={selectedButtons}
          onClick={handleSelectedButtons}
        />
      </div>
    </div>
  );
}

export default CategoriesPage;
