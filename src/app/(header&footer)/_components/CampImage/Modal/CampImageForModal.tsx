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
    <div className='flex h-542pxr w-full max-w-1008pxr flex-col items-start rounded-[16px] bg-white pt-16pxr'>
      <ModalAboutHeader onClose={onClose} title={title} />
      <div className='b flex w-full flex-col items-center justify-center rounded-b-2xl bg-gray100'>
        <div className='relative h-400pxr w-586pxr'>
          {mainImage && (
            <a
              href={mainImage}
              onClick={(event) => {
                event.preventDefault();
                window.open(
                  mainImage,
                  '_blank',
                  `width=${window.innerWidth},height=${window.innerHeight},scrollbars=no`,
                );
              }}
            >
              <Image
                className='flex w-full cursor-pointer hover:brightness-[0.7]'
                src={mainImage}
                fill
                alt='메인 캠프 이미지'
                style={{ objectFit: 'cover' }}
              />
            </a>
          )}
        </div>

        <Swiper
          id='campImage-swiper'
          className='!flex w-full items-start rounded-b-2xl !py-16pxr !pl-16pxr !pr-4pxr first-line:bg-white'
          slidesPerView='auto'
        >
          {imgUrls.map(
            (imgUrl, i) =>
              imgUrl && (
                <SwiperSlide key={imgUrl + i} className='mr-12pxr'>
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
