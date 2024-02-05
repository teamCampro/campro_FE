'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { useAppSelector } from '@/hooks/redux';
import { IconFilter } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Type {
  handleDropClick: (id: number) => void;
  handleOpen: () => void;
}

function DetailPanel({ handleDropClick, handleOpen }: Type) {
  const details = useAppSelector((state) => state.detail);

  return (
    <div className='w-full bg-white mobile:flex-col'>
      <div className='m-auto flex max-w-1440pxr items-center justify-start gap-8pxr mobile:justify-center'>
        <h3 className='flex-center relative z-10 mr-12pxr h-48pxr basis-59pxr whitespace-nowrap bg-white font-body2-semibold mobile:hidden'>
          상세필터
        </h3>
        <div className='mobileMiddle:max-w-360pxr mobileMiddle:px-0pxr flex gap-6pxr mobile:w-full mobile:flex-col mobile:px-24pxr'>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            slidesPerView={'auto'}
            centeredSlides={false}
            spaceBetween={6}
            initialSlide={0}
            slideToClickedSlide
            direction='vertical'
            id='filterSlide'
            className='!overflow-visible'
            breakpoints={{
              768: {
                direction: 'horizontal',
              },
            }}
          >
            {details.map((detail) => {
              const textLength = detail.type.length > 2;
              return (
                <SwiperSlide
                  key={detail.id}
                  className={`${textLength ? '!w-121pxr' : '!w-90pxr'} z-0 mobile:!w-full`}
                >
                  <Selectable
                    handleDropClick={handleDropClick}
                    typeInfo={detail}
                  >
                    {detail.type}
                  </Selectable>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button
          type='button'
          onClick={handleOpen}
          className='custom-gradient z-10 flex flex-1 gap-16pxr mobileMin:justify-end mobile:hidden'
        >
          <div className='flex h-48pxr w-96pxr cursor-pointer items-center gap-4pxr rounded-full border bg-white py-12pxr pl-20pxr pr-14pxr font-medium'>
            <h3 className='whitespace-nowrap text-center text-gray600 font-body2-semibold'>
              필터
            </h3>
            <IconFilter />
          </div>
        </button>
      </div>
    </div>
  );
}
export default DetailPanel;
