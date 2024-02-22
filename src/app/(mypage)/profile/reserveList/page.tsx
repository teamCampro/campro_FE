import getReserveList from '@/src/app/_data/profile/getReserveList';
import ReserveList from '../_components/ReserveList';
import { Suspense } from 'react';
import Loading from '@/src/app/Loading';

interface ProfilePageType {
  searchParams: {
    status: string;
  };
}

export default async function Page({ searchParams }: ProfilePageType) {
  const { status } = searchParams;
  const userReserveData = await getReserveList('1', status);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ReserveList userReserveData={userReserveData} status={status} />
      </Suspense>
    </>
  );
}
