'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import noImage from '@/public/webp/noImage.webp';
import { StaticImageData } from 'next/image';
interface CustomImageProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
}

function CustomImage({
  src,
  alt,
  width,
  height,
  className,
  fill,
}: CustomImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      setImageSrc(noImage);
    }
  }, [error]);

  return (
    <div className={className}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        onError={() => setError(true)}
        style={{ borderRadius: '8px' }}
      />
    </div>
  );
}

export default CustomImage;
