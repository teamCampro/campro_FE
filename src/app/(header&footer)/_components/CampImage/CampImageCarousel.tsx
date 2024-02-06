import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { CampImageData } from '.';
import Image from 'next/image';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

function CampImageCarousel({
  campImages,
}: {
  campImages: CampImageData[] | null;
}) {
  return (
    campImages && (
      <Swiper
        className='flex w-full max-w-1360pxr'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {campImages.slice(0, 5).map(
          (item, i) =>
            item.imgUrl && (
              <SwiperSlide className='flex w-full' key={item.id}>
                <Image
                  className='flex w-full object-cover'
                  src={item.imgUrl}
                  alt={`camp-image${i}`}
                  width={688}
                  height={398}
                />
              </SwiperSlide>
            ),
        )}
      </Swiper>
    )
  );
}

export default CampImageCarousel;
