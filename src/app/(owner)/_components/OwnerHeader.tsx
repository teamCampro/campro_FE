import Link from 'next/link';
import React from 'react';

function OwnerHeader() {
  return (
    <header className='mx-80pxr flex justify-between py-30pxr'>
      <Link href={'/'}>
        <button className='text-43pxr font-bold'>CamPro</button>
      </Link>
      <button className='h-67pxr w-136pxr text-24pxr font-semibold'>
        저장 후 나가기
      </button>
    </header>
  );
}

export default OwnerHeader;
