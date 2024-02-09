import Category from '@/components/Category';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import { IconNavigationDown } from '@/public/svgs';
import Image from 'next/image';
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
function page() {
  return (
    <div className='m-auto w-full max-w-1360pxr'>
      <SearchBarForOverview />
      <CampImage />
      <main className='relative flex w-full flex-row-reverse justify-between gap-40pxr pt-40pxr mobile:relative mobile:pt-20pxr tablet1079:relative'>
        <aside className='mobile359:right-16pxr sticky top-40pxr h-fit w-340pxr mobile:absolute mobile:right-20pxr mobile:top-20pxr mobile:w-fit tablet1079:absolute tablet1079:right-0pxr tablet1079:top-40pxr tablet1079:w-fit'>
          <MiniMapContainer />
        </aside>
        <div>
          <section className='mobile359:px-16pxr flex flex-col gap-32pxr border-b pb-24pxr mobile:px-20pxr'>
            <CampSiteProfile />
            <div>
              <div className='flex justify-between'>
                <h3 className='mb-12pxr text-gray-500 font-body2-semibold'>
                  {'"청결도 만족도가 높은 곳이에요"'}
                </h3>
                <span>전체보기</span>
              </div>
              <ul className='flex flex-col gap-8pxr'>
                <Progress />
              </ul>
            </div>
            <CampSiteBasicInfo />
            <div className='flex flex-col gap-16pxr'>
              <h2 className='text-black font-title2-semibold mobile:font-title3-bold'>
                시설 환경
              </h2>
              <Category />
            </div>
          </section>
          <section className='flex flex-col gap-24pxr pt-24pxr'>
            <div className='flex flex-col gap-16pxr'>
              <h3 className='mobile359:px-16pxr text-black font-title2-semibold mobile:px-20pxr mobile:font-title3-bold'>
                배치도
              </h3>
              <div className=''>
                <Image
                  className='mobile:aspect-320/220 rounded-2xl mobile:rounded-none'
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
            <div className='mobile359:px-16pxr flex flex-col gap-16pxr mobile:px-20pxr'>
              <CampSiteBookingInfo />
            </div>
            <div className='flex flex-col gap-24pxr mobile:gap-16pxr'>
              <CampSiteList />
              <div className='mobile359:px-16pxr contents mobile:block mobile:px-36pxr'>
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
              <h2 className='mobile359:px-16pxr text-black font-title2-semibold mobile:font-title3-bold'>
                이용 안내
              </h2>
              <TextInfo text='campInfo' />
            </div>
            <div className='flex flex-col gap-16pxr mobile:px-20pxr'>
              <h2 className='mobile359:px-16pxr text-black font-title2-semibold mobile:font-title3-bold'>
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
export default page;
