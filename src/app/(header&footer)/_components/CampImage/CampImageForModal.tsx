import { Swiper, SwiperSlide } from 'swiper/react';

import ExitIcon from '@/public/svgs/exit.svg';
import Image from 'next/image';
import { CampImageData } from '.';
import { useState } from 'react';
function CampImageForModal({ campImages }: { campImages: CampImageData[] }) {
  const [mainImage, setMainImage] = useState<string>(campImages[0].imgUrl);
  const [subImages, setSubImages] = useState<CampImageData[]>(campImages);

  console.log(subImages);
  const handleClickImage = (img: string) => {
    setMainImage(img);
    setSubImages(subImages.filter((sub) => sub.imgUrl != mainImage));
  };

  return (
    <div className='flex w-full  max-w-1008pxr flex-col items-start rounded-[16px] bg-white pt-16pxr'>
      <div className='flex-center flex w-full gap-16pxr px-20pxr'>
        <ExitIcon />
        <span className='text-black font-title1-bold '> 전체 사진</span>
      </div>
      <div className='flex w-full flex-col items-center justify-center  bg-gray100'>
        <div className=' flex-center w-full'>
          {mainImage && (
            <Image
              className='flex w-full '
              src={campImages[0].imgUrl}
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
          breakpoints={{
            1200: {
              slidesPerView: 7.5,
            },
            768: {
              slidesPerView: 6,
            },
          }}
        >
          {subImages.slice(0, 9).map(
            (item, i) =>
              item.imgUrl && (
                <SwiperSlide className='!flex w-full ' key={item.id}>
                  <Image
                    className={`flex h-100pxr w-100pxr rounded-[12px] object-cover ${mainImage === item.imgUrl ? 'border-3 border-green-500' : 'border-white'}`}
                    src={item.imgUrl}
                    alt={`camp-image${i}`}
                    width={100}
                    height={100}
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
