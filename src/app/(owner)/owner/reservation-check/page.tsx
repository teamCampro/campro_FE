'use client';
import { ReservationType } from '../../_components/OwnerReservationCard';
import OwnerReservationCardList from '../../_components/OwnerReservationCardList';
import OwnerTitle from '../../_components/OwnerTitle';
import { useEffect, useState } from 'react';
import OwnerReservationCounts from '../../_components/OwnerReservationCounts';
import { useQuery } from '@tanstack/react-query';
import { getReservationList } from '@/src/app/_data/owner/getReservationList';

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
  const [reservationTypeCount, setReservationTypeCount] =
    useState<ReservationTypeCount>({
      total: 0,
      pending: 0,
      accepted: 0,
      rejected: 0,
    });

  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }

  const { data } = useQuery({
    queryKey: ['reservationList'],
    queryFn: () => getReservationList(userId),
  });
  const reservationData = data?.ownerReservationList;

  useEffect(() => {
    const types = [
      'RESERVE_WAITING',
      'RESERVE_COMPLETE',
      'RESERVE_CANCEL',
      'SERVICE_COMPLETE',
    ];

    const calcReservationCount = () => {
      if (reservationData) {
        const totalCount = reservationData.length;
        const counts = types.map(
          (type) =>
            reservationData.filter((data) => data.status === type).length,
        );

        setReservationTypeCount({
          total: totalCount,
          pending: counts[0],
          accepted: counts[1],
          rejected: counts[2],
        });
      }
    };
    calcReservationCount();
  }, [reservationData]);

  return (
    <div className='relative flex flex-col items-center gap-80pxr'>
      <OwnerTitle>예약 확인</OwnerTitle>
      <div className='absolute right-0pxr top-0pxr'>
        <OwnerReservationCounts
          total={reservationTypeCount.total}
          pending={reservationTypeCount.pending}
          rejected={reservationTypeCount.rejected}
          accepted={reservationTypeCount.accepted}
        />
      </div>
      <div className='relative'>
        <OwnerReservationCardList reservationData={reservationData} />
      </div>
    </div>
  );
}

export default ReservationCheckPage;
