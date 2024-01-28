import { IconPeople } from '@/public/svgs';
import Link from 'next/link';

function OnBoardingHeader() {
  return (
    <nav className='w-full border-b border-gray200'>
      <div className='custom-header m-auto grid h-52pxr max-w-1440pxr gap-1pxr px-20pxr tablet:h-80pxr tablet:px-40pxr tablet:py-18pxr'>
        <div className=' custom-header-logo flex items-center justify-center gap-15pxr '>
          <Link
            href='/'
            className='font-title2-semibold w-62pxr bg-primary100 px-10pxr py-8pxr text-center text-white'
          >
            로고
          </Link>
          <h3 className='text-black font-body2-semibold tablet:font-title3-semibold'>
            캠핑 <span className='hidden tablet:inline-block'>유형</span> 테스트
          </h3>
        </div>
        <Link
          href='#none'
          className=' flex items-center justify-end text-gray500 font-caption1-semibold tablet:tablet:font-title3-bold'
        >
          <IconPeople className='block tablet:hidden' />
          <span className='hidden tablet:block'>로그인/회원가입</span>
        </Link>
      </div>
    </nav>
  );
}

export default OnBoardingHeader;
