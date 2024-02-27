'use client';

import React, { ReactNode } from 'react';
import OwnerHeader from '../_components/OwnerHeader';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

function OwnerLayout({ children }: Props) {
  const pathName = usePathname();
  const isRegistrationPage = pathName.includes('/owner/registration');
  const isOwnerPage = pathName === '/owner';
  return (
    <div className='px-80pxr'>
      <OwnerHeader>
        {isRegistrationPage ? (
          <button className='flex-center h-50pxr w-136pxr text-20pxr font-semibold'>
            저장 후 나가기
          </button>
        ) : isOwnerPage ? (
          ''
        ) : (
          <Link href={'/owner'}>
            <button className='flex-center h-50pxr w-170pxr text-20pxr font-semibold'>
              사장님 페이지로 가기
            </button>
          </Link>
        )}
      </OwnerHeader>
      {children}
    </div>
  );
}

export default OwnerLayout;
