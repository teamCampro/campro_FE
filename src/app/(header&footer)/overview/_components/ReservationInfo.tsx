'use client';

import { ModalOutside, ModalPortal } from '@/components/index';
import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CampingZoneSite } from '../[id]/page';
import CampSiteBookingInfo from './CampSiteBookingInfo';
import CampSiteDetail from './CampSiteDetail';
import CampSiteItem from './CampSiteItem';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { isOpen } from '@/src/app/_slices/isOpenLoginRequiredModal';
import LoginRequiredModal from '@/components/Modal/LoginRequiredModal';
interface ReservationInfoProps {
  siteList: CampingZoneSite[];
  openTime: string;
  nextOpen: string;
  mannerTimeStart: string;
  mannerTimeEnd: string;
  imageUrls: string[];
}

function ReservationInfo({
  siteList,
  openTime,
  nextOpen,
  mannerTimeStart,
  mannerTimeEnd,
  imageUrls,
}: ReservationInfoProps) {
  const [selectedSite, setSelectedSite] = useState<CampingZoneSite | null>(
    null,
  );
  const [showAll, setShowAll] = useState(false);

  const router = useRouter();
  const { id: campingZoneId } = useParams();
  const searchParams = useSearchParams();

  const openSiteModal = (site: CampingZoneSite) => setSelectedSite(site);
  const dispatch = useAppDispatch();
  const isOpenModalLoginModal = useAppSelector(
    (state) => state.isOpenLoginRequiredModal,
  );

  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }

  const moveSignin = () => router.push('/signin');
  const closeModal = () => dispatch(isOpen(false));

  const handleReserve = (id: number) => {
    if (!userId) {
      return dispatch(isOpen(true));
    }

    const paramsKeys = ['checkIn', 'checkOut', 'adult', 'child', 'pet'];
    const newSearchParams = new URLSearchParams();
    paramsKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value) newSearchParams.set(key, value);
    });

    router.push(
      `/reserve/${campingZoneId}/${id}?${newSearchParams.toString()}`,
    );
  };
  return (
    <>
      <section className='flex flex-col gap-24pxr'>
        <CampSiteBookingInfo
          openTime={openTime}
          nextOpen={nextOpen}
          mannerTimeStart={mannerTimeStart}
          mannerTimeEnd={mannerTimeEnd}
        />
        <ul
          className='flex scroll-mt-168pxr flex-col gap-16pxr bg-inherit mobile:scroll-mt-87pxr mobile:gap-20pxr mobile359:gap-16pxr mobile359:px-0pxr'
          id='site'
        >
          {(showAll ? siteList : siteList.slice(0, 3)).map((site) => (
            <CampSiteItem
              key={site.id}
              site={site}
              openSiteModal={openSiteModal}
              handleReserve={handleReserve}
            />
          ))}
        </ul>
        {siteList.length > 2 && (
          <div className='contents mobile:block mobile:px-16pxr'>
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
                imageUrls={imageUrls}
                handleReserve={handleReserve}
              />
            </ModalOutside>
          </ModalPortal>
        )}
      </section>
      {isOpenModalLoginModal && (
        <LoginRequiredModal onMove={moveSignin} onClose={closeModal} />
      )}
    </>
  );
}

export default ReservationInfo;
