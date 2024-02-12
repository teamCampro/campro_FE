'use client';

import { ModalOutside, ModalPortal } from '@/components/index';
import { IconClock, IconTest } from '@/public/svgs';
import Image from 'next/image';
import { useState } from 'react';
import CampSiteDetail from './CampSiteDetail';
import CampSiteItem from './CampSiteItem';

interface CampSiteListProps {
  campingZone: {
    campingZoneName: string;
    siteInfos: {
      siteName: string;
      reserveTime: string;
      fee: number;
      feeBaseDate: string;
    }[];
  };
}
function CampSiteList({ campingZone }: CampSiteListProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex flex-col gap-24pxr mobile:gap-16pxr mobile:px-20pxr mobile359:px-0pxr'>
      <div
        className='camp-site flex w-full max-w-980pxr gap-20pxr rounded-2xl bg-gray100 px-23pxr py-24pxr mobile:grid mobile:max-w-767pxr mobile:flex-1 mobile:flex-col mobile:rounded-b-2xl mobile:px-0pxr mobile:pb-0pxr mobile:pt-0pxr mobile359:rounded-b-none mobile359:px-0pxr'
        id='site'
      >
        <div className='flex w-full max-w-174pxr flex-col gap-12pxr mobile:contents mobile:h-full mobile:max-w-none mobile:flex-col mobile:gap-20pxr mobile:rounded-xl'>
          <div className='camp-site-picture max-h-174pxr w-full max-w-174pxr mobile:h-full mobile:max-h-none mobile:max-w-none'>
            <Image
              width={174}
              height={174}
              style={{
                width: '100%',
                height: 'auto',
              }}
              className='aspect-square rounded-2xl mobile:aspect-340/220 mobile:rounded-b-none mobile359:rounded-none'
              src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D'
              alt='dd'
            />
          </div>
          <ul className='camp-site-info flex h-55pxr w-174pxr flex-col gap-2pxr mobile:h-full mobile:w-full mobile:rounded-b-2xl mobile:px-20pxr mobile:pb-24pxr mobile359:rounded-none'>
            <li className='flex items-center justify-between'>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                텐트캠핑
              </span>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                성인 2룸
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                최소 1박
              </span>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                텐트옆주차
              </span>
            </li>
            <li className='flex items-center justify-between'>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                반려동물 가능
              </span>
              <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
                <span className='inline-block h-12pxr w-12pxr'>
                  <IconClock width='100%' height='100%' viewBox='0 0 12 13' />
                </span>
                4.5x10m
              </span>
            </li>
          </ul>
        </div>
        <div className='camp-site-select flex w-full flex-col gap-12pxr mobile:px-20pxr'>
          <div className='flex h-32pxr justify-between mobile:items-center'>
            <h4 className='text-gray600 font-title3-semibold mobile:font-body2-semibold'>
              {campingZone.campingZoneName}
            </h4>
            <span
              className='flex cursor-pointer items-end gap-2pxr text-second100 font-caption1-semibold'
              onClick={() => setIsOpen(true)}
            >
              상세정보
              <IconTest />
            </span>
          </div>
          <CampSiteItem siteInfos={campingZone.siteInfos} />
        </div>
        {isOpen && (
          <ModalPortal>
            <ModalOutside
              onClose={() => {}}
              custom='bg-black-50 z-30 h-screen w-full left-0pxr top-0pxr'
            >
              <CampSiteDetail onClose={() => setIsOpen(false)} />
            </ModalOutside>
          </ModalPortal>
        )}
      </div>
    </div>
  );
}

export default CampSiteList;
