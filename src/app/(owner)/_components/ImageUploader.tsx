import React, { ChangeEvent, RefObject } from 'react';
import { IconPlus } from '@/public/svgs';
import Image from 'next/image';
import OwnerButton from './OwnerButton';

interface Props {
  isLoading: boolean;
  images: string[];
  inputRef: RefObject<HTMLInputElement>;
  gridType?: 'horizontal' | 'default';
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancelClick: (image: string) => void;
  onSetMainImage: (index: number) => void;
  isHovered: boolean[];
  onMouseEnter: (index: number) => void;
  onMouseLeave: (index: number) => void;
  onClickUpload: () => void;
}

function ImageUploader({
  isLoading,
  images,
  inputRef,
  gridType = 'default',
  onImageChange,
  onClickUpload,
  onCancelClick,
  onSetMainImage,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const isHorizontalTypeGrid = gridType === 'horizontal';
  const largeTypeClassName =
    'overflow-hidden relative flex-center h-370pxr w-615pxr rounded-[20px] border-2 border-dashed border-gray500';
  const primaryTypeClassName = isHorizontalTypeGrid
    ? 'overflow-hidden relative flex-center h-260pxr w-245pxr rounded-[20px] border-2 border-dashed border-gray500'
    : 'overflow-hidden relative flex-center h-300pxr w-320pxr rounded-[20px] border-2 border-dashed border-gray500';
  const gridClassName = isHorizontalTypeGrid
    ? 'grid grid-cols-4 gap-25pxr'
    : 'grid grid-cols-3 gap-25pxr';

  return (
    <div
      className={`${isLoading ? 'flex flex-col items-center gap-25pxr opacity-40' : 'flex flex-col items-center gap-25pxr'}`}
    >
      <form
        className={largeTypeClassName}
        onSubmit={(e) => e.preventDefault()}
        onMouseEnter={() => onMouseEnter(-1)}
        onMouseLeave={() => onMouseLeave(-1)}
      >
        <OwnerButton.ImageHover
          style={{
            display: images?.length === 0 || isHovered[0] ? 'initial' : 'none',
          }}
          onClick={onClickUpload}
        >
          이미지 업로드
        </OwnerButton.ImageHover>
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
              onClick={() => onCancelClick(images[0])}
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
            onChange={onImageChange}
            accept='image/*'
            multiple
          />
        </label>
      </form>
      <div className={gridClassName}>
        {images &&
          images.slice(1).map((image, index) => (
            <div
              key={image}
              className={primaryTypeClassName}
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={() => onMouseLeave(index)}
            >
              <Image
                fill
                src={image || ''}
                alt='업로드 될 캠핑장 이미지'
                objectFit='cover'
              />
              <button
                className='absolute right-10pxr top-10pxr rotate-45 rounded-full bg-white'
                onClick={() => onCancelClick(image)}
              >
                <IconPlus />
              </button>
              <OwnerButton.ImageHover
                style={{ display: isHovered[index + 1] ? 'initial' : 'none' }}
                onClick={() => onSetMainImage(index + 1)}
              >
                대표이미지 설정
              </OwnerButton.ImageHover>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ImageUploader;
