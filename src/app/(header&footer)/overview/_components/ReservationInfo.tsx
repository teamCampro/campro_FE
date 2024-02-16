import { ModalOutside, ModalPortal } from '@/components/index';
import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import { useState } from 'react';
import { CampSite, Site } from '../[id]/page';
import CampSiteBookingInfo from './CampSiteBookingInfo';
import CampSiteDetail from './CampSiteDetail';
import CampSiteItem from './CampSiteItem';

function ReservationInfo({
  campingZones,
  openTime,
  nextOpen,
  mannerTimeStart,
  mannerTimeEnd,
}: CampSite) {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sites = campingZones
    .map((campingZone) =>
      campingZone.sites.map((site) => ({
        ...site,
        baseGuests: campingZone.baseGuests,
        campingZoneId: campingZone.id,
        extraGuests: campingZone.extraGuests,
        area: campingZone.area,
      })),
    )
    .flat();
  const OpenSiteModal = (site: Site) => setSelectedSite(site);
  return (
    <section className='flex flex-col gap-24pxr'>
      <CampSiteBookingInfo
        openTime={openTime}
        nextOpen={nextOpen}
        mannerTimeStart={mannerTimeStart}
        mannerTimeEnd={mannerTimeEnd}
      />
      <ul
        className='flex scroll-mt-168pxr flex-col gap-16pxr bg-inherit mobile:scroll-mt-87pxr mobile:gap-20pxr mobile:px-20pxr mobile359:gap-16pxr mobile359:px-0pxr'
        id='site'
      >
        {(showAll ? sites : sites.slice(0, 3)).map((site) => (
          <CampSiteItem
            key={`${site.campingZoneId} ${site.siteId}`}
            site={site}
            OpenSiteModal={OpenSiteModal}
          />
        ))}
      </ul>
      {sites.length > 2 && (
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
      {selectedSite && (
        <ModalPortal>
          <ModalOutside
            onClose={() => {}}
            custom='bg-black-50 z-30 h-screen w-full left-0pxr top-0pxr'
          >
            <CampSiteDetail
              onClose={() => setSelectedSite(null)}
              site={selectedSite}
            />
          </ModalOutside>
        </ModalPortal>
      )}
    </section>
  );
}

export default ReservationInfo;
