'use client';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import { useEffect, useRef, useState } from 'react';
import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import AnchorMenu from '../_components/AnchorMenu';
import CampSiteBasicInfo from '../_components/CampSiteBasicInfo';
import CampSiteFacilities from '../_components/CampSiteFacilities';
import CampSiteMap from '../_components/CampSiteMap';
import CustomerReviews from '../_components/CustomerReviews';
import ReservationInfo from '../_components/ReservationInfo';
import UsageGuidelines from '../_components/UsageGuidelines';

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
  {
    campingZoneName: 'C사이트',
    siteInfos: [
      {
        siteName: 'C1-02',
        reserveTime: '입실 23:00 - 퇴실 24:00',
        fee: 70000,
        feeBaseDate: '1박 기준',
      },
      {
        siteName: 'C2-06',
        reserveTime: '입실 12:00 - 퇴실 12:02',
        fee: 2000,
        feeBaseDate: '1박 기준',
      },
      {
        siteName: 'B2-08',
        reserveTime: '입실 00:01 - 퇴실 00:08',
        fee: 9999,
        feeBaseDate: '1박 기준',
      },
    ],
  },
];

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}

export type MapSizeType = 'half' | 'map' | 'list';

function Page({ searchParams }: SearchParamsType) {
  const [isSticky, setIsSticky] = useState(false);
  const campImageRef = useRef<HTMLDivElement>(null);
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
    const campImage = campImageRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsSticky(!entry.isIntersecting);
        });
      },
      { threshold: [0.1, 0.3], rootMargin: '-98px 0px 0px 0px' },
    );

    if (campImage) {
      observer.observe(campImage);
    }

    return () => {
      if (campImage) {
        observer.unobserve(campImage);
      }
    };
  }, []);

  useEffect(() => {
    const reserveRef = sectionRefs.section4.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      <SearchBarForOverview searchParams={searchParams} />
      <CampImage campImageRef={campImageRef} />
      <AnchorMenu
        isSticky={isSticky}
        selectedMenu={activeSection}
        showSiteButton={showSiteButton}
      />
      <main className='relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet1079:relative'>
        <aside
          className={`${isSticky ? 'top-199pxr' : 'top-40pxr'} sticky flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit mobile359:right-16pxr tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit`}
        >
          <MiniMapContainer />
        </aside>
        <div>
          <div className='flex flex-col gap-32pxr pb-24pxr mobile:px-20pxr mobile359:px-16pxr'>
            <CampSiteBasicInfo sectionRef={sectionRefs.section1} id='1' />
            <CampSiteFacilities sectionRef={sectionRefs.section2} id='2' />
          </div>
          <CampSiteMap sectionRef={sectionRefs.section3} id='3' />
          <div className='flex flex-col gap-24pxr pt-24pxr'>
            <ReservationInfo
              sectionRef={sectionRefs.section4}
              id='4'
              campingZoneInfos={campingZoneInfos}
            />
          </div>
          <UsageGuidelines sectionRef={sectionRefs.section5} id='5' />
          <CustomerReviews sectionRef={sectionRefs.section6} id='6' />
        </div>
      </main>
    </div>
  );
}
export default Page;
