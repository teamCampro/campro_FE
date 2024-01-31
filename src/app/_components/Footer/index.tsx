import { IconArrowRightNormal } from '@/public/svgs';
import Link from 'next/link';

function Footer() {
  return (
    <div className=' flex h-133pxr w-full bg-gray200 mobile:h-167pxr'>
      <div className='flex-center m-auto w-1440pxr justify-between gap-16pxr px-48pxr py-24pxr mobile:px-16pxr'>
        <ul className='text-gray500 font-caption2'>
          <li>상호명: 캠프로</li>
          <li>대표명: 홍길동</li>
          <li>통신판매신고번호: 2024-서울중고-0000</li>
          <li>주소: 서울특별시 강남구 삼성로 123 1층</li>
          <li>고객센터: 02-1234-5678</li>
        </ul>
        <Link className='button-careCenter' href='#none'>
          고객센터
          <IconArrowRightNormal className='w-20pxr' />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
