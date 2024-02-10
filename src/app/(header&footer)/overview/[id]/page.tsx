'use client';
import Category from '@/components/Category';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import { IconNavigationDown } from '@/public/svgs';
import { useEffect, useRef, useState } from 'react';
import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import AnchorMenu from '../_components/AnchorMenu';
import CampSiteBookingInfo from '../_components/CampSiteBookingInfo';
import CampSiteList from '../_components/CampSiteList';
import CampSiteMap from '../_components/CampSiteMap';
import CampSiteProfile from '../_components/CampSiteProfile';
import Notice from '../_components/Notice';
import Review from '../_components/Review';
import SectionTitle from '../_components/SectionTitle';

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
  const [showSiteButton, setShowSiteButton] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = {
    section1: useRef<HTMLDivElement>(null),
    section2: useRef<HTMLDivElement>(null),
    section3: useRef<HTMLDivElement>(null),
    section4: useRef<HTMLDivElement>(null),
    section5: useRef<HTMLDivElement>(null),
    section6: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let newActiveSection = activeSection;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            newActiveSection = entry.target.id;
          }
        });

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0.2, 0.5, 1.0],
      },
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  useEffect(() => {
    const imageEnd = imageEndRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(!entry.isIntersecting);
        });
      },
      { threshold: [0.1, 0.3], rootMargin: '-98px 0px 0px 0px' },
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

  useEffect(() => {
    const reserveRef = sectionRefs.section4.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          setShowSiteButton(!entry.isIntersecting);
        });
      },
      { threshold: [0.3], rootMargin: '50px' },
    );

    if (reserveRef) {
      observer.observe(reserveRef);
    }

    return () => {
      if (reserveRef) {
        observer.unobserve(reserveRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  return (
    <div className='m-auto w-full max-w-1360pxr scroll-smooth'>
      <SearchBarForOverview />
      <div ref={imageEndRef}>
        <CampImage />
      </div>
      <AnchorMenu
        isSticky={isSticky}
        selectedMenu={activeSection}
        showSiteButton={showSiteButton}
      />
      <main
        className={`${isSticky ? 'mt-161pxr' : ''} relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet1079:relative`}
      >
        <aside
          className={`${isSticky ? 'top-208pxr' : ''} sticky top-40pxr flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit mobile359:right-16pxr tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit`}
        >
          <MiniMapContainer />
        </aside>
        <div>
          <section className='flex flex-col gap-32pxr pb-24pxr mobile:px-20pxr mobile359:px-16pxr'>
            <CampSiteProfile isRef={sectionRefs.section1} />
            <div
              className='flex scroll-mt-168pxr flex-col gap-16pxr'
              id='2'
              ref={sectionRefs.section2}
            >
              <SectionTitle>시설/환경</SectionTitle>
              <Category />
            </div>
          </section>
          <section>
            <CampSiteMap isRef={sectionRefs.section3} id='3' />
          </section>
          <section className='flex flex-col gap-24pxr pt-24pxr'>
            <div
              ref={sectionRefs.section4}
              id='4'
              className='flex scroll-mt-168pxr flex-col gap-24pxr'
            >
              <CampSiteBookingInfo />
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
            <Notice
              title='이용 안내'
              id='5'
              text='campInfo'
              isRef={sectionRefs.section5}
            />
          </section>
          <Review isRef={sectionRefs.section6} id='6' />
        </div>
      </main>
    </div>
  );
}
export default Page;
