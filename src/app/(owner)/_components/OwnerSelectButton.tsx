import React, { ReactNode } from 'react';

interface Props {
  type?: 'small';
  buttonText: string;
  children: ReactNode;
}

function OwnerSelectButton({ type, buttonText, children }: Props) {
  const primaryTypeClassName =
    'bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-181pxr w-340pxr rounded-2xl flex flex-col gap-8pxr hover:border-2 hover:border-black justify-center items-start px-33pxr border border-gray500 hover:px-32pxr';
  const smallTypeClassName =
    'bg-white w-170pxr h-160pxr rounded-2xl shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col items-center gap-8pxr hover:border-2 justify-center items-start px-33pxr border border-gray500 hover:px-32pxr hover:border-black';
  const buttonClassName = type ? smallTypeClassName : primaryTypeClassName;

  return (
    <button className={buttonClassName}>
      {children}
      <p className='text-22pxr font-semibold'>{buttonText}</p>
    </button>
  );
}

export default OwnerSelectButton;
