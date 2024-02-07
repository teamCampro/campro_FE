'use client';
import { IconUploadImage } from '@/public/svgs';
import React, { useRef } from 'react';

interface Props {
  type?: 'large';
}

function OwnerImageInput({ type }: Props) {
  const imageRef = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    if (!imageRef.current) return;
    imageRef.current.click();
  };

  const largeTypeClassName =
    'flex-center h-370pxr w-615pxr rounded-[20px] border-2 border-dashed border-gray500';
  const primaryTypeClassName =
    'flex-center h-380pxr w-410pxr rounded-[20px] border-2 border-dashed border-gray500';
  const imageInputClassName = type ? largeTypeClassName : primaryTypeClassName;

  return (
    <form className={imageInputClassName}>
      <label htmlFor='image'>
        <input type='file' className='hidden' ref={imageRef} />
        <button onClick={handleClickUpload}>
          <IconUploadImage />
        </button>
      </label>
    </form>
  );
}

export default OwnerImageInput;
