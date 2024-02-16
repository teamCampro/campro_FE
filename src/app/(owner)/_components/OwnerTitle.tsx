import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function OwnerTitle({ children }: Props) {
  return <h1 className='text-32pxr font-semibold'>{children}</h1>;
}

export default OwnerTitle;
