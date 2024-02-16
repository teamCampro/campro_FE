'use client';

import { ReserveListType } from '@/src/app/_constants/reserveList';
import ReserveItem from './ReserveItem';
import ReserveStateLists from './ReserveStateLists';
import { useState } from 'react';

export interface ReserveStateType {
  id: number;
  name: string;
  isDone: boolean;
}

function ReserveList({ reserveList }: { reserveList: ReserveListType[] }) {
  const [newReserveList, setNewReserveList] =
    useState<ReserveListType[]>(reserveList);
  const [reserveState, setReserveState] = useState<ReserveStateType[]>([
    { id: 10, name: '전체', isDone: true },
    { id: 0, name: '예약대기', isDone: false },
    { id: 1, name: '예약완료', isDone: false },
    { id: 2, name: '이용완료', isDone: false },
  ]);

  const handleClick = (id: number) => {
    setReserveState(
      reserveState.map((list) => {
        return list.id === id
          ? { ...list, isDone: true }
          : { ...list, isDone: false };
      }),
    );
    setNewReserveList(
      reserveList.filter((list) => {
        if (id !== 10) {
          return list.check_state === id;
        }
        return reserveList;
      }),
    );
  };
  return (
    <>
      <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
        예약내역
      </h2>
      <ReserveStateLists
        handleClick={handleClick}
        reserveState={reserveState}
      />
      <div className='flex flex-col gap-16pxr '>
        {newReserveList.map((list) => {
          return (
            <ReserveItem
              key={list.orderId}
              reserveState={reserveState}
              list={list}
            />
          );
        })}
      </div>
    </>
  );
}

export default ReserveList;
