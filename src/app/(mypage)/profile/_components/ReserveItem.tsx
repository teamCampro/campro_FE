'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WriteReviewModal from './WriteReviewModal';
import { ReserveListType } from '@/src/app/_constants/reserveList';
import getFormattedDate from '@/src/app/_utils/getFormattedDate';
import getOneFormatDate from '@/src/app/_utils/getOneFormatDate';
import { ReserveStateType } from './ReserveList';

interface ReserveItemType {
  list: ReserveListType;
  reserveState: ReserveStateType[];
}

function ReserveItem({ list, reserveState }: ReserveItemType) {
  const [isClose, setIsClose] = useState(false);

  const handleModal = () => {
    setIsClose(!isClose);
  };
  console.log(list);

  const checkState = (check: number) => {
    switch (check) {
      case 0:
        return '예약대기';
      case 1:
        return '예약완료';
      case 2:
        return '이용완료';
    }
  };

  return (
    <>
      <figure
        className={`flex flex-col justify-start gap-24pxr rounded-xl border p-24pxr tabletMin:flex-row`}
      >
        <Image
          src={list.image}
          width={140}
          height={140}
          alt='캠핑장 사이트 이미지'
          className='rounded-xl'
        />
        <div className='flex w-full flex-col justify-between mobile:gap-20pxr tabletMin:flex-row'>
          <div className='profile-width flex w-full flex-col gap-16pxr'>
            <div className=''>
              <h3 className='text-primary100 font-body2-bold'>
                {checkState(list.check_state)}
              </h3>
              <h2 className='profile-lineOver whitespace-nowrap text-gray800 font-title1-bold'>
                {list.placeName}
              </h2>
              <div className='text-gray600 font-body2-medium'>
                {`${list.site.campingZoneName} | ${list.site.siteName}`}
              </div>
            </div>
            <div className='flex items-end justify-start gap-16pxr'>
              <div>
                <small className='text-gray500 font-caption2-semibold'>
                  입실
                </small>
                <h3 className='text-800 font-body1-bold'>
                  {getOneFormatDate(list.start_day)}
                </h3>
              </div>
              <div className='text-800 font-title3-bold'>-</div>
              <div>
                <small className='text-gray500 font-caption2-semibold'>
                  퇴실
                </small>
                <h3 className='text-800 font-body1-bold'>
                  {getOneFormatDate(list.end_day)}
                </h3>
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse justify-start gap-12pxr tabletMin:flex-col'>
            <Button.Round
              size='md'
              custom='!h-36pxr px-24pxr py-8pxr whitespace-nowrap !rounded-md !font-caption1-semibold bg-white text-gray700 border border-gray300 !bg-white hover:border-primary100 w-1/2 tabletMin:!w-106pxr'
              onClick={handleModal}
            >
              후기 등록
            </Button.Round>
            <Link
              href={`/profile/reserveList/${list.orderId}`}
              className='w-1/2 '
              passHref
            >
              <Button.Round
                size='md'
                custom='!h-36pxr px-24pxr py-8pxr whitespace-nowrap !rounded-md !font-caption1-semibold bg-white text-gray700 border border-gray300 !bg-white hover:border-primary100 w-full tabletMin:!w-106pxr '
              >
                예약 상세
              </Button.Round>
            </Link>
          </div>
        </div>
      </figure>
      {isClose && <WriteReviewModal handleClick={handleModal} />}
    </>
  );
}

export default ReserveItem;
