'use client';
import { IconPlus, IconUploadImage } from '@/public/svgs';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';

function OwnerImageUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState<boolean[]>([]);

  const handleClickUpload = () => {
    if (!inputRef.current) return;
    if (images.length >= 10) return alert('이미지 제거후 추가해주세요');
    inputRef.current.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const leftCount = files.length - (10 - images.length);
    console.log(files.length);
    console.log(images.length - 10);
    console.log(leftCount);
    if (leftCount <= 10) {
      Array.from(files).forEach((file) => {
        const imageUrl = URL.createObjectURL(file);
        setImages((prevImages) => [...prevImages, imageUrl]);
      });
      return;
    }

    return alert('이미지 10개 초과');
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

  const largeTypeClassName =
    'overflow-hidden relative flex-center h-370pxr w-615pxr rounded-[20px] border-2 border-dashed border-gray500';
  const primaryTypeClassName =
    'overflow-hidden relative flex-center h-300pxr w-320pxr rounded-[20px] border-2 border-dashed border-gray500';

  return (
    <div>
      <button onClick={handleClickUpload}>
        <IconUploadImage />
      </button>
      <div className='flex flex-col items-center gap-25pxr'>
        <form
          className={largeTypeClassName}
          onSubmit={(e) => e.preventDefault()}
        >
          {images[0] && (
            <>
              <Image
                fill
                src={images[0]}
                alt='업로드 될 캠핑장 이미지'
                objectFit='cover'
              />
              <button
                className='absolute right-10pxr top-10pxr rotate-45 rounded-full bg-white'
                onClick={() => handleCancelClick(images[0])}
              >
                <IconPlus />
              </button>
            </>
          )}
          <label htmlFor='image'>
            <input
              id='image'
              type='file'
              className='hidden'
              ref={inputRef}
              onChange={handleImageChange}
              accept='image/*'
              multiple
            />
          </label>
        </form>
        <div className='grid grid-cols-3 grid-rows-3 gap-25pxr'>
          {images &&
            images.slice(1).map((image, index) => (
              <div
                key={image}
                className={primaryTypeClassName}
                onMouseEnter={() =>
                  setIsHovered((prevHovered) => {
                    const updatedHovered = [...prevHovered];
                    updatedHovered[index] = true;
                    return updatedHovered;
                  })
                }
                onMouseLeave={() =>
                  setIsHovered((prevHovered) => {
                    const updatedHovered = [...prevHovered];
                    updatedHovered[index] = false;
                    return updatedHovered;
                  })
                }
              >
                <Image
                  fill
                  src={image || ''}
                  alt='업로드 될 캠핑장 이미지'
                  objectFit='cover'
                />
                <button
                  className='absolute right-10pxr top-10pxr rotate-45 rounded-full bg-white'
                  onClick={() => handleCancelClick(image)}
                >
                  <IconPlus />
                </button>
                <button
                  style={{ display: isHovered[index] ? 'initial' : 'none' }}
                  className='absolute right-10pxr top-30pxr'
                  onClick={() => handleSetMainImage(index + 1)}
                >
                  대표이미지 설정
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default OwnerImageUploader;
