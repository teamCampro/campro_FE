'use client';
import useUploadImageHover from '@/hooks/useUploadImageHover';
import React, { ChangeEvent, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MAX_IMAGES } from '../_constants/common';
import ImageUploader from './ImageUploader';

function OwnerImageUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const { isHovered, handleMouseEnter, handleMouseLeave } =
    useUploadImageHover();

  const handleClickUpload = () => {
    if (!inputRef.current) return;
    if (images.length >= 10) return toast.warn('이미지 제거후 추가해주세요');
    inputRef.current.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const leftCount = files.length + images.length - MAX_IMAGES;

    if (leftCount <= 0) {
      Array.from(files).forEach((file) => {
        const imageUrl = URL.createObjectURL(file);
        setImages((prevImages) => [...prevImages, imageUrl]);
      });
      return;
    }

    return toast.error(`이미지가 ${Math.abs(leftCount)}개 초과 되었습니다.`);
  };

  const handleCancelClick = (image: string) => {
    URL.revokeObjectURL(image);
    setImages((prevImages) =>
      prevImages.filter((prevImage) => prevImage !== image),
    );

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleSetMainImage = (index: number) => {
    const newImages = [...images];
    [newImages[0], newImages[index]] = [newImages[index], newImages[0]];
    setImages(newImages);
  };

  return (
    <div>
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
