import HeaderDropdown from '@/components/Header/_components/HeaderDropdown';
import Image from 'next/image';
import Link from 'next/link';

function OnBoardingHeader() {
  return (
    <nav className='border-b border-gray200 bg-white mobile:w-full'>
      <div className='custom-header m-auto grid h-80pxr max-w-1440pxr items-center px-40pxr mobile:h-52pxr mobile:gap-1pxr mobile:px-20pxr mobile:py-0pxr'>
        <div className=' custom-header-logo flex items-center justify-center gap-15pxr '>
          <Link href='/'>
            <Image
              priority
              quality={100}
              src='/logo/campro_symbol.png'
              alt='캠프로 로고'
              width={22}
              height={25}
            />
          </Link>
          <h3 className='font-title3-semibold mobile:text-black mobile:font-body2-semibold'>
            캠핑 테스트
          </h3>
        </div>
        <div className='relative ml-auto text-gray500 font-title3-semibold'>
          <HeaderDropdown />
        </div>
      </div>
    </nav>
  );
}

export default OnBoardingHeader;
