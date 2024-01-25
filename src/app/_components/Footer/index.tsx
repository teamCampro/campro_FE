import { IconArrowRightNormal } from '@/public/svgs';
import { Button } from '..';

function Footer() {
  return (
    <div className='mt-48pxr h-167pxr w-full bg-gray200 tablet:h-133pxr'>
      <div className='flex-center m-auto max-w-1440pxr justify-between gap-16pxr px-16pxr py-24pxr tablet:px-48pxr tablet:py-24pxr'>
        <ul className='font-caption2 text-gray500'>
          <li>상호명: 캠프로</li>
          <li>대표명: 홍길동</li>
          <li>통신판매신고번호: 2024-서울중고-0000</li>
          <li>주소: 서울특별시 강남구 삼성로 123 1층</li>
          <li>고객센터: 02-1234-5678</li>
        </ul>
        <Button type='careCenter'>
          고객센터
          <IconArrowRightNormal className=' w-20pxr' />
        </Button>
      </div>
    </div>
  );
}

export default Footer;
