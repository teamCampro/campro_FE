import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

function OwnerLinkButton({ href, icon, children }: Props) {
  return (
    <Link href={href}>
      <button className='flex-center h-275pxr w-275pxr rounded-full border-[3px] border-gray500 bg-white hover:border-black'>
        <div className='flex flex-col items-center gap-7pxr'>
          {icon}
          <p className='text-32pxr font-semibold'>{children}</p>
        </div>
      </button>
    </Link>
  );
}

export default OwnerLinkButton;
