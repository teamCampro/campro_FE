'use client';

import { ReservationListType } from '@/src/app/_constants/reserveList';
import ReserveItem from './ReserveItem';
import ReserveStateLists from './ReserveStateLists';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Loading } from '@/components/index';

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
    { id: 4, name: '이용완료', status: 'SERVICE_COMPLETE' },
    { id: 5, name: '예약취소', status: 'RESERVE_CANCEL' },
  ]);

  if (!userReserveData) return <Loading />;
  return (
    <>
      <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
        예약내역
      </h2>
      <ReserveStateLists status={status} reserveState={reserveState} />
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
    </>
  );
}

export default ReserveList;
