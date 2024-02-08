'use client';

import useMediaQueries from '@/hooks/useMediaQueries';
import CampImageCarousel from './CampImageCarousel';
import CampImageForDesktop from './CampImageForDesktop';
import axios from 'axios';
import { useEffect, useState } from 'react';

export interface CampImageData {
  id: number;
  imgUrl: string;
}

function CampImage() {
  const [campImages, setCampImages] = useState<CampImageData[] | null>(null);

  useEffect(() => {
    const getCampImage = async () => {
      try {
        const response = await axios.get<CampImageData[]>(
          `/data/campImageMockData.json`,
        );
        setCampImages(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getCampImage();
  }, []);

  const tabletMediaQuery = useMediaQueries({ breakpoint: 1079 })?.mediaQuery
    .matches;
  const isCarousel = typeof window !== 'undefined' ? tabletMediaQuery : false;

  return isCarousel ? (
    <CampImageCarousel campImages={campImages} />
  ) : (
    <CampImageForDesktop campImages={campImages} />
  );
}

export default CampImage;