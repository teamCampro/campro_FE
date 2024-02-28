'use client';
import { IconArrowRightNon } from '@/public/svgs';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CampPlaceItem from './CampPlaceItem';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../_data/sign/getUserInfo';
type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

interface Props {
  campPlaces?: CampZone[];
  type: string;
  userName?: string;
  onboardName?: string;
}

function CampPlaceList({ campPlaces, type, userName, onboardName }: Props) {
  let listName = '';
  switch (type) {
    case 'recommendForUser':
      listName = `${userName}님을 위한 캠핑장`;
      break;

    case 'recommendFirstForUser':
      if (!onboardName) return;
      listName = `${JSON.parse(onboardName)[0]} 캠핑장`;
      break;
    case 'recommend':
      listName = `추천 캠핑장`;
      break;
    case 'popular':
      listName = '인기 캠핑장';
      break;
    case 'recent':
      listName = '새로 입점한 캠핑장';
      break;
  }

  return (
    <div className='flex max-w-1440pxr flex-col gap-12pxr'>
      <div className=' flex justify-between'>
        <h1 className=' font-title1-semibold mobile:pl-16pxr mobile:font-body1-semibold'>
          {listName}
        </h1>
        <button
          type='button'
          className='flex items-center text-gray500 font-body2-medium mobile:pr-16pxr mobile:font-caption2-semibold tabletMin:pr-32pxr'
        >
          <span className='mobile:hidden '>전체보기</span>
          <span className='hidden mobile:block'>전체</span>
          <span className='inline-block h-20pxr w-20pxr mobile:h-16pxr  mobile:w-16pxr'>
            <IconArrowRightNon
              width='100%'
              height='100%'
              viewBox='0 0 24 24'
              className='fill-gray500'
            />
          </span>
        </button>
      </div>
      <div>
        <Swiper
          id='campList-swiper'
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView='auto'
          spaceBetween={12}
          breakpoints={{
            320: { slidesOffsetBefore: 16 },
            768: { spaceBetween: 16, slidesOffsetBefore: 0 },
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
