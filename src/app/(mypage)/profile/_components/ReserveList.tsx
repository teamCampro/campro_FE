import { ReserveListType } from '@/src/app/_constants/reserveList';
import ReserveItem from './ReserveItem';
import ReserveStateLists from './ReserveStateLists';

function ReserveList({ reserveList }: { reserveList: ReserveListType[] }) {
  return (
    <>
      <h2 className='mb-24pxr hidden font-title1-bold tabletMin:block'>
        예약내역
      </h2>
      <ReserveStateLists />
      <div className='flex flex-col gap-16pxr '>
        {reserveList.map((list) => {
          return <ReserveItem key={list.orderId} list={list} />;
        })}
        {/* {Array.from({ length: 6 }, (s, i) => {
          return <ReserveItem key={i} />;
        })} */}
      </div>
    </>
  );
}

export default ReserveList;
