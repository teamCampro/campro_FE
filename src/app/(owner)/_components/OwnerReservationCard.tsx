'use client';
import React, { useState } from 'react';
import OwnerButton from './OwnerButton';
import Image from 'next/image';
import OwnerReservationStatus from './OwnerReservationStatus';
import OwnerCheckInCheckOut from './OwnerCheckInCheckOut';
import { ModalOutside, ModalPortal } from '@/components/index';
import OwnerModalContent from './OwnerModal/OwnerModalContent';
import OwnerModalWrapper from './OwnerModal/OwnerModalWrapper';
import { motion } from 'framer-motion';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getReservationDetail } from '../../_data/owner/getReservationDetail';
import { patchReservationReject } from '../../_data/owner/patchReservationReject';
import patchReservationAccept from '../../_data/owner/patchReservationAccept';

export type ReservationType =
  | 'RESERVE_WAITING'
  | 'RESERVE_COMPLETE'
  | 'RESERVE_CANCEL'
  | 'SERVICE_COMPLETE'
  | undefined;

interface Props {
  imageUrl: string;
  type: ReservationType;
  site: string;
  checkIn: string;
  checkOut: string;
  clientName: string;
  reservationId: number;
}

function OwnerReservationCard({
  imageUrl,
  type,
  site,
  checkIn,
  checkOut,
  clientName,
  reservationId,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isDisabled = () => {
    switch (type) {
      case 'RESERVE_COMPLETE':
        return true;

      case 'RESERVE_CANCEL':
        return true;

      case 'RESERVE_WAITING':
        return false;
    }
  };
  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }

  const { data } = useQuery({
    queryKey: ['reservationDetail'],
    queryFn: () =>
      getReservationDetail({
        ownerId: Number(userId),
        reserveId: reservationId,
      }),
  });

  const acceptMutation = useMutation({
    mutationFn: () => patchReservationAccept(reservationId),
  });

  const rejectMutation = useMutation({
    mutationFn: () => patchReservationReject(reservationId),
  });

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <div className='relative flex h-244pxr w-526pxr flex-col gap-20pxr rounded-lg border border-[#E1E1E1] p-24pxr'>
        <div className='flex gap-24pxr'>
          <div className='h-140pxr w-140pxr overflow-hidden rounded-2xl'>
            <Image
              src={imageUrl}
              alt='객실 이미지'
              width={140}
              height={140}
              className='h-full w-full object-cover'
              priority
            />
          </div>
          <div className='flex gap-8pxr'>
            <div className='flex flex-col'>
              <div className='mb-10pxr'>
                <OwnerReservationStatus status={type} />
              </div>
              <span className='mb-8pxr text-24pxr font-bold leading-6 text-gray800'>
                {clientName}
              </span>
              <span className='mb-12pxr font-body2-medium'>{site}</span>
              <div className='flex items-end gap-16pxr'>
                <OwnerCheckInCheckOut type='checkIn' date={checkIn} />
                <span className='h-32pxr text-gray600 font-title3-bold'>-</span>
                <OwnerCheckInCheckOut type='checkOut' date={checkOut} />
              </div>
            </div>
            <div className='absolute right-24pxr top-24pxr flex items-start'>
              <OwnerButton.Reservation onClick={handleClick}>
                예약 상세
              </OwnerButton.Reservation>
            </div>
            {isModalOpen ? (
              <ModalPortal>
                <ModalOutside
                  onClose={handleClose}
                  custom='fixed left-0pxr bg-gray-950/70 top-0pxr z-[1000] flex h-screen w-full items-center justify-center overflow-hidden px-40pxr'
                >
                  <OwnerModalWrapper onCloseClick={handleClose}>
                    <OwnerModalContent reservationDetailInfo={data} />
                  </OwnerModalWrapper>
                </ModalOutside>
              </ModalPortal>
            ) : null}
          </div>
        </div>
        <div className='flex justify-between'>
          <OwnerButton.Reservation
            size='large'
            type='accept'
            isDisabled={isDisabled()}
            onClick={() => acceptMutation.mutate()}
          >
            수락
          </OwnerButton.Reservation>
          <OwnerButton.Reservation
            size='large'
            type='reject'
            isDisabled={isDisabled()}
            onClick={() => rejectMutation.mutate()}
          >
            취소
          </OwnerButton.Reservation>
        </div>
      </div>
    </motion.div>
  );
}

export default OwnerReservationCard;
