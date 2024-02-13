'use client';

import React, { ReactNode } from 'react';
import OwnerHeader from '../_components/OwnerHeader';
import { usePathname } from 'next/navigation';

interface Props {
  children: ReactNode;
}

function OwnerLayout({ children }: Props) {
  const pathName = usePathname();
  const isRegistrationPage = pathName.includes('/owner/registration/location');
  return (
    <div className='px-80pxr'>
      <OwnerHeader>
        {isRegistrationPage && (
          <button className='flex-center h-50pxr w-136pxr text-20pxr font-semibold'>
            저장 후 나가기
          </button>
        )}
      </OwnerHeader>
      {children}
    </div>
  );
}

export default OwnerLayout;
