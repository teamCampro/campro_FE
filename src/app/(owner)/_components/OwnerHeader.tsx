import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

function OwnerHeader({ children }: Props) {
  return (
    <header className='flex items-center justify-between py-20pxr'>
      <Link href={'/'}>
        <button className='text-36pxr font-bold'>CamPro</button>
      </Link>
      {children}
    </header>
  );
}

export default OwnerHeader;
