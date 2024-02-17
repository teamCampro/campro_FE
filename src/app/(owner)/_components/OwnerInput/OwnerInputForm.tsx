'use client';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onSubmit?: () => void;
}

function OwnerInputForm({ children, onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) {
          onSubmit();
        }
      }}
      className='flex flex-col gap-7pxr'
    >
      {children}
    </form>
  );
}

export default OwnerInputForm;
