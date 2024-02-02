import { IconLeftGray, IconRightGray } from '@/public/svgs';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: () => void;
  arrowDirection: 'left' | 'right';
  custom?: string;
}

function RoundArrowButton({
  children,
  onClick,
  arrowDirection,
  custom = '',
}: Props) {
  const iconArrow =
    arrowDirection === 'left' ? <IconLeftGray /> : <IconRightGray />;
  return (
    <button
      type='button'
      onClick={onClick}
      className={`absolute left-16pxr top-16pxr z-50 flex h-48pxr min-w-102pxr items-center gap-4pxr rounded-xl border border-gray300 bg-white px-16pxr py-12pxr text-gray600 font-body2-semibold ${custom}`}
    >
      {iconArrow}
      {children}
    </button>
  );
}

export default RoundArrowButton;
