'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/png/hero.png';
import { useRouter } from 'next/navigation';
import { Button } from '..';

function Hero() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/onboard');
  };

  return (
    <div className='relative flex items-center justify-center'>
      <Image
        className='w-2400pxr tablet:h-501 h-486pxr object-cover tablet:w-full tablet:object-cover desktop:h-full'
        width={2400}
        height={936}
        src={heroImage}
        alt='히어로 이미지'
      />
      <div className='flex-center absolute top-62pxr flex-col  gap-28pxr tablet:top-64pxr'>
        <h1 className='text-center text-white font-title3-bold tablet:font-h1 '>
          나의 취향에 맞는
          <br />
          캠핑장을 쉽게 찾아보세요.
        </h1>
        <div>
          <Button.Circle
            custom='text-10pxr p-10pxr'
            size='md'
            onClick={handleButtonClick}
          >
            취향 등록하기
          </Button.Circle>
        </div>
      </div>
    </div>
  );
}

export default Hero;
