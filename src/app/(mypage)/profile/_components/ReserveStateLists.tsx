'use client';

import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReserveStateType } from './ReserveList';
import Link from 'next/link';

interface ReserveStateListsType {
  reserveState: ReserveStateType[];
  status: string;
}
function ReserveStateLists({
  reserveState,
  status = 'all',
}: ReserveStateListsType) {
  const getStatusQuery = (status: string = 'all') => {
    if (status === 'all') {
      return '/profile/reserveList';
    } else {
      return `/profile/reserveList?status=${status}`;
    }
  };
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
              className={`h-46pxr w-68pxr cursor-pointer rounded-full border  hover:border-primary100 hover:text-primary100 ${status === list.status ? 'border-primary100 text-primary100' : 'border-gray300 text-gray600'}`}
            >
              <li /* className='h-46pxr w-68pxr' */>
                <Link
                  className='inline-block  h-full w-full px-20pxr py-12pxr'
                  href={getStatusQuery(list.status)}
                >
                  {list.name}
                </Link>
              </li>
            </SwiperSlide>
          );
        })}
      </ul>
    </Swiper>
  );
}

export default ReserveStateLists;
