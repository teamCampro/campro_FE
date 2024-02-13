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
import SectionRef from '../_components/SectionRef';
import UsageGuidelines from '../_components/UsageGuidelines';

export interface CampSite {
  id: number;
  placeName: string;
  address: string;
  tel: string;
  imgUrl: string;
  location: {
    lat: number;
    lng: number;
  };
  facilities: string[];
  planImage: string;
  mannerTimeStart: string;
  mannerTimeEnd: string;
  openTime: string;
  nextOpen: string;
  guide: {
    usage: string;
    refund: string;
  };
  ownerInfo: {
    ownerName: string;
    placeName: string;
    address: string;
    email: string;
    ownerRegistrationNumber: string;
    placeRegistrationNumber: string;
  };
  types: string[];
  tag: {
    text: string;
    list: { text: string; count: number }[];
  };
  intro: string;
  campingZones: CampingZone[];
  reviews: {
    totalCount: number;
    contents: Review[];
    averageScore: number;
  };
}

export interface CampingZone {
  campingZoneId: number;
  name: string;
  allowPet: boolean;
  minStay: string;
  parkingLimit: number;
  parkingLocation: string;
  size: string;
  checkInTime: string;
  checkOutTime: string;
  baseGuests: string;
  sites: Site[];
  type: string;
  area: string;
  floor: string;
  extraGuests: number;
  allowTrailer: boolean;
  allowCampingCar: boolean;
  images: string[];
  facilities: string[];
}

export interface Site {
  siteId: number;
  name: string;
  type: string;
  size: string;
  floor: string;
  checkInTime: string;
  checkOutTime: string;
  minStay: string;
  allowPet: boolean;
  parkingLimit: number;
  parkingLocation: string;
  allowTrailer: boolean;
  allowCampingCar: boolean;
  facilities: string[];
  price: number;
  images: string[];
}

export interface Review {
  nickName: string;
  createdAt: string;
  siteId: number;
  siteName: string;
  group: {
    adult: number;
    child: number;
    pet: number;
  };
  content: string;
  score: number;
  tag: string;
}

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
  params: { id: number };
}

function Page({ searchParams, params }: SearchParamsType) {
  const [isSticky, setIsSticky] = useState(false);
  const campImageRef = useRef<HTMLDivElement>(null);
  const [showSiteButton, setShowSiteButton] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [campingZone, setCampingZone] = useState<CampSite>();
  useEffect(() => {
    const getCamp = async () => {
      const res = await fetch('/data/overviewMockData.json');

      if (!res.ok) {
        throw new Error('흑흑');
      }

      const data = await res.json();
      setCampingZone(data[params.id - 1]);
    };
    getCamp();
  }, [params.id]);
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
  }, [activeSection, campingZone]);

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
  }, [campingZone]);

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
  if (!campingZone) return <div className='animate-spin text-120pxr'>😱</div>;
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
          className={`${isSticky ? 'top-169pxr' : 'top-40pxr'} sticky flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit mobile359:right-16pxr tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit`}
        >
          <MiniMapContainer {...campingZone} />
        </aside>
        <div>
          <div className='flex flex-col gap-32pxr pb-24pxr mobile:px-20pxr mobile359:px-16pxr'>
            <SectionRef sectionRef={sectionRefs.section1} id='1'>
              <CampSiteBasicInfo {...campingZone} />
            </SectionRef>
            <SectionRef sectionRef={sectionRefs.section2} id='2'>
              <CampSiteFacilities facilities={campingZone.facilities} />
            </SectionRef>
          </div>
          <SectionRef sectionRef={sectionRefs.section3} id='3'>
            <CampSiteMap planImage={campingZone.planImage} />
          </SectionRef>
          <div className='flex flex-col gap-24pxr pt-24pxr'>
            <SectionRef sectionRef={sectionRefs.section4} id='4'>
              <ReservationInfo {...campingZone} />
            </SectionRef>
          </div>
          <SectionRef sectionRef={sectionRefs.section5} id='5'>
            <UsageGuidelines {...campingZone} />
          </SectionRef>
          <SectionRef sectionRef={sectionRefs.section6} id='6'>
            <CustomerReviews {...campingZone} />
          </SectionRef>
        </div>
      </main>
    </div>
  );
}
export default Page;
