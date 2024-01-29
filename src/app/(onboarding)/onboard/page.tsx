'use client';

import Button from '@/components/Button';
import Link from 'next/link';

function page() {
  return (
    <div className='custom-height justify-center bg-gray100 bg-onboard bg-cover bg-center bg-no-repeat pt-201pxr mobile:pt-65pxr'>
      <div className='flex flex-col items-center gap-108pxr'>
        <div className='flex-center flex-col gap-12pxr'>
          <h2 className='text-white font-h1 mobile:font-title1-semibold'>
            나는 어떤 캠핑이 맞을까?
          </h2>
          <h4 className='text-gray200 font-title1 mobile:font-body2'>
            캠퍼 테스트로 나에게 맞는 캠핑장을 알 수 있어요
          </h4>
        </div>
        <Link href={'/onboard/question'} passHref>
          <Button.Circle size='lg'>테스트 시작하기</Button.Circle>
        </Link>
      </div>
    </div>
  );
}

export default page;
