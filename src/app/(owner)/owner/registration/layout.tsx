import React, { ReactNode } from 'react';
import OwnerHeader from '../../_components/OwnerHeader';
import OwnerBottomController from '../../_components/OwnerBottomController';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className='relative pb-120pxr'>
      <div className='px-80pxr'>
        <OwnerHeader>
          <button className='flex-center h-50pxr w-136pxr text-20pxr font-semibold'>
            저장 후 나가기
          </button>
        </OwnerHeader>
        {children}
      </div>
      <OwnerBottomController />
    </div>
  );
}

export default Layout;
