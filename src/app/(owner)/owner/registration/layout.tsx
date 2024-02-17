import React, { ReactNode } from 'react';
import OwnerHeader from '../../_components/OwnerHeader';
import OwnerBottomController from '../../_components/OwnerBottomController';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className='relative pb-120pxr'>
      {children}
      <OwnerBottomController />
    </div>
  );
}

export default Layout;
