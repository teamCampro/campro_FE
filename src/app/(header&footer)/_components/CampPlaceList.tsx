'use client';
import { IconArrowRight } from '@/public/svgs';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CampPlaceItem from './CampPlaceItem';
import { CampPlaceMockData } from './CampPlaceSection';

interface Props {
  campPlaces: CampPlaceMockData[];
  type: string;
}

function CampPlaceList({ campPlaces, type }: Props) {
  let listName;
  switch (type) {
    case 'matching':
      listName = '홍길동님을 위한 캠핑장';
      break;
    case 'secondMatching':
      listName = '⛰️ 산 캠핑장 모음';
      break;
    case 'random':
      listName = '⛰️ 산 캠핑장 모음';
      break;
    case 'hot':
      listName = '인기 캠핑장';
      break;
    case 'new':
      listName = '새로 입점한 캠핑장';
      break;
  }

  return (
    <div className='flex flex-col gap-12pxr'>
      <div className='flex justify-between '>
        <h1 className='font-title1-semibold mobile:font-body1-medium'>
          {listName}
        </h1>
        <button
          type='button'
          className='flex items-center font-medium text-gray500 font-body2 mobile:font-caption2-semibold'
        >
          <span className='mobile:hidden '>전체보기</span>
          <span className='hidden mobile:block'>전체</span>
          <IconArrowRight />
        </button>
      </div>
      <div>
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView='auto'
          spaceBetween={12}
          breakpoints={{
            768: { spaceBetween: 16 },
          }}
        >
          {campPlaces?.map((campPlace) => (
            <SwiperSlide id='camp-place' key={campPlace.id}>
              <ul className='flex gap-16pxr'>
                <CampPlaceItem campPlace={campPlace} />
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CampPlaceList;
