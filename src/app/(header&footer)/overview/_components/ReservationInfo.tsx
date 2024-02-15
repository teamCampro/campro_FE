import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import { useState } from 'react';
import { CampSite } from '../[id]/page';
import CampSiteBookingInfo from './CampSiteBookingInfo';
import CampZoneList from './CampSiteList';

function ReservationInfo({
  campingZones,
  openTime,
  nextOpen,
  mannerTimeStart,
  mannerTimeEnd,
}: CampSite) {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className='flex flex-col gap-24pxr'>
      <CampSiteBookingInfo
        openTime={openTime}
        nextOpen={nextOpen}
        mannerTimeStart={mannerTimeStart}
        mannerTimeEnd={mannerTimeEnd}
      />
      {(showAll ? campingZones : campingZones.slice(0, 2)).map(
        (campingZone) => (
          <CampZoneList campingZone={campingZone} key={campingZone.name} />
        ),
      )}
      {campingZones.length > 2 && (
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
      )}
    </section>
  );
}

export default ReservationInfo;
