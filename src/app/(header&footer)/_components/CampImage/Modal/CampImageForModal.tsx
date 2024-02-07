import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { CampImageData } from '../index';
import { useState } from 'react';
import ModalAboutHeader from './ModalAboutHeader';

function CampImageForModal({
  campImages,
  onClose,
}: {
  campImages: CampImageData[];
  onClose: () => void;
}) {
  const [mainImage, setMainImage] = useState<string>(campImages[0].imgUrl);

  const handleClickImage = (img: string) => {
    setMainImage(img);
  };

  return (
    <div className='  flex w-full  max-w-1008pxr flex-col items-start rounded-[16px] bg-white pt-16pxr'>
      <ModalAboutHeader onClose={onClose} />
      <div className='flex w-full flex-col items-center justify-center  bg-gray100'>
        <div className=' flex-center w-full'>
          {mainImage && (
            <Image
              className='flex w-full '
              src={mainImage}
              width={586}
              height={356}
              alt='메인 캠프 이미지'
            />
          )}
        </div>

        <Swiper
          id='campImage-swiper'
          className='!flex w-full items-start !gap-12pxr  bg-white !p-16pxr'
          slidesPerView='auto'
        >
          {campImages.slice(0, Number(campImages.length)).map(
            (item, i) =>
              item.imgUrl && (
                <SwiperSlide key={item.id}>
                  <Image
                    className={`${mainImage === item.imgUrl ? 'border-[3px] border-green-500' : 'border-white'} flex  w-full  rounded-[12px] border object-cover`}
                    src={item.imgUrl}
                    alt={`camp-image${i}`}
                    fill
                    onClick={() => handleClickImage(item.imgUrl)}
                  />
                </SwiperSlide>
              ),
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default CampImageForModal;
