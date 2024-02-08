'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  copyTarget: string;
}

function Copy({ children, copyTarget }: Props) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyTarget);
      alert('클립보드에 복사되었습니다.');
    } catch (err) {
      console.error('오류 발생', err);
    }
  };

  return (
    <span
      onClick={handleCopy}
      className='cursor-pointer text-second100 font-body2-semibold'
    >
      {children}
    </span>
  );
}

export default Copy;
