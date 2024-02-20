'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useMediaQueries from '@/hooks/useMediaQueries';
import { IconPeople } from '@/public/svgs';
import { setProfileState } from '@/src/app/_utils/profileState';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import HeaderModal from './HeaderModal';

interface UserOptionsType {
  id: number;
  list: string;
  link?: string;
  isDone: boolean;
}

export const USER_OPTIONS: UserOptionsType[] = [
  { id: 1, list: '예약 내역', link: '/profile/reserveList', isDone: false },
  { id: 2, list: '계정 관리', link: '/profile', isDone: false },
  { id: 3, list: '사장님 전환', link: '/profile', isDone: false },
  { id: 4, list: '설정', link: '/profile/setting', isDone: false },
  { id: 5, list: '로그아웃', isDone: false },
];

function HeaderDropdown() {
  const [isClose, setIsClose] = useState(false);
  const pathName = usePathname();
  const isOnboard = pathName.includes('onboard');
  const profile = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  const login = '민섭쨩쨩';

  const handleModal = () => {
    if (!isMobile) return;
    setIsClose(!isClose);
  };

  const handleClose = () => {
    setIsClose(false);
  };

  const handleClick = (id: number) => {
    dispatch(setProfileState(id));
  };

  return login ? (
    <>
      <div className='flex-center group h-40pxr' onClick={handleModal}>
        <div className='h-24pxr w-24pxr cursor-pointer tabletMin:h-32pxr tabletMin:w-32pxr'>
          <IconPeople
            width='100%'
            height='100%'
            viewBox='0 0 24 24'
            fill='black'
          />
        </div>
        <ul
          className={`flex-center invisible absolute left-[49%] ${isOnboard ? 'top-60pxr' : 'top-40pxr'} z-[99999] w-113pxr -translate-x-1/2 flex-col rounded-xl border border-gray-300 bg-white py-16pxr group-hover:visible mobile:hidden`}
        >
          {profile.map((option) => {
            return option.link ? (
              <Link className='w-full' href={option.link} key={option.id}>
                <li
                  className='flex-center h-34pxr cursor-pointer justify-start whitespace-nowrap px-20pxr text-gray800 font-body2-medium hover:text-primary100'
                  onClick={() => handleClick(option.id)}
                >
                  {option.list}
                </li>
              </Link>
            ) : (
              <li
                key={option.id}
                className='flex-center h-34pxr w-full cursor-pointer justify-start px-20pxr text-gray500 font-body2-medium hover:text-primary100'
              >
                {option.list}
              </li>
            );
          })}
        </ul>
      </div>
      {isClose && <HeaderModal handleClick={handleModal} />}
    </>
  ) : (
    <Link href='/signin'>
      <IconPeople className='hidden mobile:block' />
      <span className='block mobile:hidden'>로그인/회원가입</span>
    </Link>
  );
}

export default HeaderDropdown;
