import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalAboutCampImage from './Modal/ModalAboutCampImage';

function CampImageCarousel({ imgUrls }: { imgUrls: string[] }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleRenderModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const swiperSettings = {
    className: 'flex w-full max-w-1360pxr',
    modules: [Navigation, Pagination, A11y, Autoplay],
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: { clickable: true },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      {
        <Swiper {...swiperSettings}>
          {imgUrls?.slice(0, 5).map((imgUrl, i) =>
            imgUrl ? (
              <SwiperSlide className='flex w-full' key={imgUrl + i}>
                <Image
                  className='flex w-full cursor-pointer rounded-2xl object-cover hover:brightness-[0.7] mobile:rounded-none'
                  src={imgUrl}
                  alt={`camp-image${i}`}
                  width={688}
                  height={398}
                  onClick={handleRenderModal}
                />
              </SwiperSlide>
            ) : null,
          )}
        </Swiper>
      }

      {isOpenModal && (
        <ModalAboutCampImage imgUrls={imgUrls} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default CampImageCarousel;
