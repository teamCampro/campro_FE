'use client';
import { IconNavigationDown, IconNavigationUp } from '@/public/svgs';
import React, { MouseEventHandler, useState } from 'react';

interface Props {
  isPopoverOpen: boolean;
  handleClickPopover: () => void;
}

function OwnerPopoverButton({ isPopoverOpen, handleClickPopover }: Props) {
  return (
    <button
      type='button'
      className='absolute right-20pxr top-[50%] -translate-y-[50%]'
      onClick={handleClickPopover}
    >
      {isPopoverOpen ? <IconNavigationDown /> : <IconNavigationUp />}
    </button>
  );
}

export default OwnerPopoverButton;
