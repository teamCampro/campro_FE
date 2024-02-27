'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
function Page() {
  const router = useRouter();

  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }

  useEffect(() => {
    if (!userId) return router.push('/');
  }, [router, userId]);

  return (
    <div className='custom-height justify-center bg-gray100 bg-onboard bg-cover bg-center bg-no-repeat pt-201pxr mobile:pt-64pxr'>
      <div className='flex flex-col items-center gap-108pxr mobile:gap-64pxr'>
        <div className='flex-center flex-col gap-12pxr'>
          <h2 className='text-white font-h1-semibold mobile:font-title1-semibold'>
            나는 어떤 캠핑이 맞을까?
          </h2>
          <h4 className='text-gray200 font-title1 mobile:text-center mobile:font-body2'>
            캠퍼 테스트로 <br className='hidden mobile:block' />
            나에게 맞는 캠핑장을 알 수 있어요
          </h4>
        </div>
        <Link href={'/onboard/question'} passHref>
          <Button.Circle
            size='lg'
            custom='!py-20pxr !h-full mobile:hover:bg-primary100 mobile:hover:text-white mobile:active:text-black mobile:active:bg-primary50 active:text-black'
          >
            테스트 시작하기
          </Button.Circle>
        </Link>
      </div>
    </div>
  );
}

export default Page;
