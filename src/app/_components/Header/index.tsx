'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconComming } from '@/public/svgs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeaderDropdown from './_components/HeaderDropdown';

function Header() {
  const pathName = usePathname();
  const isReserve =
    pathName.includes('reserve') || pathName.includes('profile');
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  return (
    <nav
      className={`w-full border-b border-gray200 bg-white ${isMobile && isReserve ? 'hidden' : 'block'}`}
    >
      <div className='m-auto flex h-80pxr max-w-1440pxr items-center justify-between gap-24pxr px-40pxr py-18pxr mobile:h-52pxr mobile:gap-10pxr mobile:px-20pxr mobile:py-[9.5px]'>
        <Link href='/' className='flex items-center gap-15pxr'>
          <Image
            priority
            quality={100}
            src='/logo/campro.png'
            alt='캠프로 로고'
            width={154}
            height={25}
            className='mobile:hidden'
          />
          <Image
            priority
            quality={100}
            src='/logo/campro_symbol.png'
            alt='캠프로 로고'
            width={22}
            height={25}
            className='hidden mobile:block'
          />
        </Link>
        <ul className='align-center flex items-center justify-between gap-48pxr font-title3-bold mobile:gap-16pxr mobile:font-caption1-semibold'>
          <li className='leading-0 shrink-0 text-primary100'>
            <Link href='/onboard'>캠퍼 테스트</Link>
          </li>
          <li>
            <Link href='#none'>
              <IconComming className='hidden mobile:block' />
              <span className='block mobile:hidden'>오픈 일정</span>
            </Link>
          </li>
          <li className='relative ml-32pxr text-gray500 mobile:ml-0pxr'>
            <HeaderDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
