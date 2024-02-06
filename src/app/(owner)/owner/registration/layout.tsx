import React, { ReactNode } from 'react';
import OwnerHeader from '../../_components/OwnerHeader';
import OwnerButton from '../../_components/OwnerButton';
import OwnerBottomController from '../../_components/OwnerBottomController';

interface Props {
  children: ReactNode;
}

function layout({ children }: Props) {
  return (
    <div className='px-80pxr'>
      <OwnerHeader />
      {children}
      {/* <OwnerBottomController /> */}
    </div>
  );
}

export default layout;
