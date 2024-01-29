'use client';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryItem } from '.';
import { LINKS } from '../_constants';

function CategoryList() {
  return (
    <div className='flex h-full w-full max-w-1280pxr flex-col gap-16pxr tablet:gap-13pxr'>
      <h3 className='pl-10pxr text-black font-body1-medium tablet:font-title2-bold desktop:font-title1-semibold'>
        원하는 캠핑을 찾아보세요
      </h3>
      <div className='flex w-full justify-center rounded-xl bg-white shadow-categoryItem  tablet:bg-inherit tablet:shadow-none desktop:justify-normal'>
        <ul className='grid w-full max-w-288pxr grid-cols-4 gap-24pxr gap-y-20pxr px-16pxr py-24pxr tablet:flex tablet:max-w-1200pxr tablet:flex-1 tablet:gap-0pxr tablet:p-0pxr'>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            enabled={false}
            breakpoints={{
              768: { enabled: true, slidesPerView: 'auto', spaceBetween: 0 },
              1199: { slidesPerView: 8, spaceBetween: 16 },
            }}
            id='category-swiper'
          >
            {LINKS.map(({ href, text, icon }) => (
              <SwiperSlide key={text} id='category-slide'>
                <CategoryItem href={href} text={text} icon={icon} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </div>
  );
}

export default CategoryList;
