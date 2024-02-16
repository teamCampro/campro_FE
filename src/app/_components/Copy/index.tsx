'use client';

import { ReactNode } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import { Slide } from 'react-toastify';

interface Props {
  children: ReactNode;
  copyTarget: string;
}

const toastOptions: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  transition: Slide,
};

function Copy({ children, copyTarget }: Props) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyTarget);

      toast.success('복사가 완료되었습니다', {
        ...toastOptions,
      });
    } catch (err) {
      toast.error('복사에 실패하였습니다', {
        ...toastOptions,
      });
    }
  };
  return (
    <span
      onClick={handleCopy}
      className='cursor-pointer !leading-none text-second100 font-body2-semibold'
    >
      {children}
    </span>
  );
}

export default Copy;
