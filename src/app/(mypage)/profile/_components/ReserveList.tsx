'use client';

import { ReservationListType } from '@/src/app/_constants/reserveList';
import ReserveItem from './ReserveItem';
import ReserveStateLists from './ReserveStateLists';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '@/components/index';
import Link from 'next/link';
import {
  IconArrowRight,
  IconArrowRightNon,
  IconArrowRightNormal,
} from '@/public/svgs';

export interface ReserveStateType {
  id: number;
  name: string;
  status: string;
}

interface ReserveListType {
  userReserveData: ReservationListType[];
  status: string;
}

function ReserveList({ userReserveData, status }: ReserveListType) {
  const [reserveState, setReserveState] = useState<ReserveStateType[]>([
    { id: 1, name: '전체', status: 'all' },
    { id: 2, name: '예약대기', status: 'RESERVE_WAITING' },
    { id: 3, name: '예약완료', status: 'RESERVE_COMPLETE' },
    { id: 4, name: '예약취소', status: 'RESERVE_CANCEL' },
    { id: 5, name: '이용완료', status: 'SERVICE_COMPLETE' },
  ]);

  return (
    <>
      <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
        예약내역
      </h2>
      <ReserveStateLists status={status} reserveState={reserveState} />
      {userReserveData ? (
        <div className='flex flex-col gap-16pxr '>
          {userReserveData.map((list) => {
            return (
              <ReserveItem
                key={list.id}
                reserveState={reserveState}
                list={list}
                status={status}
              />
            );
          })}
        </div>
      ) : (
        <div className='flex-center flex-col gap-20pxr pt-108pxr mobile:pt-24pxr'>
          <div className='mobile:flex-center mobile:flex-col'>
            <h2 className='text-32pxr leading-[160%] text-gray600 font-h2-semibold mobile:text-22pxr mobile:font-title2-semibold'>
              아직 예약 내역이 없어요
            </h2>
            <p className='text-18pxr leading-[140%] text-gray500 font-body1-medium mobile:text-14pxr mobile:font-caption1-medium'>
              나에게 맞는 캠핑장을 찾아보는 건 어떨까요?
            </p>
          </div>
          <Link className='mobile:hidden' href='/'>
            <button className='flex-center gap-4pxr rounded-full border border-gray300 py-12pxr pl-20pxr pr-14pxr leading-[140%] text-gray600 font-body2-semibold'>
              캠핑장 예약하기
              <IconArrowRightNon fill='#949494' className='text-gray500' />
            </button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ReserveList;
