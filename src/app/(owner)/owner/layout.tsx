import React, { ReactNode } from 'react';
import OwnerHeader from '../_components/OwnerHeader';
import OwnerButton from '../_components/OwnerButton';

interface Props {
  children: ReactNode;
}

function layout({ children }: Props) {
  return (
    <>
      <OwnerHeader />
      {children}
      <OwnerButton type='prev' />
      <OwnerButton type='next' />
      <OwnerButton type='done' />
    </>
  );
}

export default layout;
