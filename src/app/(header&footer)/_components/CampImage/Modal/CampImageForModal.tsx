import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { useState } from 'react';
import ModalAboutHeader from './ModalAboutHeader';

function CampImageForModal({
  imgUrls,
  onClose,
  title,
}: {
  imgUrls: string[];
  onClose: () => void;
  title: string;
}) {
  const [mainImage, setMainImage] = useState<string>(imgUrls[0]);

  const handleClickImage = (img: string) => {
    setMainImage(img);
  };

  return (
    <div className='flex w-full  max-w-1008pxr flex-col items-start rounded-[16px] bg-white pt-16pxr'>
      <ModalAboutHeader onClose={onClose} title={title} />
      <div className='flex w-full flex-col items-center justify-center  bg-gray100 '>
        <div className=' flex-center w-full'>
          {mainImage && (
            <Image
              className='flex w-full  cursor-pointer'
              src={mainImage}
              width={586}
              height={356}
              alt='메인 캠프 이미지'
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>

        <Swiper
          id='campImage-swiper'
          className='!flex w-full items-start !gap-12pxr  bg-white !p-16pxr'
          slidesPerView='auto'
        >
          {imgUrls.slice(0, Number(imgUrls.length)).map(
            (imgUrl, i) =>
              imgUrl && (
                <SwiperSlide key={imgUrl}>
                  <Image
                    className={`${mainImage === imgUrl ? 'border-[3px] border-green-500' : 'border-white'} flex  w-full  rounded-[12px] border object-cover hover:brightness-[0.7]`}
                    src={imgUrl}
                    alt={`camp-image${i}`}
                    fill
                    onClick={() => handleClickImage(imgUrl)}
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
