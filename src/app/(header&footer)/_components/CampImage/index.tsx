'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import CampImageCarousel from './CampImageCarousel';
import CampImageForDesktop from './CampImageForDesktop';
import { useState } from 'react';
export interface CampImageData {
  id: number;
  imgUrl: string;
}

function CampImage({ imgUrls }: { imgUrls: string[] }) {
  const tabletMediaQuery = useMediaQueries({ breakpoint: 1079 })?.mediaQuery
    .matches;
  const isCarousel = typeof window !== 'undefined' ? tabletMediaQuery : false;
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleRenderModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);
  return (
    <section>
      {isCarousel ? (
        <CampImageCarousel
          imgUrls={imgUrls}
          isOpen={isOpenModal}
          onOpen={handleRenderModal}
          onClose={handleCloseModal}
        />
      ) : (
        <CampImageForDesktop
          imgUrls={imgUrls}
          isOpen={isOpenModal}
          onOpen={handleRenderModal}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default CampImage;
