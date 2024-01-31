'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { IconArrowRightNon, IconFilter } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function DetailPanel() {
  return (
    <div className='w-full bg-white'>
      <div className='m-auto flex max-w-1440pxr items-center justify-start gap-8pxr'>
        <h3 className='grow-1 mr-12pxr basis-59pxr whitespace-nowrap font-body2-semibold'>
          상세필터
        </h3>
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={6}
          width={1100}
          id='godminsup'
        >
          <SwiperSlide>
            <Selectable types='stay'>숙박 유형</Selectable>
          </SwiperSlide>
          <SwiperSlide>
            <Selectable types='home'>시설</Selectable>
          </SwiperSlide>
          <SwiperSlide>
            <Selectable>가격</Selectable>
          </SwiperSlide>
          <SwiperSlide>
            <Selectable types='theme'>테마</Selectable>
          </SwiperSlide>
          <SwiperSlide>
            <Selectable types='trip'>여행 타입</Selectable>
          </SwiperSlide>
        </Swiper>
        <div className='grow-1 custom-gradient flex w-350pxr gap-16pxr mobileMin:justify-end'>
          <div className='flex h-48pxr w-96pxr cursor-pointer items-center gap-4pxr rounded-full border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
            <h3 className='whitespace-nowrap text-gray600 font-body2-semibold'>
              필터
            </h3>
            <IconFilter />
          </div>
          <div className='flex h-48pxr w-102pxr cursor-pointer items-center gap-3pxr rounded-xl border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
            <IconArrowRightNon />
            <h3 className='whitespace-nowrap text-gray600 font-body2-semibold'>
              지도
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPanel;
/* className='grow-1 mobileMin:absolute mobileMin:w-230pxr custom-gradient mobileMin:right-0pxr mobileMin:justify-end flex gap-16pxr desktop:relative */
