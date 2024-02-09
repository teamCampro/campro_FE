'use client';

import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { IconClose } from '@/public/svgs';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SiteInfoList from './SiteInfoList';

const siteInfos = [
  {
    title: '기본 정보',
    infos: [
      '입실 12:00 - 퇴실 11:00',
      '2인 기준 (인원 추가 불가)',
      '최소 1박',
      '반려동물 숙박 불가',
      '최소 1대 (텐트옆 주차)',
      '트레일러 진입 가능',
      '캠핑카 진입 불가',
    ],
  },
  {
    title: '시설/환경',
    infos: ['공용 화장실', '공용 샤워실', '무료 와이파이', '매점', '바베큐'],
  },
];

const images = [
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D',
];

function CampSiteDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mobile:inset-0pxr mobile:translate-x-0pxr mobile:translate-y-0pxr'>
      <div className='flex h-744pxr w-767pxr flex-col gap-16pxr rounded-2xl bg-white px-24pxr pb-28pxr pt-16pxr mobile:h-screen mobile:w-full mobile:overflow-scroll mobile:rounded-none mobile:px-20pxr mobile:pb-16pxr tablet:h-733pxr tablet:w-688pxr'>
        <div className='flex gap-16pxr'>
          <button type='button' onClick={onClose}>
            <IconClose />
          </button>
          <h4 className='flex-1 text-center text-black font-title1-bold'>
            상세 정보
          </h4>
        </div>
        <div className='flex flex-col gap-32pxr mobile:gap-20pxr'>
          <div className='flex flex-col gap-28pxr mobile:gap-20pxr'>
            <Swiper
              id='detail-swiper'
              modules={[Pagination]}
              slidesPerView={1}
              pagination={true}
              className='h-full w-full'
            >
              {images.map((image, i) => (
                <SwiperSlide key={image + i}>
                  <Image
                    width={320}
                    height={197}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    className='aspect-719/291 rounded-xl mobile:aspect-320/197 tablet:aspect-2/1'
                    src={image}
                    alt='dd'
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className='flex justify-start gap-128pxr px-16pxr mobile:flex-col mobile:gap-20pxr tablet:justify-center tablet:gap-72pxr'>
              <div className='flex flex-col gap-24pxr mobile:gap-20pxr'>
                <div className='flex flex-col gap-2pxr'>
                  <div className='flex gap-4pxr'>
                    <Chip>텐트캠핑</Chip>
                  </div>
                  <h4 className='text-32pxr font-semibold leading-[1.4] tracking-[0.32px] text-black'>
                    A1-08
                  </h4>
                  <span className='font-caption1 text-gray500'>하단 구역</span>
                </div>
                <div className='flex flex-col gap-12pxr mobile:border-b mobile:border-gray200 mobile:pb-20pxr'>
                  <h6 className='font-body1-bold'>크기</h6>
                  <span className='text-gray500 font-body2'>
                    4.5x10m (파쇄석)
                  </span>
                </div>
              </div>
              <div className='flex gap-80pxr mobile:flex-col mobile:gap-20pxr tablet:gap-72pxr'>
                {siteInfos.map(({ title, infos }) => (
                  <SiteInfoList key={title} title={title} infos={infos} />
                ))}
              </div>
            </div>
          </div>
          <Button.Round size='sm' custom='w-full'>
            예약하기
          </Button.Round>
        </div>
      </div>
    </div>
  );
}

export default CampSiteDetail;
