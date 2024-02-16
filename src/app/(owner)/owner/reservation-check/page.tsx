'use client';
import axios from 'axios';
import { ReservationType } from '../../_components/OwnerReservationCard';
import OwnerReservationCardList from '../../_components/OwnerReservationCardList';
import OwnerTitle from '../../_components/OwnerTitle';
import { useEffect, useState } from 'react';
import OwnerReservationCounts from '../../_components/OwnerReservationCounts';

export interface ReservationData {
  imageUrl: string;
  type: ReservationType;
  siteArea: string;
  site: string;
  clientName: string;
  checkIn: string;
  checkOut: string;
}

interface ReservationTypeCount {
  total: number;
  pending: number;
  accepted: number;
  rejected: number;
}

function ReservationCheckPage() {
  const [reservationData, setReservationData] = useState<ReservationData[]>([]);
  const [reservationTypeCount, setReservationTypeCount] =
    useState<ReservationTypeCount>({
      total: 0,
      pending: 0,
      accepted: 0,
      rejected: 0,
    });

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get('/data/reservationMockData.json');
      setReservationData(response.data);
    };

    fetch();
  }, []);

  useEffect(() => {
    const types = ['pending', 'accepted', 'rejected'];

    const calcReservationCount = () => {
      const totalCount = reservationData.length;
      const counts = types.map(
        (type) => reservationData.filter((data) => data.type === type).length,
      );

      setReservationTypeCount({
        total: totalCount,
        pending: counts[0],
        accepted: counts[1],
        rejected: counts[2],
      });
    };
    calcReservationCount();
  }, [reservationData]);

  return (
    <div className=' flex flex-col items-center gap-80pxr'>
      <OwnerTitle>예약 확인</OwnerTitle>
      <div className='relative'>
        <div className='absolute -top-105pxr right-1pxr'>
          <OwnerReservationCounts
            total={reservationTypeCount.total}
            pending={reservationTypeCount.pending}
            rejected={reservationTypeCount.rejected}
            accepted={reservationTypeCount.accepted}
          />
        </div>
        <OwnerReservationCardList reservationData={reservationData} />
      </div>
    </div>
  );
}

export default ReservationCheckPage;
