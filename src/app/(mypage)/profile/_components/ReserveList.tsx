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
  isDone: boolean;
  status: string;
}

interface ReserveListType {
  userReserveData: ReservationListType[];
  status: string;
}

function ReserveList({ userReserveData, status }: ReserveListType) {
  console.log(userReserveData);
  const [reserveState, setReserveState] = useState<ReserveStateType[]>([
    { id: 1, name: '전체', status: 'all', isDone: true },
    { id: 2, name: '예약대기', status: 'RESERVE_WAITING', isDone: false },
    { id: 3, name: '예약완료', status: 'RESERVE_COMPLETE', isDone: false },
    { id: 4, name: '이용완료', status: 'SERVICE_COMPLETE', isDone: false },
    { id: 5, name: '예약취소', status: 'RESERVE_CANCEL', isDone: false },
  ]);

  if (!userReserveData) return <Loading />;
  return (
    <>
      <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
        예약내역
      </h2>
      <ReserveStateLists reserveState={reserveState} />
      <div className='flex flex-col gap-16pxr '>
        {userReserveData.map((list) => {
          console.log(list);
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
