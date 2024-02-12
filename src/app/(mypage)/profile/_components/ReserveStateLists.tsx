'use client';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ReserveListType {
  id: number;
  name: string;
  isDone: boolean;
}

const RESERVE_LISTS: ReserveListType[] = [
  { id: 1, name: '전체', isDone: false },
  { id: 2, name: '예약대기', isDone: false },
  { id: 3, name: '예약완료', isDone: false },
  { id: 4, name: '이용완료', isDone: false },
];

function ReserveStateLists() {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={true}
      slidesPerView={'auto'}
      spaceBetween={12}
      initialSlide={0}
      slideToClickedSlide
      id='profileSlide'
      className='mb-16pxr'
      breakpoints={{
        767: {
          enabled: false,
        },
      }}
    >
      <ul className='flex justify-start gap-12pxr text-gray600 font-body2-semibold'>
        {RESERVE_LISTS.map((list) => {
          return (
            <SwiperSlide
              key={list.id}
              style={{ width: 'auto', display: 'inline-block' }}
              className='cursor-pointer rounded-full border border-gray300 px-20pxr py-12pxr hover:border-primary100 hover:text-primary100'
            >
              <li> {list.name}</li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
}

export default ReserveStateLists;
