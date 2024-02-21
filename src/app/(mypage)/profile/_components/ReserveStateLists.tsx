'use client';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReserveStateType } from './ReserveList';

interface ReserveStateListsType {
  handleClick: (id: number) => void;
  reserveState: ReserveStateType[];
}
function ReserveStateLists({
  handleClick,
  reserveState,
}: ReserveStateListsType) {
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
        {reserveState.map((list) => {
          return (
            <SwiperSlide
              key={list.id}
              style={{ width: 'auto', display: 'inline-block' }}
              className={`cursor-pointer rounded-full border px-20pxr py-12pxr hover:border-primary100 hover:text-primary100 ${list.isDone ? 'border-primary100 text-primary100' : 'border-gray300 text-gray600'}`}
              onClick={() => handleClick(list.id)}
            >
              <li>{list.name}</li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
}

export default ReserveStateLists;
