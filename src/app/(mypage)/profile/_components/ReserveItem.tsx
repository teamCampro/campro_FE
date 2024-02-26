'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import WriteReviewModal from './WriteReviewModal';
import getFormattedDate from '@/src/app/_utils/getFormattedDate';
import getOneFormatDate from '@/src/app/_utils/getOneFormatDate';
import { ReserveStateType } from './ReserveList';
import { ReservationListType } from '@/src/app/_constants/reserveList';
import { useQuery } from '@tanstack/react-query';
import getOneReserve from '@/src/app/_data/profile/getOneReserve';

interface ReserveItemType {
  list: ReservationListType;
  reserveState: ReserveStateType[];
  status: string;
}

function ReserveItem({ list, reserveState, status }: ReserveItemType) {
  const [isClose, setIsClose] = useState(false);

  const handleModal = () => {
    setIsClose(!isClose);
  };

  const checkState = (check: string) => {
    switch (check) {
      case 'RESERVE_WAITING':
        return '예약대기';
      case 'RESERVE_COMPLETE':
        return '예약완료';
      case 'RESERVE_CANCEL':
        return '예약취소';
      case 'SERVICE_COMPLETE':
        return '이용완료';
    }
  };

  const statusColor = (check: string) => {
    switch (check) {
      case 'RESERVE_WAITING':
        return 'text-[#7d6f5a]';
      case 'RESERVE_COMPLETE':
        return 'text-primary100';
      case 'RESERVE_CANCEL':
        return 'text-red-500';
      case 'SERVICE_COMPLETE':
        return 'tetxt-[#555]';
    }
  };

  return (
    <>
      <figure
        className={`flex flex-col justify-start gap-16pxr rounded-xl border p-24pxr tabletMin:flex-row tabletMin:gap-24pxr`}
      >
        <Image
          src={
            'https://gocamping.or.kr/upload/camp/100015/thumb/thumb_1000_2030bbRKPAcdMGKxAxtmMWxD.jpg' /* list.image */
          }
          width={140}
          height={140}
          alt='캠핑장 사이트 이미지'
          className='rounded-xl'
        />
        <div className='flex w-full flex-col justify-between mobile:gap-20pxr tabletMin:flex-row'>
          <div className='profile-width flex w-full flex-col gap-12pxr'>
            <div className=''>
              <h3
                className={`leading-[140%] text-primary100 font-body2-bold ${statusColor(list.status)}`}
              >
                {checkState(list.status)}
              </h3>
              <h2 className='profile-lineOver whitespace-nowrap leading-[160%] text-gray800 font-title1-bold'>
                {list.campingZoneName}
              </h2>
              <div className='leading-[140%] text-gray600 font-body2-medium'>
                {list.campingZoneSiteName}
              </div>
            </div>
            <div className='flex items-end justify-start gap-16pxr'>
              <div className='flex flex-col'>
                <small className='leading-[140%] text-gray500 font-caption2-semibold'>
                  입실
                </small>
                <h3 className='text-800 leading-[140%] font-body1-bold'>
                  {getOneFormatDate(list.stayStartAt)}
                </h3>
              </div>
              <div className='text-800 leading-[140%] font-title3-bold'>-</div>
              <div className='flex flex-col'>
                <small className='leading-[140%] text-gray500 font-caption2-semibold'>
                  퇴실
                </small>
                <h3 className='text-800 leading-[140%] font-body1-bold'>
                  {getOneFormatDate(list.stayEndAt)}
                </h3>
              </div>
            </div>
          </div>
          <div className='flex flex-row-reverse justify-start gap-12pxr tabletMin:flex-col'>
            {status === 'SERVICE_COMPLETE' ? (
              <Button.Round
                size='md'
                custom='!h-36pxr px-24pxr py-8pxr whitespace-nowrap !rounded-md !font-caption1-semibold bg-white text-gray700 border border-gray300 !bg-white hover:border-primary100 w-1/2 tabletMin:!w-106pxr'
                onClick={handleModal}
              >
                후기 등록
              </Button.Round>
            ) : null}
            <Link
              href={`/profile/reserveList/${list.id}`}
              className={`${status !== 'SERVICE_COMPLETE' ? 'w-full' : 'w-1/2'}`}
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
