'use client';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryItem } from '../';
import { LINKS } from '../../_constants';

function Category() {
  return (
    <div className='relative flex h-134pxr w-full max-w-1440pxr flex-col gap-16pxr mobile:h-245pxr mobile:gap-16pxr tablet:gap-13pxr'>
      <div className='absolute -left-10pxr bottom-0pxr flex w-full justify-normal bg-inherit shadow-none mobile:static mobile:justify-center mobile:rounded-xl mobile:bg-white mobile:shadow-categoryItem tablet:justify-normal'>
        <ul className='flex w-full flex-1 justify-center gap-16pxr p-0pxr mobile:grid mobile:max-w-288pxr mobile:grid-cols-4 mobile:gap-24pxr mobile:gap-y-20pxr mobile:px-16pxr mobile:py-24pxr'>
          <Swiper
            modules={[FreeMode]}
            freeMode={true}
            enabled={false}
            breakpoints={{
              768: { enabled: true, slidesPerView: 'auto', spaceBetween: 0 },
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

export default Category;
