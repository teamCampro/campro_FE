import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import React, { useState } from 'react';
import CampSiteBookingInfo from './CampSiteBookingInfo';
import CampZoneList from './CampSiteList';

interface ReservationInfoProps {
  sectionRef: React.RefObject<HTMLDivElement>;
  id: string;
  campingZoneInfos: CampSiteListProps[];
}

interface CampSiteListProps {
  campingZoneName: string;
  siteInfos: {
    siteName: string;
    reserveTime: string;
    fee: number;
    feeBaseDate: string;
  }[];
}

function ReservationInfo({
  sectionRef,
  id,
  campingZoneInfos,
}: ReservationInfoProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <section
      ref={sectionRef}
      id={id}
      className='flex scroll-mt-168pxr flex-col gap-24pxr'
    >
      <CampSiteBookingInfo />
      {(showAll ? campingZoneInfos : campingZoneInfos.slice(0, 2)).map(
        (campingZone) => (
          <CampZoneList
            campingZone={campingZone}
            key={campingZone.campingZoneName}
          />
        ),
      )}
      <div className='contents mobile:block mobile:px-36pxr mobile359:px-16pxr'>
        <button
          type='button'
          className='flex-center w-full gap-10pxr rounded-lg border border-gray200 bg-white px-40pxr py-12pxr text-gray700 font-caption1-semibold'
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? '접기' : '모두보기'}
          <span className='mobile:hidden tablet:hidden'>
            {showAll ? <IconNavigationUp /> : <IconNavigationDown />}
          </span>
        </button>
      </div>
    </section>
  );
}

export default ReservationInfo;
