'use client';

import Image from 'next/image';
import React from 'react';
import heroImage from '@/public/avifs/hero.avif';
import { useRouter } from 'next/navigation';
import { Button, SearchBar } from '..';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { isOpen } from '../../_slices/isOpenLoginRequiredModal';
import LoginRequiredModal from '../Modal/LoginRequiredModal';
import { setRedirectUrl } from '../../_slices/redirectUrl';
interface SearchParamsType {
  searchParams: {
    [key: string]: string;
  };
}
function Hero({ searchParams }: SearchParamsType) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isOpenModalLoginModal = useAppSelector(
    (state) => state.isOpenLoginRequiredModal,
  );

  let userId = '';
  if (typeof window !== 'undefined') {
    userId = window.localStorage.getItem('userId') || '';
  }

  const moveSignin = () => router.push('/signin');
  const closeModal = () => dispatch(isOpen(false));

  const handleButtonClick = () => {
    if (userId) {
      router.push('/onboard');
    } else {
      dispatch(setRedirectUrl('/onboard'));
      dispatch(isOpen(true));
    }
  };

  return (
    <>
      <div className='relative flex items-center justify-center'>
        <Image
          className='h-468pxr w-full object-cover mobile:h-486pxr tablet:h-501pxr'
          width={1200}
          height={468}
          src={heroImage}
          priority
          alt='히어로 이미지'
        />
        <div className='flex-center absolute top-64pxr flex-col gap-28pxr mobile:top-62pxr'>
          <h1 className='text-center text-white font-h1-semibold mobile:font-title3-bold '>
            나의 취향에 맞는
            <br />
            캠핑장을 쉽게 찾아보세요.
          </h1>
          <div>
            <Button.Circle
              size='md'
              onClick={handleButtonClick}
              custom='font-title1-bold mobile:font-title3-bold'
            >
              취향 등록하기
            </Button.Circle>
          </div>
        </div>
        <div className='inset-x-0 absolute bottom-[-56px] z-[98] flex w-full justify-center mobile:px-16pxr'>
          <SearchBar searchParams={searchParams} />
        </div>
      </div>
      {isOpenModalLoginModal && (
        <LoginRequiredModal onMove={moveSignin} onClose={closeModal} />
      )}
    </>
  );
}

export default Hero;
