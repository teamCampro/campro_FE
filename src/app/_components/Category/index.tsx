'use client';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryItem } from '../';
import { LINKS } from '../../_constants';

function Category() {
  return (
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
  );
}

export default Category;
