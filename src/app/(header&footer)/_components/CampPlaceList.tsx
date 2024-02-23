'use client';
import { IconArrowRightNon } from '@/public/svgs';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CampPlaceItem from './CampPlaceItem';

type CampZone = {
  id: number;
  name: string;
  displayAddress: string;
  campImage: string;
  minimumAmount: number;
  keyword: string;
};

interface Props {
  campPlaces: CampZone[];
  type: number;
}

function CampPlaceList({ campPlaces, type }: Props) {
  let listName;
  switch (type) {
    case 0:
      listName = '홍길동님을 위한 캠핑장';
      break;
    case 1:
      listName = '인기 캠핑장';
      break;
    case 2:
      listName = '새로 입점한 캠핑장';
      break;
  }

  return (
    <div className='flex flex-col gap-12pxr'>
      <div className='mr-32pxr flex justify-between mobile:mr-16pxr tabletMin:mr-32pxr'>
        <h1 className='font-title1-semibold mobile:font-body1-semibold'>
          {listName}
        </h1>
        <button
          type='button'
          className='flex items-center  text-gray500 font-body2-medium mobile:font-caption2-semibold'
        >
          <span className='mobile:hidden '>전체보기</span>
          <span className='hidden mobile:block'>전체</span>
          <span className='inline-block h-20pxr w-20pxr mobile:h-16pxr  mobile:w-16pxr'>
            <IconArrowRightNon width='100%' height='100%' viewBox='0 0 24 24' />
          </span>
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
