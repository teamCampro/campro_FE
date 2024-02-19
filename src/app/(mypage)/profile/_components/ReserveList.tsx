'use client';

import { ReserveListType } from '@/src/app/_constants/reserveList';
import ReserveItem from './ReserveItem';
import ReserveStateLists from './ReserveStateLists';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface ReserveStateType {
  id: number;
  name: string;
  isDone: boolean;
}

function ReserveList(/* { reserveList }: { reserveList: ReserveListType[] } */) {
  /* api 연결되면 차후에 useEffect, newReserveList 지울것 현 페이지 상위 부모에서 서버사이드로 보낼것  reserveListstate 값에는 props로 받아온값 넣어둘것 null 제거*/
  const [reserveList, setReserveList] = useState<ReserveListType[] | null>(
    null,
  );
  const [newReserveList, setNewReserveList] = useState<
    ReserveListType[] | null
  >(reserveList ? reserveList : null);
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
    if (reserveList) {
      setNewReserveList(
        reserveList.filter((list) => {
          if (id !== 10) {
            return list.check_state === id;
          }
          return reserveList;
        }),
      );
    }
  };

  /* api 연결되면 차후에 useEffect 지울것 현 페이지 상위 부모에서 서버사이드로 보낼것 */
  const getReserveData = async () => {
    const reserveData = await axios.get(
      'http://localhost:3000/data/reserveListMockData.json',
    );
    const { data } = reserveData;
    setReserveList(data);
  };

  useEffect(() => {
    getReserveData();
  }, []);

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
        {(newReserveList ? newReserveList : reserveList)?.map((list) => {
          return (
            <ReserveItem
              key={list.orderId}
              reserveState={reserveState}
              list={list}
            />
          );
        })}
        {/* {Array.from({ length: 6 }, (s, i) => {
          return <ReserveItem key={i} />;
        })} */}
      </div>
    </>
  );
}

export default ReserveList;
