'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { ModalLayout, ModalOutside, ModalPortal } from '@/components/index';
import { useAppSelector } from '@/hooks/redux';
import { setClose, setDetailState } from '@/src/app/_utils/detailState';
import { useDispatch } from 'react-redux';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Type {
  handleDropClick: (id: number) => void;
}

function DetailPanel({ handleDropClick }: Type) {
  const details = useAppSelector((state) => state.detail);
  const dispatch = useDispatch();

  /* const handleDropClick = (id: number) => {
    dispatch(setDetailState(id));
  }; */
  return (
    <div className='w-full bg-white mobile:flex-col'>
      <div className='m-auto flex max-w-1440pxr items-center justify-start gap-8pxr mobile:justify-center'>
        <h3 className='flex-center relative z-10 mr-12pxr h-48pxr basis-59pxr whitespace-nowrap bg-white font-body2-semibold mobile:hidden'>
          상세필터
        </h3>
        <div className='flex gap-6pxr mobile:w-full mobile:flex-col mobile:px-24pxr'>
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
                  className={`${textLength ? '!w-121pxr' : '!w-90pxr'} mobile:!w-full`}
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
      </div>
    </div>
  );
}
export default DetailPanel;
