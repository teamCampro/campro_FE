import Link from 'next/link';
import { IconComming, IconPeople } from '@/public/svgs';

function Header() {
  return (
    <nav className='m-auto flex h-52pxr max-w-1440pxr items-center justify-between gap-10pxr px-20pxr py-[9.5px] tablet:h-80pxr tablet:gap-24pxr tablet:px-40pxr tablet:py-18pxr'>
      <Link href='/' className='flex items-center gap-15pxr'>
        <div className='flex-center font-title2-semibold w-62pxr bg-primary100 px-10pxr py-8pxr text-white'>
          로고
        </div>
        <h1 className='hidden h-full text-black font-title3-semibold tablet:block'>
          CamPro
        </h1>
      </Link>
      <ul className='align-center flex items-center justify-between gap-16pxr font-caption1-semibold tablet:gap-48pxr tablet:tablet:font-title3-bold'>
        <li className='leading-0 shrink-0 text-primary100'>
          <Link href='#none'>캠퍼 테스트</Link>
        </li>
        <li>
          <Link href='#none'>
            <IconComming className='block tablet:hidden' />
            <span className='hidden tablet:block'>오픈 일정</span>
          </Link>
        </li>
        <li className='ml-0 text-gray500 tablet:ml-32pxr'>
          <Link href='#none'>
            <IconPeople className='block tablet:hidden' />
            <span className='hidden tablet:block'>로그인/회원가입</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
