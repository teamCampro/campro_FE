'use client';

import Button from '@/components/Button';
import { Site } from '../[id]/page';

interface CampSiteItemProps {
  sites: Site[];
}

function CampSiteItem({ sites }: CampSiteItemProps) {
  return (
    <div className='flex flex-col gap-12pxr'>
      {sites.map(
        ({ siteId, name, price, checkInTime, checkOutTime, minStay }) => (
          <div
            key={siteId}
            className='flex flex-col gap-12pxr rounded-xl bg-white p-16pxr'
          >
            <div className='flex flex-col'>
              <div className='flex items-center justify-between'>
                <h6 className='font-body1-bold'>{name}</h6>
                <span className='text-nowrap text-black font-body1-bold mobile:font-title3-semibold'>
                  {price.toLocaleString('ko-KR', { maximumFractionDigits: 4 })}
                  원
                </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-gray500 font-caption2-medium'>
                  입실 {checkInTime} - 퇴실 {checkOutTime}
                </span>
                <span className='text-gray500 font-caption2-medium'>
                  {minStay}
                </span>
              </div>
            </div>

            <div className='ml-auto mobile:m-0pxr'>
              <Button.Round
                size='sm'
                custom={`w-98pxr !h-36pxr font-caption1-semibold text-white px-24pxr py-8xr mobile:w-full`}
              >
                선택하기
              </Button.Round>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default CampSiteItem;
