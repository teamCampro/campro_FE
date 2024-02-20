'use client';

import { IconArrowLeftNon } from '@/public/svgs';
import { useRouter } from 'next/navigation';
function HeaderContent() {
  const router = useRouter();
  return (
    <>
      <IconArrowLeftNon
        fill='#949494'
        className='absolute left-16pxr top-1/2 block -translate-y-1/2 tabletMin:hidden'
        onClick={() => router.back()}
      />
      예약 요청
    </>
  );
}

export default HeaderContent;
