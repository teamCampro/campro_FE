'use client';

import { IconClock } from '@/public/svgs';
import Image from 'next/image';
import CampSiteItem from './CampSiteItem';
const siteInfos = [
  {
    campingZoneName: 'A사이트',
    siteName: 'A1-08',
    reserveTime: '입실 12:00 - 퇴실 11:00',
    fee: 800000,
    feeBaseDate: '1박 기준',
  },
];

function CampSiteList() {
  return (
    <div className='flex w-full max-w-980pxr gap-20pxr bg-gray100 px-23pxr py-24pxr mobile:max-w-767pxr mobile:flex-1 mobile:flex-col mobile:p-0pxr'>
      <div className='flex w-full max-w-174pxr flex-col gap-12pxr mobile:contents mobile:h-full mobile:max-w-none mobile:flex-col mobile:gap-20pxr'>
        <div className='max-h-174pxr w-full max-w-174pxr mobile:h-full mobile:max-h-none mobile:max-w-none'>
          <Image
            width={174}
            height={174}
            style={{
              width: '100%',
              height: 'auto',
            }}
            className='aspect-square rounded-xl mobile:aspect-340/220 mobile:rounded-none'
            src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfDB8MHx8fDA%3D'
            alt='dd'
          />
        </div>
        <div className='flex h-55pxr w-174pxr flex-col gap-2pxr mobile:h-full mobile:w-full mobile:px-20pxr'>
          <div className='flex items-center justify-between'>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock width='12' height='12' />
              텐트캠핑
            </span>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock /> 성인 2룸
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock width='12' height='12' />
              최소 1박
            </span>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock /> 텐트옆주차
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock width='12' height='12' />
              반려동물 가능
            </span>
            <span className='flex h-17pxr items-center gap-2pxr text-gray500 font-caption2-semibold'>
              <IconClock /> 4.5x10m
            </span>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-col gap-12pxr'>
        {siteInfos.map((siteInfo) => (
          <CampSiteItem
            key={siteInfo.campingZoneName + siteInfo.siteName}
            siteInfo={siteInfo}
          />
        ))}
      </div>
    </div>
  );
}

export default CampSiteList;
