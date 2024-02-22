'use client';

import { UserInfoType } from '@/src/app/(mypage)/profile/_components/ReserveInfo';
import { UserInfo, getUserInfo } from '@/src/app/_data/sign/getUserInfo';
import { useQuery } from '@tanstack/react-query';

interface InfoAboutBookingPersonType {
  userDecideInfo: UserInfoType;
}

function InfoAboutBookingPerson({
  userDecideInfo,
}: InfoAboutBookingPersonType) {
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery<UserInfo, Error>({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
  return (
    <div className='flex flex-col gap-16pxr border-b border-gray200 pb-24pxr'>
      <h3 className='text-black font-title3-semibold tabletMin:font-title1-semibold'>
        예약자 정보
      </h3>
      <ul className='flex flex-col gap-16pxr'>
        <li className='flex items-center justify-start gap-40pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          예약자명
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {userInfo?.nickname}
          </span>
        </li>
        <li className='flex items-center justify-start gap-24pxr text-gray500 font-caption1-semibold tabletMin:font-body2-semibold'>
          휴대폰 번호
          <span className='text-gray800 font-body2-semibold tabletMin:font-body1-bold'>
            {userInfo?.phone}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default InfoAboutBookingPerson;
