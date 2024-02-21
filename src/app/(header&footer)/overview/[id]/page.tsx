'use client';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import useRefs from '@/hooks/useRefs';
import { getOverview } from '@/src/app/_data/overview/overview';
import '@/src/app/_styles/toast.css';
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
import Loading from '@/components/Loading';

export type CampingZoneSite = {
  minNights: number;
  id: number;
  parentSiteName: string;
  childSiteName: string;
  checkInTime: string;
  checkOutTime: string;
  price: number;
  campingType: string;
  maxPeople: number;
  parkingGuide: string;
  petYn: number;
};

interface CampingZone {
  campingZoneDetail: {
    campImage: string;
    imgUrls: string;
    name: string;
    keyword: string;
    address: string;
    tel: string;
    intro: string;
    facilities: string;
    planImage: string;
    mannerTimeStart: string;
    mannerTimeEnd: string;
    openTime: string;
    nextOpenDate: string;
    guide: string;
    refundGuide: string;
    bossName: string;
    bossCompanyName: string;
    bossAddress: string;
    bossEmail: string;
    businessNumber: string;
    tourNumber: string;
    lat: string;
    lng: string;
    tour: string;
  }[];
  campingZoneSiteList: CampingZoneSite[];
  reviewList: Review[];
}

export type Review = {
  reviewId: number;
  userId: string;
  startTime: Date;
  updateTime: Date;
  star: number;
  reviewKeyword: string;
  description: string;
};

interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
  params: { id: number };
}

function Page({ searchParams, params }: SearchParamsType) {
  const [isSticky, setIsSticky] = useState(false);
  const campImageRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('');
  const [campingZone, setCampingZone] = useState<CampingZone>();

  useEffect(() => {
    const getCamp = async () => {
      const res = await getOverview(params.id);
      setCampingZone(res);
    };

    getCamp();
  }, [params.id]);

  const [divRefs, setDivRef] = useRefs<HTMLDivElement>();

  const IMAGE_SECTION_ID = 'image';
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let newActiveSection = activeSection;

        entries.forEach((entry) => {
          const { id } = entry.target;
          console.log(id);
          if (id === IMAGE_SECTION_ID) {
            setIsSticky(!entry.intersectionRatio);
          }

          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            newActiveSection = id;
          }
        });

        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      },
      {
        root: mainRef.current,
        rootMargin: '-94px 0px 0px 0px',
        threshold: [0.2, 0.5, 1.0],
      },
    );
    if (campImageRef.current) {
      observer.observe(campImageRef.current);
    }
    divRefs.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [divRefs, activeSection, campingZone]);

  if (!campingZone) return <Loading />;

  const {
    campingZoneDetail,
    campingZoneSiteList: siteList,
    reviewList,
  } = campingZone;
  const [detail] = campingZoneDetail;
  const imageUrls = JSON.parse(detail.imgUrls);
  return (
    <>
      <main className='px-40pxr mobile:p-0pxr'>
        <SearchBarForOverview
          searchParams={searchParams}
          placeName={detail.name}
          campId={params.id}
        />
        <AnchorMenu isSticky={isSticky} selectedMenu={activeSection} />
        <div className='m-auto w-full max-w-1360pxr'>
          <SectionRef sectionRef={setDivRef} id='image'>
            <CampImage imgUrls={imageUrls} />
          </SectionRef>
          <section className='relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet:justify-start tablet1079:relative tablet1079:flex-row'>
            <aside
              className={`${isSticky ? 'top-169pxr' : 'top-40pxr'} mobile359:right-mopxr sticky flex h-fit w-340pxr flex-col gap-24pxr mobile:absolute mobile:right-20pxr mobile:top-23pxr mobile:w-fit tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit`}
            >
              <MiniMapContainer {...detail} />
            </aside>
            <div>
              <div className='flex flex-col gap-32pxr mobile:gap-24pxr mobile:px-20pxr mobile359:px-0pxr'>
                <div className='contents mobile359:flex mobile359:flex-col mobile359:gap-24pxr mobile359:px-16pxr'>
                  <SectionRef sectionRef={setDivRef} id='1'>
                    <CampSiteBasicInfo
                      keyword={detail.keyword}
                      placeName={detail.name}
                      address={detail.address}
                      tel={detail.tel}
                      intro={detail.intro}
                    />
                  </SectionRef>
                  <SectionRef sectionRef={setDivRef} id='2'>
                    <CampSiteFacilities facilities={detail.facilities} />
                  </SectionRef>
                </div>
                <SectionRef sectionRef={setDivRef} id='3'>
                  <CampSiteMap planImage={detail.planImage} />
                </SectionRef>
                <SectionRef sectionRef={setDivRef} id='4'>
                  <ReservationInfo
                    openTime={detail.openTime}
                    nextOpen={detail.nextOpenDate}
                    mannerTimeStart={detail.mannerTimeStart}
                    mannerTimeEnd={detail.mannerTimeEnd}
                    siteList={siteList}
                    imageUrls={imageUrls}
                  />
                </SectionRef>
              </div>
              <div className='flex flex-col gap-24pxr mobile359:gap-24pxr'>
                <SectionRef sectionRef={setDivRef} id='5'>
                  <UsageGuidelines {...detail} />
                </SectionRef>
                <SectionRef sectionRef={setDivRef} id='6'>
                  <CustomerReviews reviews={reviewList} />
                </SectionRef>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer className='overview-toast' />
        <div ref={setDivRef} id='footer' />
      </main>
    </>
  );
}
export default Page;
