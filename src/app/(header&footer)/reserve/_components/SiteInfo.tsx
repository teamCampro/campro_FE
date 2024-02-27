'use client';

import { IconCall, IconLocation, IconStar } from '@/public/svgs';
import Image from 'next/image';
import { useState } from 'react';
import ModalForPlanImage from './ModalForPlanImage';
import { usePathname } from 'next/navigation';

export type additionalOption = {
  optionId: number;
  optionName: string;
  price: number;
};

export type additionalOptionFinal = {
  optionId: number;
  optionName: string;
  price: number;
  amount: number;
};
export interface ReserveInfoData {
  name: string;
  address: string;
  tel: string;
  parentSiteName: string;
  childSiteName?: string;
  maxPeople: string;
  price: number;
  planImage: string;
  siteImage: string;
  additionalOptions: additionalOption[];
}

interface SiteInfoType {
  size: 'mobile' | 'pc' | 'profile';
  siteInfo: ReserveInfoData;
}

interface SizeOptionType {
  mobile: string;
  pc: string;
  profile: string;
}

const SIZE_OPTION: SizeOptionType = {
  mobile: 'tabletMin:hidden flex',
  pc: 'tabletMin:flex hidden',
  profile: 'flex',
};

function SiteInfo({ size, siteInfo }: SiteInfoType) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  const reviewList = false;

  return (
    <>
      <div
        className={`border-bg-gray300 flex-col gap-24pxr border-b ${SIZE_OPTION[size]}`}
      >
        <figure className='flex justify-start gap-16pxr tabletMin:gap-24pxr'>
          <Image
            src={siteInfo.siteImage ? JSON.parse(siteInfo.siteImage)[0] : ''}
            width={140}
            height={140}
            alt='캠핑장 사이트 이미지'
            className='aspect-square rounded-xl'
          />
          <div className='flex  flex-col items-start'>
            <h3 className='text-gray800 font-title2-semibold'>
              {siteInfo.name}
            </h3>
            {reviewList && (
              <small className='flex text-gray500 font-caption2-medium'>
                <div className='h-16pxr w-16pxr'>
                  <IconStar width='100%' height='100%' viewBox='0 0 24 24' />
                </div>
                <span>{`7.2 (257)`}</span>
              </small>
            )}
            <ul
              className={`${reviewList ? 'mt-20pxr' : 'mt-37pxr'} flex flex-col gap-8pxr`}
            >
              <li className=' flex h-22pxr gap-4pxr'>
                <span className='flex-center h-22pxr w-22pxr'>
                  <IconLocation
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='#949494'
                  />
                </span>
                <div className='reserve-lineOver  text-gray600 font-body2-medium'>
                  {siteInfo.address}
                </div>
              </li>
              <li className=' flex h-22pxr gap-4pxr'>
                <span className='flex-center h-22pxr w-22pxr'>
                  <IconCall
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='#949494'
                  />
                </span>
                <div className='reserve-lineOver  text-gray600  font-body2-medium '>
                  {siteInfo.tel}
                </div>
              </li>
            </ul>
          </div>
        </figure>
        <ul className='flex flex-col gap-12pxr pb-24pxr'>
          <li className='flex-center justify-start gap-16pxr leading-[140%] text-gray500 font-body2-semibold'>
            예약 사이트
            <span className='flex-center gap-4pxr text-gray700 font-body1'>
              <h4 className='font-body1-bold'>
                {siteInfo.parentSiteName}
                {siteInfo.childSiteName}
              </h4>
              <div
                onClick={openModal}
                className='cursor-pointer text-second100 underline font-body2-semibold'
              >
                배치도
              </div>
            </span>
          </li>
          <li className='flex-center justify-start gap-28pxr text-gray500 font-body2-semibold'>
            기준 인원
            <span className='text-gray700 font-body1'>
              최대 {siteInfo.maxPeople}인
            </span>
          </li>
        </ul>
      </div>
      {isOpenModal && (
        <ModalForPlanImage
          onClose={closeModal}
          planImage={[siteInfo?.planImage]}
        />
      )}
    </>
  );
}

export default SiteInfo;
