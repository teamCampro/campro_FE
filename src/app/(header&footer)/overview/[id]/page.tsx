'use client';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import useRefs from '@/hooks/useRefs';
import '@/src/app/_styles/toast.css';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  id: number;
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
  baseGuests: string;
  extraGuests: number;
  area: string;
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

  const [divRefs, setDivRef] = useRefs<HTMLDivElement>();

  const FOOTER_ID = 'footer';
  const TARGET_SECTION_ID = '4';
  const IMAGE_SECTION_ID = 'image';
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let newActiveSection = activeSection;

        entries.forEach((entry) => {
          const { id } = entry.target;
          if (id === IMAGE_SECTION_ID) {
            setIsSticky(!entry.intersectionRatio);
          }

          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            newActiveSection = id;
            console.log(newActiveSection);
          }
        });

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      },
      {
        root: mainRef.current,
        rootMargin: '-94px 0px 0px 0px',
        threshold: [0.25, 0.5, 1.0],
      },
    );
    if (campImageRef.current) {
      observer.observe(campImageRef.current);
    }
    divRefs.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divRefs, activeSection, campingZone]);

  if (!campingZone)
    return (
      <div className='custom-height flex-center'>
        <Image
          width={140}
          height={140}
          src='/gifs/campro_loading.gif'
          alt='로딩중입니다'
        />
      </div>
    );
  return (
    <>
      <div className='m-auto w-full max-w-1360pxr'>
        <SearchBarForOverview
          searchParams={searchParams}
          placeName={campingZone?.placeName}
          campId={campingZone?.id}
        />
        <SectionRef sectionRef={setDivRef} id='image'>
          <CampImage />
        </SectionRef>
        <AnchorMenu
          isSticky={isSticky}
          selectedMenu={activeSection}
          showSiteButton={showSiteButton}
        />
        <main className='relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet:justify-start tablet1079:relative tablet1079:flex-row'>
          <aside
            className={`${isSticky ? 'top-169pxr' : 'top-40pxr'} sticky flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit mobile359:right-16pxr tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit`}
          >
            <MiniMapContainer {...campingZone} />
          </aside>
          <div>
            <div className='flex flex-col gap-32pxr mobile:gap-24pxr mobile:px-20pxr mobile359:px-0pxr'>
              <div className='contents mobile359:flex mobile359:flex-col mobile359:gap-24pxr mobile359:px-16pxr'>
                <SectionRef sectionRef={setDivRef} id='1'>
                  <CampSiteBasicInfo {...campingZone} />
                </SectionRef>
                <SectionRef sectionRef={setDivRef} id='2'>
                  <CampSiteFacilities facilities={campingZone.facilities} />
                </SectionRef>
              </div>
              <SectionRef sectionRef={setDivRef} id='3'>
                <CampSiteMap planImage={campingZone.planImage} />
              </SectionRef>
              <SectionRef sectionRef={setDivRef} id='4'>
                <ReservationInfo {...campingZone} />
              </SectionRef>
            </div>
            <div className='flex flex-col gap-24pxr mobile359:gap-24pxr'>
              <SectionRef sectionRef={setDivRef} id='5'>
                <UsageGuidelines {...campingZone} />
              </SectionRef>
              <SectionRef sectionRef={setDivRef} id='6'>
                <CustomerReviews {...campingZone} />
              </SectionRef>
            </div>
          </div>
        </main>
        <div ref={setDivRef} id='footer' />
      </div>
      <ToastContainer className='overview-toast' />
    </>
  );
}
export default Page;
