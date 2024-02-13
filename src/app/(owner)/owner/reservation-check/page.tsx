import OwnerReservationCardList from '../../_components/OwnerReservationCardList';
import OwnerTitle from '../../_components/OwnerTitle';

function ReservationCheckPage() {
  return (
    <div className='flex flex-col items-center gap-80pxr'>
      <OwnerTitle>예약 확인</OwnerTitle>
      <OwnerReservationCardList />
    </div>
  );
}

export default ReservationCheckPage;
