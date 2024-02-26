'use client';

import getOneReserve from '@/src/app/_data/profile/getOneReserve';
import ReserveInfo from '../../_components/ReserveInfo';
import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Loading } from '@/components/index';

function Page({ params }: { params: { id: number } }) {
  const { id: reserveId } = params;

  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }
  const { data: getDetailReserve } = useQuery({
    queryKey: ['detailReserve ', userId, reserveId],
    queryFn: () => getOneReserve(userId, reserveId),
    staleTime: 60 * 1000,
  });

  if (!getDetailReserve) return <Loading />;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ReserveInfo
          getDetailReserve={getDetailReserve}
          reserveId={reserveId}
        />
      </Suspense>
    </>
  );
}

export default Page;
