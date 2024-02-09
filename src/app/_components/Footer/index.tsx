'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import { IconArrowRightNon } from '@/public/svgs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathName = usePathname();
  const isReserve = pathName.includes('reserve');
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;

  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : true;

  return (
    <footer
      className={`h-133pxr w-full bg-gray200 mobile:h-167pxr ${isMobile && isReserve ? 'hidden' : 'flex '}`}
    >
      <div className='flex-center m-auto w-1440pxr justify-between gap-16pxr px-48pxr py-24pxr mobile:px-16pxr'>
        <ul className='font-caption2-medium text-gray500'>
          <li>상호명: 캠프로</li>
          <li>대표명: 홍길동</li>
          <li>통신판매신고번호: 2024-서울중고-0000</li>
          <li>주소: 서울특별시 강남구 삼성로 123 1층</li>
          <li>고객센터: 02-1234-5678</li>
        </ul>
        <Link className='button-careCenter' href='#none'>
          고객센터
          <IconArrowRightNon className='w-20pxr' fill='#949494' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
