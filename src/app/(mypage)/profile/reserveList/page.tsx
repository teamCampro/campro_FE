'use client';
import ReserveList from '../_components/ReserveList';
import { Suspense } from 'react';

import getReserveList from '@/src/app/_data/profile/getReserveList';
import { useQuery } from '@tanstack/react-query';
import { Loading } from '@/components/index';

interface ProfilePageType {
  searchParams: {
    status: string;
  };
}

function Page({ searchParams }: ProfilePageType) {
  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }
  const { status } = searchParams;

  const { data: userReserveData } = useQuery({
    queryKey: ['userReserve', userId, status],
    queryFn: () => getReserveList(userId, status),
    staleTime: 60 * 1000,
  });
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ReserveList userReserveData={userReserveData} status={status} />
      </Suspense>
    </>
  );
}
export default Page;
