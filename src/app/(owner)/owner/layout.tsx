import React, { ReactNode } from 'react';
import OwnerHeader from '../_components/OwnerHeader';

interface Props {
  children: ReactNode;
}

function layout({ children }: Props) {
  return (
    <>
      <OwnerHeader />
      {children}
    </>
  );
}

export default layout;
