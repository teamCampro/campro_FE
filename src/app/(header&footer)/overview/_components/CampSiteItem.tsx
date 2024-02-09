import Button from '@/components/Button';
import { IconTest } from '@/public/svgs';

interface CampSiteItemProps {
  siteInfo: {
    campingZoneName: string;
    siteName: string;
    reserveTime: string;
    fee: number;
    feeBaseDate: string;
  };
}

function CampSiteItem({ siteInfo }: CampSiteItemProps) {
  const { campingZoneName, siteName, reserveTime, fee, feeBaseDate } = siteInfo;
  return (
    <div className='flex flex-col gap-12pxr'>
      <div className='flex h-32pxr justify-between'>
        <h4 className='text-gray600 font-title3-semibold mobile:font-body2-semibold'>
          {campingZoneName}
        </h4>
        <span className='flex items-end gap-2pxr text-second100 font-caption1-semibold'>
          상세정보
          <IconTest />
        </span>
      </div>
      <div className='flex flex-col gap-12pxr rounded-xl bg-white p-16pxr'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
            <h6 className='font-body1-bold'>{siteName}</h6>
            <span className='text-gray500 font-caption2'>{reserveTime}</span>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-black font-body1-bold'>
              {fee.toLocaleString('ko-KR', { maximumFractionDigits: 4 })}원
            </h4>
            <span className='ml-auto text-gray500 font-caption2'>
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
    </div>
  );
}

export default CampSiteItem;
