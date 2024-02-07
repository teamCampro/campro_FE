import Chip from '@/components/Chip';
import CampImage from '../../_components/CampImage';
import MiniMapContainer from '../../_components/MiniMapContainer';
import CampSiteList from '../_components/CampSiteList';
import SearchBar from '@/components/SearchBar';
import { IconCall, IconLocation, IconStar } from '@/public/svgs';
import Image from 'next/image';
import Category from '@/components/Category';
import Progress from '../_components/Progress';
import TextInfo from '../_components/TextInfo';

function page() {
  return (
    <div className='m-auto w-full max-w-1360pxr'>
      <SearchBar page={'search'} />
      <CampImage />
      <main className='overview mt-40pxr grid'>
        <div>
          <section>
            <div className='mb-32pxr'>
              <Chip>텐트캠핑</Chip>
              <h2 className='font-h2 mb-12pxr'>자연숲캠핑장</h2>
              <ul className='flex flex-col gap-8pxr'>
                <li className='flex gap-4pxr'>
                  <h3 className='flex-center justify-start font-medium !leading-none text-gray600 font-body2'>
                    <span className='inline-block h-20pxr w-20pxr'>
                      <IconLocation
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                        fill='#949494'
                      />
                    </span>
                    충남 아산시 배방읍 솔치로 17-32
                  </h3>
                  <span className='text-second100 font-body2-semibold'>
                    복사
                  </span>
                </li>
                <li className='flex gap-4pxr'>
                  <h3 className='flex-center justify-start font-medium !leading-none text-gray600 font-body2'>
                    <span className='inline-block h-20pxr w-20pxr'>
                      <IconCall
                        width='100%'
                        height='100%'
                        viewBox='0 0 24 24'
                        fill='#949494'
                      />
                    </span>
                    042-123-4567
                  </h3>
                  <span className='text-second100 font-body2-semibold'>
                    복사
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className='flex justify-between'>
                <h3 className='mb-12pxr text-gray-500 font-body2-semibold'>
                  {'"청결도 만족도가 높은 곳이에요"'}
                </h3>
                <span>전체보기</span>
              </div>
              <ul>
                <Progress />
              </ul>
              <div className='my-24pxr w-700pxr border-b border-gray200'></div>
            </div>
          </section>
          <section className='flex flex-col gap-32pxr'>
            <div className='flex flex-col gap-16pxr'>
              <h2 className='text-black font-body1-bold'>기본 정보</h2>
              <p className='font-medium text-gray500 font-body2'>
                전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와
                품격을 한층 높여 주는 프리미엄 라이프 스타일 공간으로 변화를
                거듭해 오는 세계 최고의 캠핑장입니다.
              </p>
            </div>
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
              <h2 className='text-black font-body1-bold'>예약 안내</h2>
              <ul className='shadow-overView flex flex-col gap-4pxr rounded-xl bg-white px-24pxr py-20pxr font-medium text-gray600 font-body2'>
                <li>
                  · 매너 타임 : <span>22:00 - 08:00 (모든 타입 동일)</span>
                </li>
                <li>
                  · 오픈 주기 : <span>매월 2일 6시 (2개월 단위)</span>
                </li>
                <li>
                  · 다음 예약 오픈일 : <span>2024.03.02일 오전 10시</span>
                </li>
              </ul>
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
              <h2 className='text-black font-body1-bold'>판매자 정보</h2>
              <ul className='font-medium text-gray500 font-body2'>
                <li>
                  대표자: <span>도주용</span>
                </li>
                <li>
                  상호명: <span>자연숲 캠핑장</span>
                </li>
                <li>
                  사업자 주소: <span>충남 아산시 배방옵 솔치로 17-31</span>
                </li>
                <li>
                  이메일: <span>bbtf1731@naver.com</span>
                </li>
                <li>
                  사업자 등록 번호: <span>338-88-01159</span>
                </li>
                <li>
                  관광사업(야영장) 등록번호: <span>제2022-000001호</span>
                </li>
              </ul>
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
