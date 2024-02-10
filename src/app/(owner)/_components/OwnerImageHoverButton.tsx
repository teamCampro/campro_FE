import React, { CSSProperties, ReactNode } from 'react';

interface Props {
  style: CSSProperties;
  onClick: () => void;
  children: ReactNode;
}
function OwnerImageHoverButton({ style, onClick, children }: Props) {
  return (
    <button
      style={style}
      className='absolute bottom-15pxr right-15pxr z-50 rounded-2xl bg-black px-10pxr py-6pxr text-12pxr font-semibold text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default OwnerImageHoverButton;
