'use client';
import { IconPlus, IconUploadImage } from '@/public/svgs';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

interface Props {
  type?: 'large';
}

function OwnerImageInput({ type }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<string>('');
  const [preview, setPreview] = useState<string | null>('');
  const handleClickUpload = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ImageUrl = URL.createObjectURL(file);

      setImageFile(file.name);
      setPreview(ImageUrl);
    }
  };

  const handleCancelClick = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
      setPreview(null);
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setImageFile('');
  };

  const largeTypeClassName =
    'overflow-hidden relative flex-center h-370pxr w-615pxr rounded-[20px] border-2 border-dashed border-gray500';
  const primaryTypeClassName =
    'overflow-hidden relative flex-center h-380pxr w-410pxr rounded-[20px] border-2 border-dashed border-gray500';
  const imageInputClassName = type ? largeTypeClassName : primaryTypeClassName;

  return (
    <form className={imageInputClassName} onSubmit={(e) => e.preventDefault()}>
      {preview && (
        <Image
          fill
          src={preview || ''}
          alt={imageFile || '업로드 될 캠핑장 이미지'}
          objectFit='cover'
        />
      )}

      <label htmlFor='image'>
        <input
          id='image'
          type='file'
          className='hidden'
          ref={inputRef}
          onChange={handleImageChange}
          accept='image/*'
        />
        <button onClick={handleClickUpload}>
          <IconUploadImage />
        </button>
      </label>
      {preview && (
        <button
          className='absolute right-10pxr top-10pxr rotate-45 rounded-full bg-white'
          onClick={handleCancelClick}
        >
          <IconPlus />
        </button>
      )}
    </form>
  );
}

export default OwnerImageInput;
