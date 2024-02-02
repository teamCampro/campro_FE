import Link from 'next/link';
import { IconComming, IconPeople } from '@/public/svgs';

function Header() {
  return (
    <nav className='w-full border-b border-gray200'>
      <div className='m-auto flex h-80pxr max-w-1440pxr items-center justify-between gap-24pxr px-40pxr py-18pxr mobile:h-52pxr mobile:gap-10pxr mobile:px-20pxr mobile:py-[9.5px]'>
        <Link href='/' className='flex items-center gap-15pxr'>
          <div className='flex-center w-62pxr bg-primary100 px-10pxr py-8pxr text-white font-title2-semibold'>
            로고
          </div>
          <h1 className='block h-full text-black font-title3-semibold mobile:hidden'>
            CamPro
          </h1>
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
          <li className='ml-32pxr text-gray500 mobile:ml-0pxr'>
            <Link href='#none'>
              <IconPeople className='hidden mobile:block' />
              <span className='block mobile:hidden'>로그인/회원가입</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
