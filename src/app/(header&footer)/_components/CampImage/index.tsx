'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import CampImageCarousel from './CampImageCarousel';
import CampImageForDesktop from './CampImageForDesktop';

export interface CampImageData {
  id: number;
  imgUrl: string;
}

function CampImage({ imgUrls }: { imgUrls: string[] }) {
  const tabletMediaQuery = useMediaQueries({ breakpoint: 1079 })?.mediaQuery
    .matches;
  const isCarousel = typeof window !== 'undefined' ? tabletMediaQuery : false;

  return (
    <section>
      {isCarousel ? (
        <CampImageCarousel imgUrls={imgUrls} />
      ) : (
        <CampImageForDesktop imgUrls={imgUrls} />
      )}
    </section>
  );
}

export default CampImage;
