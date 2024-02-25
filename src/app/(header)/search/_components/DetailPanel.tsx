'use client';

import Selectable from '@/components/Dropdown/Selectable';
import { useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconFilter } from '@/public/svgs';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface DetailPanelType {
  handleDropClick: (id: number) => void;
  handleOpen: () => void;
}

function DetailPanel({ handleDropClick, handleOpen }: DetailPanelType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;
  const details = useAppSelector((state) => state.detail);
  const checkList = useAppSelector((state) => state.styleSetting);

  return (
    <div className='w-full bg-white'>
      <div className='relative m-auto flex max-w-1360pxr items-center justify-start gap-8pxr mobile:justify-center tabletMin:px-40pxr tabletMin:pt-16pxr'>
        <h3 className='flex-center relative z-10 mr-12pxr h-48pxr basis-59pxr whitespace-nowrap bg-white font-body2-semibold mobile:hidden'>
          상세필터
        </h3>
        <div className='filterHidden flex flex-grow-2 gap-6pxr mobile:w-full mobile:flex-col mobile:border-b mobile:border-t mobile:border-gray300 mobile:px-0pxr'>
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
              console.log(detail.type)
              const {name} = detail
              return (
                <SwiperSlide
                style={{ width: 'auto', display: 'inline-block' }}
                  key={detail.id}
                  className={`  mobile:!w-full`}
                >
                  <Selectable
                    handleDropClick={handleDropClick}
                    typeInfo={detail}
                    selectLength={checkList.select[name].length > 0}
                  >
                    {checkList.select[name].length > 0 && !isMobile ?  checkList.select[name].map(list => list.type) : detail.type}
                  </Selectable>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <button
          type='button'
          onClick={handleOpen}
          className='custom-gradient absolute -right-60pxr z-10 flex w-150pxr -translate-x-1/2 justify-center mobile:hidden'
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
