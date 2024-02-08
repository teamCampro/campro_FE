import { IconStar } from '@/public/svgs';
import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import CampSiteList from '../_components/CampSiteList';
import Image from 'next/image';
import Category from '@/components/Category';
import Progress from '../_components/Progress';
import TextInfo from '../_components/TextInfo';
import SearchBarForOverview from '@/components/SearchBar/SearchBarForOverview';
import CampSiteProfile from '../_components/CampSiteProfile';
import CampSiteBasicInfo from '../_components/CampSiteBasicInfo';
import CampSiteBookingInfo from '../_components/CampSiteBookingInfo';
import CampSiteBossInfo from '../_components/CampSiteBossInfo';
function page() {
  return (
    <div className='m-auto w-full max-w-1360pxr'>
      <SearchBarForOverview />
      <CampImage />
      <main className='overview mt-40pxr grid'>
        <div>
          <section>
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
              <div className='my-24pxr w-700pxr border-b border-gray200'></div>
            </div>
          </section>
          <section className='flex flex-col gap-32pxr'>
            <CampSiteBasicInfo />
            <div className='flex flex-col gap-16pxr'>
              <h2 className='text-black font-body1-bold'>시설 환경</h2>
              <Category />
            </div>
            <div className='flex flex-col gap-16pxr'>
              <h3 className='text-black font-body1-bold'>배치도</h3>
              <div className='relative h-451pxr w-full rounded-2xl'>
                <Image
                  className='rounded-2xl'
                  src={'/avifs/map.avif'}
                  alt='배치도'
                  fill
                />
              </div>
            </div>
            <div className='flex flex-col gap-16pxr'>
              <CampSiteBookingInfo />
            </div>
            <div>
              <CampSiteList />
              <div>모두보기</div>
            </div>
            <div className='flex flex-col gap-16pxr'>
              <h2 className='text-black font-body1-bold'>이용 안내</h2>
              <TextInfo text='campInfo' />
            </div>
            <div className='flex flex-col gap-16pxr'>
              <h2 className='text-black font-body1-bold'>취소/환불 규정</h2>
              <TextInfo text='cancelRules' />
            </div>
            <div className='flex flex-col gap-16pxr'>
              <CampSiteBossInfo />
            </div>
          </section>
          <section>
            <div className='my-24pxr w-700pxr border-b border-gray200'></div>
            <div className='flex items-center justify-start'>
              <h2 className='flex-center text-black font-body1-bold'>
                <IconStar />
                이용 후기<span>9.8</span>
              </h2>
              <span className='grow-2 font-medium text-gray400 font-caption1'>
                ・257명 평가
              </span>
              <div>전체보기</div>
            </div>
            <div>
              <div>
                <h4>보라돌이28</h4>
                <span>2일전</span>
              </div>
              <ul>
                <li>이미지</li>
              </ul>
              <div>
                <h4>
                  객실명: <span>A사이드</span>
                  <span>| A1-8구역</span>
                </h4>
              </div>
              <div>
                <h4>
                  유형: <span>2인</span>
                  <span>| 여성</span>
                </h4>
              </div>
              <p>
                친구랑 둘이서 처음 가 본 캠핑이었는데 엄청 친절하시고 조용해서
                쉬기에도 너무 좋았어요! 자연 향기 너무 힐링되고 좋았어요! 친구도
                너무 마음에 든다구 하더라구요 ㅎㅎ ! 다음 캠핑갈 때도 이용하고
                싶어요!
              </p>
              <div>더보기</div>
              <ul>
                <li>5.0</li>
                <li>조용해서 쉬기 좋아요</li>
              </ul>
            </div>
          </section>
        </div>
        <section className='pl-80pxr pt-40pxr'>
          <MiniMapContainer />
        </section>
      </main>
    </div>
  );
}

export default page;
