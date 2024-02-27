'use client';
import React from 'react';
import { motion } from 'framer-motion';

export type OwnerButtonType = 'prev' | 'next' | 'done' | 'registration';

interface Props {
  type: OwnerButtonType;
  customWidth?: string;
  custom?: string;
  onClick?: () => void;
}

function OwnerNavigateButton({
  type,
  customWidth = '',
  custom = '',
  onClick,
}: Props) {
  const primaryClassName =
    'text-28pxr w-130pxr py-10pxr px-20pxr flex-center rounded-2xl bg-gray700 text-white hover:bg-black ';
  const prevClassName =
    'text-28pxr font-semibold w-130pxr py-10pxr flex-center';

  const buttonConfig = () => {
    switch (type) {
      case 'prev':
        return { text: '뒤로', className: prevClassName };

      case 'next':
        return { text: '다음', className: primaryClassName };

      case 'done':
        return { text: '완료', className: primaryClassName };

      case 'registration':
        return { text: '등록', className: primaryClassName };
    }
  };

  const { text, className } = buttonConfig();

  return (
    <div className={`flex-center w-130pxr ${customWidth}`}>
      <motion.div
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className='w-full'
      >
        <button className={`${className} ${custom}`} onClick={onClick}>
          {text}
        </button>
      </motion.div>
    </div>
  );
}

export default OwnerNavigateButton;
