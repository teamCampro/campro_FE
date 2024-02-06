import Link from 'next/link';
import React from 'react';

function OwnerHeader() {
  return (
    <header className='flex items-center justify-between py-20pxr'>
      <Link href={'/'}>
        <button className='text-36pxr font-bold'>CamPro</button>
      </Link>
      <button className='flex-center h-50pxr w-136pxr text-20pxr font-semibold'>
        저장 후 나가기
      </button>
    </header>
  );
}

export default OwnerHeader;
