'use client';

import Button from '@/components/Button';
import InfoAboutBookingPerson from '@/src/app/(header&footer)/reserve/_components/InfoAboutBookingPerson';
import InfoAboutReserve from '@/src/app/(header&footer)/reserve/_components/InfoAboutReserve';
import PaymentAmount from '@/src/app/(header&footer)/reserve/_components/PaymentAmount';
import SiteInfo, {
  ReserveInfoData,
} from '@/src/app/(header&footer)/reserve/_components/SiteInfo';
import { useState } from 'react';
import CancleReserverModal from './CancleReserverModal';
import getOneFormatDate from '@/src/app/_utils/getOneFormatDate';

interface ReserveInfoType {
  getDetailReserve: {
    campingZoneName: string;
    address: string;
    campingZoneTel: string;
    campingZoneSiteName: string;
    maxPeople: number;
    campingZoneSitePrice: number;
    adult: number;
    child: number;
    pet: number;
    stayStartAt: string;
    stayEndAt: string;
    carInfo: string;
    reservedAt: string;
    payMethod: string;
    status: string;
    userName: string;
    userPhone: string;
    siteImage: string;
  };
}

export interface ReservePersonInfoType {
  adult: number;
  child: number;
  pet: number;
  stayStartAt: string;
  stayEndAt: string;
}

export interface UserInfoType {
  userName: string;
  userPhone: string;
}

function ReserveInfo({ getDetailReserve }: ReserveInfoType) {
  const {
    campingZoneName,
    address,
    campingZoneTel,
    campingZoneSiteName,
    maxPeople,
    campingZoneSitePrice,
    adult,
    child,
    pet,
    stayStartAt,
    stayEndAt,
    carInfo,
    reservedAt,
    payMethod,
    status,
    userName,
    userPhone,
    siteImage,
  } = getDetailReserve;

  const [isClose, setIsClose] = useState(false);

  const siteInfo: ReserveInfoData = {
    name: campingZoneName,
    address: address,
    tel: campingZoneTel,
    parentSiteName: campingZoneSiteName,
    maxPeople: String(maxPeople),
    price: campingZoneSitePrice,
    siteImage:
      siteImage && siteImage.length > 0 ? JSON.parse(siteImage)[0] : '',
  };

  const reservePersonInfo: ReservePersonInfoType = {
    adult,
    child,
    pet,
    stayStartAt: getOneFormatDate(stayStartAt),
    stayEndAt: getOneFormatDate(stayEndAt),
  };

  const userDecideInfo: UserInfoType = {
    userName,
    userPhone,
  };

  const handleModal = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <div className='flex-center justify-between tabletMin:mb-32pxr'>
        <h2 className='hidden leading-[140%] font-h1-semibold tabletMin:block'>
          예약 상세
        </h2>
        <Button.Round
          custom={`!w-108pxr bg-white border border-gray200 font-caption1-semibold !h-36pxr hidden tabletMin:flex !text-gray500 tabletMin:hover:!text-primary100 !rounded-md ${status == 'SERVICE_COMPLETE' || status == 'RESERVE_CANCEL' ? 'hidden' : ''}`}
          onClick={handleModal}
        >
          예약 취소
        </Button.Round>
      </div>
      <div id='profile' className='flex flex-col gap-24pxr'>
        <SiteInfo size='profile' siteInfo={siteInfo} />
        <InfoAboutReserve reservePersonInfo={reservePersonInfo} />
        <InfoAboutBookingPerson userDecideInfo={userDecideInfo} />
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className='leading-[160%] text-black font-title3-semibold tabletMin:font-title1-semibold'>
            차량 추가
          </h3>
          <div className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
            차량번호
            <span className='leading-[140%] text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
              {carInfo}
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className=' leading-[160%] text-black font-title3-semibold tabletMin:font-title1-semibold'>
            추가 옵션
          </h3>
          <ul className='flex flex-col gap-16pxr'>
            <li className='leading-[140%] text-gray800 font-body2-semibold tabletMin:font-body1-medium '>
              숫불 세트(고기2인분+식기)
            </li>
            <li className='leading-[140%] text-gray800 font-body2-semibold tabletMin:font-body1-medium'>
              장작 세트
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-between tabletMin:flex-row'>
          <div className='moblie:border-b flex w-full flex-col gap-16pxr pb-24pxr tabletMin:border-r tabletMin:pr-32pxr'>
            <h3 className='leading-[160%] text-black font-title3-semibold tabletMin:font-title1-semibold'>
              결제 정보
            </h3>
            <ul className='flex flex-col gap-12pxr'>
              <li className='flex-center justify-start gap-35pxr leading-[140%] text-gray500 font-body2-semibold'>
                <h4 className='whitespace-nowrap'>결제 일시</h4>
                <span className='text-gray800 font-body2-medium'>
                  {getOneFormatDate(reservedAt, true)}
                </span>
              </li>
              <li className='flex-center justify-start gap-35pxr leading-[140%] text-gray500 font-body2-semibold'>
                <h4 className='whitespace-nowrap'>결제 수단</h4>
                <span className='text-gray800 font-body2-medium'>
                  {/* 현대 ****-****-**21 */}
                  {payMethod}
                </span>
              </li>
            </ul>
          </div>
          <div className='flex w-full flex-col gap-12pxr tabletMin:pl-32pxr'>
            <PaymentAmount sitePrice={40000} />
            <div className='flex justify-between leading-[140%] text-black font-body2-semibold'>
              <h2>총 결제금액</h2>
              <h2>130,000원</h2>
            </div>
          </div>
          <Button.Round
            custom='w-full mt-40pxr mb-20pxr bg-white border border-gray200 font-caption1-semibold !h-36pxr flex tabletMin:hidden !text-gray700 !rounded-md'
            onClick={handleModal}
          >
            예약 취소
          </Button.Round>
        </div>
      </div>
      {isClose && <CancleReserverModal handleClick={handleModal} />}
    </>
  );
}

export default ReserveInfo;
