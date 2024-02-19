'use client';

import { useAppSelector } from '@/hooks/redux';
import { useSearchParams } from 'next/navigation';
import getFormattedDate from '@/src/app/_utils/getFormattedDate';
import { ReserveListType } from '@/src/app/_constants/reserveList';

interface InfoAboutReserveType {
  campList?: ReserveListType;
}

function InfoAboutReserve({ campList }: InfoAboutReserveType) {
  const reserveInfo = useAppSelector((state) => state.reserveInfo);
  const searchParams = useSearchParams();

  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
        예약 정보
      </h3>
      <ul className='flex flex-col gap-16pxr'>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          인원
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {reserveInfo
              ? `성인 ${searchParams.get('adult')}명, 아이 ${searchParams.get('child')}명`
              : '성인 0명, 아이 0명'}
          </span>
        </li>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          일정
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {getFormattedDate([
              new Date(searchParams.get('checkIn') || new Date()),
              new Date(
                searchParams.get('checkOut') ||
                  new Date(Date.now() + 1000 * 60 * 60 * 24),
              ),
            ])}
          </span>
        </li>
        <li className='flex items-center justify-start gap-53pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          애견
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {reserveInfo ? `${searchParams.get('pet')}마리` : '0 마리'}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default InfoAboutReserve;
