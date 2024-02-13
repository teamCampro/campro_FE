'use client';

import Button from '@/components/Button';

interface CampSiteItemProps {
  siteInfos: {
    siteName: string;
    reserveTime: string;
    fee: number;
    feeBaseDate: string;
  }[];
}

function CampSiteItem({ siteInfos }: CampSiteItemProps) {
  return (
    <div className='flex flex-col gap-12pxr'>
      {siteInfos.map(({ siteName, reserveTime, fee, feeBaseDate }) => (
        <div
          key={siteName}
          className='flex flex-col gap-12pxr rounded-xl bg-white p-16pxr'
        >
          <div className='flex flex-col'>
            <div className='flex items-center justify-between'>
              <h6 className='font-body1-bold'>{siteName}</h6>
              <span className='text-nowrap text-black font-body1-bold mobile:font-title3-semibold'>
                {fee.toLocaleString('ko-KR', { maximumFractionDigits: 4 })}원
              </span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-gray500 font-caption2-medium'>
                {reserveTime}
              </span>
              <span className='text-gray500 font-caption2-medium'>
                {feeBaseDate}
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
      ))}
    </div>
  );
}

export default CampSiteItem;
