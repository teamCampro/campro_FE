'use client';

import Button from '@/components/Button';
import Chip from '@/components/Chip';
import { IconArrowLeftNon, IconClose } from '@/public/svgs';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CampingZoneSite } from '../[id]/page';
import SiteInfoList from './SiteInfoList';

interface CampSiteDetailProps {
  onClose: () => void;
  site: CampingZoneSite;
  handleReserve: (siteId: number) => void;
  imageUrls: string[];
}

function CampSiteDetail({
  onClose,
  site,
  handleReserve,
  imageUrls,
}: CampSiteDetailProps) {
  return (
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mobile:inset-0pxr mobile:translate-x-0pxr mobile:translate-y-0pxr'>
      <div className='flex h-auto max-h-1008pxr w-full max-w-1008pxr flex-col gap-16pxr rounded-2xl bg-white px-24pxr pb-28pxr pt-16pxr mobile:relative mobile:h-screen  mobile:max-h-none mobile:justify-between mobile:overflow-auto mobile:rounded-none mobile:px-0pxr mobile:pb-0pxr tablet:max-w-767pxr tablet1002:max-w-688pxr'>
        <div className='flex gap-16pxr mobile:px-20pxr'>
          <button type='button' onClick={onClose} className='mobile:hidden'>
            <IconClose fill='#949494' />
          </button>
          <button
            type='button'
            onClick={onClose}
            className='hidden text-gray500 mobile:block'
          >
            <IconArrowLeftNon />
          </button>
          <h4 className='flex-1 text-center text-black font-title1-bold'>
            상세 정보
          </h4>
        </div>
        <div className='flex flex-col gap-32pxr mobile:h-auto mobile:gap-20pxr mobile:px-20pxr'>
          <div className='flex flex-col gap-28pxr mobile:gap-20pxr'>
            <Swiper
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              id='detail-swiper'
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={true}
              className='h-full w-full'
            >
              {imageUrls.map((image, i) => (
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
            <div className='flex justify-around gap-128pxr px-16pxr mobile:flex-col mobile:gap-20pxr tablet:justify-around tablet:gap-0pxr'>
              <div className='flex flex-col gap-24pxr mobile:gap-20pxr'>
                <div className='flex flex-col gap-2pxr'>
                  <div className='flex gap-4pxr'>
                    <Chip>{site.campingType}</Chip>
                  </div>
                  <h4 className='text-32pxr font-semibold leading-[1.4] tracking-[0.32px] text-black'>
                    {site.parentSiteName}
                  </h4>
                  <span className='text-gray500 font-caption1-medium'>
                    임시 구역
                  </span>
                </div>
                <div className='flex flex-col gap-12pxr mobile:border-b mobile:border-gray200 mobile:pb-20pxr'>
                  <h6 className='font-body1-bold'>크기</h6>
                  <span className='text-gray500 font-body2-medium'>
                    임시 크기 (임시 바닥)
                  </span>
                </div>
              </div>
              <div className='flex gap-80pxr mobile:flex-col mobile:gap-20pxr tablet:gap-72pxr'>
                <SiteInfoList
                  title='기본 정보'
                  infos={[
                    `입실 ${site.checkInTime} - 퇴실 ${site.checkOutTime}`,
                    `${site.maxPeople}인 기준 (${true ? '인원 추가 가능' : '인원 추가 불가'})`,
                    `최소 ${site.minNights}박`,
                    `반려동물 숙박 ${site.petYn === 1 ? '가능' : '불가'}`,
                    `최소 ${site.parkingGuide}대`,
                    `트레일러 진입 ${true ? '가능' : '불가'}`,
                    `캠핑카 진입 ${true ? '가능' : '불가'}`,
                  ]}
                />
                <SiteInfoList
                  title='시설/환경'
                  infos={['임시시설1', '임시시설2', '임시시설3', '임시시설4']}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='h-auto w-full bg-white px-20pxr py-16pxr mobile:sticky mobile:bottom-0pxr mobile:z-10 mobile:w-full mobile:shadow-overViewButton'>
          <Button.Round
            size='sm'
            custom='w-full !h-56pxr'
            onClick={() => handleReserve(site.id)}
          >
            예약하기
          </Button.Round>
        </div>
      </div>
    </div>
  );
}

export default CampSiteDetail;
