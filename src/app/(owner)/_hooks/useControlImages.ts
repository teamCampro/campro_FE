import { SetStateAction, useState } from 'react';

function useControlImages() {
  const [images, setImages] = useState<string[]>([]);

  const handleSetImages = (images: SetStateAction<string[]>): void => {
    setImages(images);
  };

  return {
    images,
    handleSetImages,
  };
}

export default useControlImages;
