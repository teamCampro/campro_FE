import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import themeConfig from '../../../_constants/ownerListButtons';
import OwnerButtonList from '../../../_components/OwnerButtonList';

function ThemePage() {
  return (
    <div className='flex flex-col items-center gap-110pxr'>
      <OwnerTitle>
        사장님이 생각하시는 우리 캠핑장의 테마를 선택해주세요!
      </OwnerTitle>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-35pxr gap-y-15pxr'>
        <OwnerButtonList config={themeConfig} />
      </div>
    </div>
  );
}

export default ThemePage;
