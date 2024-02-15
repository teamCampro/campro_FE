import React from 'react';
import OwnerTitle from '../../../_components/OwnerTitle';
import OwnerButtonList from '../../../_components/OwnerButtonList';
import periodConfig from '../../../_constants/ownerOperatingPeriod';
import daysConfig from '../../../_constants/ownerOperatingDays';

function OperatingPeriodPage() {
  return (
    <div className='m-auto flex w-731pxr flex-col items-center gap-110pxr'>
      <OwnerTitle>운영 기간과 운영일을 알려주세요 !</OwnerTitle>
      <div className='flex flex-col gap-46pxr'>
        <div className='flex flex-col gap-10pxr'>
          <div className='flex items-center justify-between'>
            <span className='text-20pxr font-semibold'>운영 기간</span>
            <button className='text-14pxr font-medium'>전체선택</button>
          </div>
          <div className='flex gap-17pxr'>
            <OwnerButtonList
              pageName='operating_period'
              config={periodConfig}
              buttonType='small'
            />
          </div>
        </div>
        <div className='flex self-start'>
          <div className='flex flex-col gap-10pxr'>
            <span className='text-20pxr font-semibold'>운영일</span>
            <div className='flex gap-17pxr'>
              <OwnerButtonList
                pageName='operating_days'
                config={daysConfig}
                buttonType='small'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OperatingPeriodPage;
