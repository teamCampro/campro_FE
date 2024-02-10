'use client';
import Button from '@/components/Button';
import Category from '@/components/Category';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import { IconArrowDown, IconNavigationDown } from '@/public/svgs';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import CampSiteBasicInfo from '../_components/CampSiteBasicInfo';
import CampSiteBookingInfo from '../_components/CampSiteBookingInfo';
import CampSiteBossInfo from '../_components/CampSiteBossInfo';
import CampSiteList from '../_components/CampSiteList';
import CampSiteProfile from '../_components/CampSiteProfile';
import Progress from '../_components/Progress';
import Review from '../_components/Review';
import TextInfo from '../_components/TextInfo';

const campingZoneInfos = [
  {
    campingZoneName: 'A사이트',
    siteInfos: [
      {
        siteName: 'A1-08',
        reserveTime: '입실 12:00 - 퇴실 11:00',
        fee: 800000,
        feeBaseDate: '1박 기준',
      },
      {
        siteName: 'A1-09',
        reserveTime: '입실 12:00 - 퇴실 11:00',
        fee: 800000,
        feeBaseDate: '1박 기준',
      },
    ],
  },
  {
    campingZoneName: 'B사이트',
    siteInfos: [
      {
        siteName: 'B1-02',
        reserveTime: '입실 23:00 - 퇴실 24:00',
        fee: 990000,
        feeBaseDate: '1박 기준',
      },
      {
        siteName: 'B2-04',
        reserveTime: '입실 12:00 - 퇴실 12:02',
        fee: 2000,
        feeBaseDate: '1박 기준',
      },
      {
        siteName: 'B2-05',
        reserveTime: '입실 00:01 - 퇴실 00:08',
        fee: 8000,
        feeBaseDate: '1박 기준',
      },
    ],
  },
];

function Page() {
  const [isSticky, setIsSticky] = useState(false);
  const imageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageEnd = imageEndRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(!entry.isIntersecting);
        });
      },
      { threshold: [1.0], rootMargin: '50px' },
    );

    if (imageEnd) {
      observer.observe(imageEnd);
    }

    return () => {
      if (imageEnd) {
        observer.unobserve(imageEnd);
      }
    };
  }, []);

  return (
    <div className='m-auto w-full max-w-1360pxr scroll-smooth'>
      <SearchBarForOverview />
      <CampImage />
      <div
        ref={imageEndRef}
        style={{ height: '1px', position: 'absolute', bottom: '0' }}
      />
      <div
        className={`${isSticky ? 'block' : 'hidden'} sticky top-0pxr z-30 flex w-full max-w-1360pxr items-center justify-between border-b border-gray200 bg-white py-16pxr mobile:fixed mobile:bottom-0pxr mobile:top-auto mobile:justify-center mobile:border-none mobile:px-20pxr mobile:shadow-overViewButton`}
      >
        <ul className='flex mobile:hidden'>
          <li>
            <a href='#1'>기본 정보</a>
          </li>
          <li>
            <a
              className='px-16pxr py-23pxr text-gray500 font-body2-medium'
              href='#2'
            >
              시설/환경
            </a>
          </li>
          <li>
            <a
              className='px-16pxr py-23pxr text-gray500 font-body2-medium'
              href='#3'
            >
              배치도
            </a>
          </li>
          <li>
            <a
              className='px-16pxr py-23pxr text-gray500 font-body2-medium'
              href='#4'
            >
              예약안내
            </a>
          </li>
          <li>
            <a
              className='px-16pxr py-23pxr text-gray500 font-body2-medium'
              href='#5'
            >
              이용안내
            </a>
          </li>
          <li>
            <a
              className='px-16pxr py-23pxr text-gray500 font-body2-medium'
              href='#6'
            >
              후기
            </a>
          </li>
        </ul>
        <a href='#site'>
          <Button.Round
            size='sm'
            custom='w-full p-24pxr w-170pxr h-40pxr mobile:w-360pxr mobile:h-56pxr'
          >
            사이트 선택
          </Button.Round>
        </a>
      </div>
      <main className='relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet1079:relative'>
        <aside className='sticky top-40pxr flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit mobile359:right-16pxr tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit'>
          <MiniMapContainer />
        </aside>
        <div>
          <section className='flex flex-col gap-32pxr border-b pb-24pxr mobile:px-20pxr mobile359:px-16pxr'>
            <CampSiteProfile />
            <div>
              <div className='flex justify-between'>
                <h3 className='mb-12pxr text-gray-600 font-body2-semibold'>
                  {'"청결도 만족도가 높은 곳이에요"'}
                </h3>
                <span className='flex-center text-gray500 font-caption1-medium'>
                  전체보기
                  <span className='inline-block h-16pxr w-16pxr'>
                    <IconArrowDown
                      width='100%'
                      height='100%'
                      viewBox='0 0 24 24'
                    />
                  </span>
                </span>
              </div>
              <ul className='flex flex-col gap-8pxr'>
                <Progress />
              </ul>
            </div>
            <CampSiteBasicInfo />
            <div className='flex flex-col gap-16pxr'>
              <h2
                className='text-black font-title2-semibold mobile:font-title3-bold'
                id='2'
              >
                시설 환경
              </h2>
              <Category />
            </div>
          </section>
          <section className='flex flex-col gap-24pxr pt-24pxr'>
            <div className='flex flex-col gap-16pxr'>
              <h3
                className='text-black font-body1-bold mobile:px-20pxr mobile:font-title3-bold mobile359:px-16pxr'
                id='3'
              >
                배치도
              </h3>
              <div>
                <Image
                  className='rounded-2xl mobile:aspect-320/220 mobile:rounded-none'
                  src={'/avifs/map.avif'}
                  alt='배치도'
                  width={174}
                  height={174}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
            <div className='flex flex-col gap-16pxr mobile:px-20pxr mobile359:px-16pxr'>
              <CampSiteBookingInfo />
            </div>
            <div className='flex flex-col gap-24pxr mobile:gap-16pxr mobile:px-20pxr mobile359:px-0pxr'>
              {campingZoneInfos.map((campingZone) => (
                <CampSiteList
                  campingZone={campingZone}
                  key={campingZone.campingZoneName}
                />
              ))}
              <div className='contents mobile:block mobile:px-36pxr mobile359:px-16pxr'>
                <button
                  type='button'
                  className='flex-center w-full gap-10pxr rounded-lg border border-gray200 bg-white px-40pxr py-12pxr text-gray700 font-caption1-semibold'
                >
                  모두보기
                  <span className='mobile:hidden tablet:hidden'>
                    <IconNavigationDown />
                  </span>
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-16pxr mobile:px-20pxr'>
              <h2
                className='text-black font-title2-semibold mobile:font-title3-bold mobile359:px-16pxr'
                id='5'
              >
                이용 안내
              </h2>
              <TextInfo text='campInfo' />
            </div>
            <div className='flex flex-col gap-16pxr mobile:px-20pxr'>
              <h2 className='text-black font-title2-semibold mobile:font-title3-bold mobile359:px-16pxr'>
                취소/환불 규정
              </h2>
              <TextInfo text='cancelRules' />
            </div>
            <div className='flex flex-col gap-16pxr mobile:px-20pxr'>
              <CampSiteBossInfo />
            </div>
          </section>
          <Review />
        </div>
      </main>
    </div>
  );
}
export default Page;
