import getOneReserve from '@/src/app/_data/profile/getOneReserve';
import ReserveInfo from '../../_components/ReserveInfo';

async function Page({ params }: { params: { id: number } }) {
  const { id: reserveId } = params;
  const getDetailReserve = await getOneReserve(1, reserveId);

  return (
    <>
      <ReserveInfo getDetailReserve={getDetailReserve} />
    </>
  );
}

export default Page;
