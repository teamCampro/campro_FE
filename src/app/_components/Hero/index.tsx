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
        className='h-486pxr w-full object-cover tablet:h-501pxr desktop:h-468pxr'
        width={1200}
        height={468}
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
          <Button.Circle size='md' onClick={handleButtonClick}>
            취향 등록하기
          </Button.Circle>
        </div>
      </div>
    </div>
  );
}

export default Hero;
