import React, { ReactNode } from 'react';
import OwnerHeader from '../_components/OwnerHeader';

interface Props {
  children: ReactNode;
}

function OwnerLayout({ children }: Props) {
  return (
    <div className='px-80pxr'>
      <OwnerHeader />
      {children}
    </div>
  );
}

export default OwnerLayout;
