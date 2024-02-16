'use client';

import Button from '@/components/Button';
import InfoAboutBookingPerson from '@/src/app/(header&footer)/reserve/_components/InfoAboutBookingPerson';
import InfoAboutReserve from '@/src/app/(header&footer)/reserve/_components/InfoAboutReserve';
import PaymentAmount from '@/src/app/(header&footer)/reserve/_components/PaymentAmount';
import SiteInfo from '@/src/app/(header&footer)/reserve/_components/SiteInfo';
import { useState } from 'react';
import CancleReserverModal from './CancleReserverModal';
import { ReserveListType } from '@/src/app/_constants/reserveList';

function ReserveInfo({ campList }: { campList: ReserveListType }) {
  const [isClose, setIsClose] = useState(false);

  const handleModal = () => {
    setIsClose(!isClose);
  };

  return (
    <>
      <div className='flex-center justify-between tabletMin:mb-32pxr'>
        <h2 className='hidden font-h1-semibold tabletMin:block'>예약 상세</h2>
        <Button.Round
          custom={`!w-108pxr bg-white border border-gray200 font-caption1-semibold !h-36pxr hidden tabletMin:flex !text-gray500 !rounded-md ${campList.check_state == 2 ? 'hidden' : ''}`}
          onClick={handleModal}
        >
          예약 취소
        </Button.Round>
      </div>
      <div id='profile' className='flex flex-col gap-24pxr'>
        <SiteInfo size='profile' campList={campList} />
        <InfoAboutReserve campList={campList} />
        <InfoAboutBookingPerson />
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
            차량 추가
          </h3>
          <div className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
            차량번호
            <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
              가나109231
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
          <h3 className=' text-black font-title3-semibold tabletMin:font-title1-semibold'>
            추가 옵션
          </h3>
          <ul className='flex flex-col gap-16pxr'>
            <li className='text-gray800 font-body2-semibold tabletMin:font-body1-medium'>
              숫불 세트(고기2인분+식기)
            </li>
            <li className='text-gray800 font-body2-semibold tabletMin:font-body1-medium'>
              장작 세트
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-between tabletMin:flex-row'>
          <div className='moblie:border-b flex w-full flex-col gap-16pxr pb-24pxr tabletMin:border-r tabletMin:pr-32pxr'>
            <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
              결제 정보
            </h3>
            <ul className='flex flex-col gap-12pxr'>
              <li className='flex-center justify-start gap-35pxr text-gray600 font-body2-medium'>
                <h4 className='whitespace-nowrap'>결제 일시</h4>
                <span className='text-gray800 font-body2-medium'>
                  2024.12.28(토) 14:29
                </span>
              </li>
              <li className='flex-center justify-start gap-35pxr text-gray600 font-body2-medium'>
                <h4 className='whitespace-nowrap'>결제 수단</h4>
                <span className='text-gray800 font-body2-medium'>
                  현대 ****-****-**21
                </span>
              </li>
            </ul>
          </div>
          <div className='flex w-full flex-col gap-12pxr tabletMin:pl-32pxr'>
            <PaymentAmount />
            <div className='flex justify-between text-black font-body2-semibold'>
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
