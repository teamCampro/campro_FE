'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/avifs/hero.avif';
import { useRouter } from 'next/navigation';
import { Button, SearchBar } from '..';

function Hero() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/onboard');
  };

  return (
    <div className='relative flex items-center justify-center'>
      <Image
        className='h-468pxr w-full object-cover mobile:h-486pxr tablet:h-501pxr'
        width={1200}
        height={468}
        src={heroImage}
        alt='히어로 이미지'
      />
      <div className='flex-center absolute top-64pxr flex-col gap-28pxr mobile:top-62pxr'>
        <h1 className='text-center text-white font-h1 mobile:font-title3-bold '>
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
      <div className='inset-x-0 mobile:32pxr absolute bottom-[-60px] z-[98] flex w-full justify-center px-28pxr tablet:px-40pxr'>
        <SearchBar />
      </div>
    </div>
  );
}

export default Hero;
