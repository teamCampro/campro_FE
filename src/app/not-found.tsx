import Link from 'next/link';
import { Button, Footer, Header } from './_components';
import CircleButton from './_components/Button/CircleButton';
import React from 'react';

function NotFound() {
  return (
    <>
      <Header />
      <div className='flex-center not-found-screen flex-col gap-2pxr bg-gray100'>
        <h1 className='text-primary100 font-h1-semibold tabletMin:text-96pxr tabletMin:font-medium'>
          404
        </h1>
        <h2 className='text-primary100 font-title1-semibold tabletMin:font-h1-semibold'>
          해당 페이지를 찾을 수 없습니다.
        </h2>
        <p className='mt-10pxr text-center text-gray500 font-caption1-medium  tabletMin:font-title1'>
          입력하신 페이지의 주소가
          <br className='block tabletMin:hidden' /> 정확한지 다시 한번 확인해
          주세요.
          <div className='hidden tabletMin:block'>
            찾으시는 페이지의 주소가 잘못 입력되었거나,
          </div>
          <div className='hidden tabletMin:block'>
            주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
          </div>
        </p>
        <Link href={'/'} className='mt-38pxr ' passHref>
          <CircleButton
            size='md'
            custom='!bg-transparent !text-gray600 !font-body2-semibold border border-gray300 !w-192pxr !h-56pxr '
          >
            메인으로 가기
          </CircleButton>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
