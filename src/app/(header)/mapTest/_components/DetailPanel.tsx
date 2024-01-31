'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { IconArrowRightNon, IconFilter } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import DeTailList from './DeTailList';
import { useCallback } from 'react';
import { useAppSelector } from '@/hooks/redux';

function DetailPanel() {
  return (
    <div className='w-full bg-white'>
      <div className='m-auto flex max-w-1440pxr items-center justify-start gap-8pxr'>
        <h3 className='flex-center relative z-10 mr-12pxr h-48pxr basis-59pxr whitespace-nowrap bg-white font-body2-semibold'>
          상세필터
        </h3>
        <div className='flex gap-6pxr'>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView={'auto'}
            centeredSlides={false}
            spaceBetween={6}
            initialSlide={0}
            id='filterSlide'
            className='!overflow-visible'
          >
            <SwiperSlide className='!w-121pxr'>
              <Selectable types='stay'>숙박 유형</Selectable>
            </SwiperSlide>
            <SwiperSlide className='!w-90pxr'>
              <Selectable types='home'>시설</Selectable>
            </SwiperSlide>
            <SwiperSlide className='!w-90pxr'>
              <Selectable>가격</Selectable>
            </SwiperSlide>
            <SwiperSlide className='!w-90pxr'>
              <Selectable types='theme'>테마</Selectable>
            </SwiperSlide>
            <SwiperSlide className='!w-121pxr'>
              <Selectable types='trip'>여행 타입</Selectable>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='grow-1 custom-gradient absolute right-0pxr z-10 flex w-250pxr gap-16pxr mobileMin:justify-end'>
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

{
  /* {detailState.map((list) => {
            return <DeTailList key={list.id}>{list.type}</DeTailList>;
          })} */
}
{
  /* <DeTailList>숙박 유형</DeTailList>
          <DeTailList>시설</DeTailList>
          <DeTailList>가격</DeTailList>
          <DeTailList>테마</DeTailList>
          <DeTailList>여행 타입</DeTailList> */
}
