'use client';
import React, { ChangeEvent, SetStateAction, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageUploader from './ImageUploader';
import useUploadImageHover from '../_hooks/useUploadImageHover';
import uploadFile from '../../_utils/uploadToS3';
import loadingGif from '@/public/gifs/campro_loading.gif';
import Image from 'next/image';

interface Props {
  maxImages: number;
  gridType?: 'horizontal' | 'default';
  images: string[];
  onSetImages: (images: SetStateAction<string[]>) => void;
}

function OwnerImageUploader({
  maxImages,
  gridType,
  images,
  onSetImages,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useUploadImageHover();

  const handleClickUpload = () => {
    if (!inputRef.current) return;
    if (images.length >= maxImages)
      return toast.warn('이미지 제거 후 추가해주세요');
    inputRef.current.click();
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const leftCount = files.length + images.length - maxImages;

    if (leftCount <= 0) {
      setIsLoading(true);
      const uploadedImages: string[] = await Promise.all(
        Array.from(files).map(async (file) => {
          const imageUrl = await uploadFile(file);
          return imageUrl;
        }),
      );

      onSetImages((prev) => [...prev, ...uploadedImages]);
      setIsLoading(false);
    } else {
      toast.error(`이미지가 ${Math.abs(leftCount)}개 초과 되었습니다.`);
    }
  };

  const handleCancelClick = (image: string) => {
    URL.revokeObjectURL(image);
    onSetImages(images.filter((prevImage) => prevImage !== image));

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleSetMainImage = (index: number) => {
    const newImages = [...images];
    [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
    onSetImages(newImages);
  };

  return (
    <div>
      {isLoading && (
        <div className='fixed left-1/2 top-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2'>
          <Image
            width={150}
            height={150}
            src={loadingGif}
            alt='로딩 이미지'
            objectFit='cover'
          />
        </div>
      )}
      <ImageUploader
        images={images}
        inputRef={inputRef}
        onImageChange={handleImageChange}
        onCancelClick={handleCancelClick}
        onSetMainImage={handleSetMainImage}
        isHovered={isHovered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClickUpload={handleClickUpload}
        gridType={gridType}
        isLoading={isLoading}
      />

      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default OwnerImageUploader;
