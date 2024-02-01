import { IconPeople } from '@/public/svgs';
import Link from 'next/link';

function OnBoardingHeader() {
  return (
    <nav className='mobile:w-full mobile:border-b mobile:border-gray200'>
      <div className='custom-header m-auto grid h-80pxr max-w-1440pxr px-40pxr mobile:h-52pxr mobile:gap-1pxr mobile:px-20pxr mobile:py-0pxr'>
        <div className=' custom-header-logo flex items-center justify-center gap-15pxr '>
          <Link
            href='/'
            className='w-62pxr bg-primary100 px-10pxr py-8pxr text-center text-white font-title2-semibold'
          >
            로고
          </Link>
          <h3 className='font-title3-semibold mobile:text-black mobile:font-body2-semibold'>
            캠핑 <span className='inline-block mobile:hidden'>유형</span>테스트
          </h3>
        </div>
        <Link
          href='#none'
          className='flex items-center justify-end font-title3-bold mobile:text-gray500 mobile:font-caption1-semibold tablet:items-center'
        >
          <IconPeople className='hidden mobile:block' />
          <span className='block mobile:hidden'>로그인/회원가입</span>
        </Link>
      </div>
    </nav>
  );
}

export default OnBoardingHeader;
