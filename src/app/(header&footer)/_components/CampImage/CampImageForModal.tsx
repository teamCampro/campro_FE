import { Swiper, SwiperSlide } from 'swiper/react';

import ExitIcon from '@/public/svgs/exit.svg';
import Image from 'next/image';
import { CampImageData } from '.';
function CampImageForModal({ campImages }: { campImages: CampImageData[] }) {
  return (
    <div className='flex w-full max-w-1008pxr flex-col items-start rounded-[16px] bg-white pt-16pxr'>
      <div className='flex-center flex w-full gap-16pxr px-20pxr'>
        <ExitIcon />
        <span className='text-black font-title1-bold '> 전체 사진</span>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-10pxr bg-gray100'>
        <div className=' flex-center w-full'>
          <Image src={campImages[0].imgUrl} fill alt='메인 캠프 이미지' />
        </div>

        <Swiper
          className='gap10pxr flex items-start bg-white p-16pxr'
          slidesPerView={1}
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
      </div>
    </div>
  );
}

export default CampImageForModal;
