'use client';
import ReserveList from '../_components/ReserveList';

import getReserveList from '@/src/app/_data/profile/getReserveList';
import { useQuery } from '@tanstack/react-query';

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

  const { data: userReserveData, isLoading } = useQuery({
    queryKey: ['userReserve', userId, status],
    queryFn: () => getReserveList(userId, status),
    staleTime: 60 * 1000,
    refetchOnMount: 'always',
  });
  return (
    <>
      <ReserveList
        userReserveData={userReserveData}
        status={status}
        isLoading={isLoading}
      />
    </>
  );
}
export default Page;
